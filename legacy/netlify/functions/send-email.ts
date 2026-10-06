import nodemailer from "nodemailer";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body: ContactFormData = await request.json();
    const { name, email, service, message } = body;

    // Validate inputs
    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, service, and message" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const recipient = "flownexahere@gmail.com";
    const subject = `[FlowNexa Inquiry] ${service} — ${name}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #1A1A1A;">
        <h2 style="color: #B4491C;">New FlowNexa Contact Form Submission</h2>
        <hr style="border: 0; border-top: 1px solid #D6CFC6; margin: 15px 0;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Service Scope:</strong> ${service}</p>
        <p><strong>Project Details:</strong></p>
        <blockquote style="background: #F5F0EB; padding: 15px; border-left: 4px solid #B4491C; margin: 10px 0;">
          ${message.replace(/\n/g, "<br>")}
        </blockquote>
      </div>
    `;

    // Strategy 1: Use Resend if API key is provided
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "FlowNexa Inquiry <onboarding@resend.dev>",
        to: recipient,
        replyTo: email,
        subject,
        html: htmlBody,
      });

      return new Response(
        JSON.stringify({ success: true, provider: "Resend", message: "Email sent successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Strategy 2: Use Nodemailer Gmail if GMAIL_USER & GMAIL_PASSWORD are provided
    if (process.env.GMAIL_USER && process.env.GMAIL_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: recipient,
        replyTo: email,
        subject,
        html: htmlBody,
      });

      return new Response(
        JSON.stringify({ success: true, provider: "Nodemailer", message: "Email sent successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        error: "Server email environment variables (RESEND_API_KEY or GMAIL_USER/GMAIL_PASSWORD) not configured.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email processing error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
