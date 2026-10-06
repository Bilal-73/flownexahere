/**
 * Site-wide progressive enhancements. Everything works without JS;
 * this script only adds conveniences. Bundled by Astro as one small module.
 */

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/* ---------------- Analytics: GA4 behind consent + CTA tracking ---------------- */

const CONSENT_KEY = "fn-analytics-consent";

function readConsent(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage blocked: consent applies to this page view only */
  }
}

function loadGa(id: string) {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

function initAnalytics() {
  const gaId = document.querySelector<HTMLMetaElement>('meta[name="fn-ga-id"]')?.content;
  if (!gaId) return;
  const notice = document.getElementById("consent-notice");
  const consent = readConsent();
  if (consent === "granted") loadGa(gaId);
  else if (consent === null && notice) notice.hidden = false;

  notice?.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("[data-consent]");
    if (!btn) return;
    const value = btn.dataset.consent === "granted" ? "granted" : "denied";
    writeConsent(value);
    notice.hidden = true;
    if (value === "granted") loadGa(gaId);
  });
}

/** Sends an event to GA4 if (and only if) it is loaded. No-op otherwise. */
export function track(event: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", event, params);
}

function initCtaTracking() {
  document.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
    if (!el || !window.gtag) return;
    track("cta_click", {
      cta: el.dataset.track,
      page: location.pathname,
      link_url: el instanceof HTMLAnchorElement ? el.href : undefined,
    });
  });
}

/* ---------------- Email de-obfuscation ---------------- */

function initEmails() {
  document.querySelectorAll<HTMLAnchorElement>("a[data-email]").forEach((a) => {
    try {
      const address = [...atob(a.dataset.email!)].reverse().join("");
      a.href = `mailto:${address}`;
      const label = a.querySelector<HTMLElement>("[data-email-label]");
      if (label && !a.dataset.emailText) label.textContent = address;
    } catch {
      /* leave the fallback link to the contact form */
    }
  });
}

/* ---------------- Mobile menu ---------------- */

function initMenu() {
  const menu = document.querySelector<HTMLDetailsElement>("details[data-mobile-menu]");
  if (!menu) return;
  menu.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest("a")) menu.open = false;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }
  });
}

/* ---------------- Netlify Forms: AJAX submit with no-JS fallback ---------------- */

function initForms() {
  document.querySelectorAll<HTMLFormElement>("form[data-ajax-form]").forEach((form) => {
    const status = form.querySelector<HTMLElement>("[data-form-status]");
    const success = document.getElementById(form.dataset.successTarget ?? "");
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      submit?.setAttribute("disabled", "");
      if (status) status.textContent = "Sending…";
      try {
        const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
        });
        if (!res.ok) throw new Error(String(res.status));
        track("form_submit", { form: form.getAttribute("name") });
        form.reset();
        if (success) {
          form.hidden = true;
          success.hidden = false;
          success.focus();
        } else if (status) {
          status.textContent = "Thanks! Your message was sent.";
        }
      } catch {
        if (status)
          status.textContent =
            "Sorry, that didn't send. Please try again, or use WhatsApp or email instead.";
      } finally {
        submit?.removeAttribute("disabled");
      }
    });
  });

  // Preselect the topic from ?topic=call (used by "Book a call" when no booking URL is set).
  const topic = new URLSearchParams(location.search).get("topic");
  if (topic) {
    const select = document.querySelector<HTMLSelectElement>('select[name="topic"]');
    const option = select?.querySelector<HTMLOptionElement>(`option[data-key="${CSS.escape(topic)}"]`);
    if (select && option) select.value = option.value;
  }
}

/* ---------------- Click-to-load video (no third-party requests until clicked) ---------------- */

function initVideos() {
  document.querySelectorAll<HTMLButtonElement>("button[data-video-src]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = btn.dataset.videoSrc!;
      iframe.title = btn.dataset.videoTitle ?? "Video";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      iframe.className = "absolute inset-0 h-full w-full";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      btn.replaceWith(iframe);
      track("video_play", { video: btn.dataset.videoTitle });
    });
  });
}

initEmails();
initMenu();
initForms();
initVideos();
initAnalytics();
initCtaTracking();
