import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const body: ContactFormData = await request.json();
    const { name, email, service, message } = body;

    // Validate inputs
    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send email to FlowNexa
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "flownexahere@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "We received your message - FlowNexa",
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Our team is excited to learn more about your project and how we can help.</p>
        <br>
        <p>Best regards,<br>The FlowNexa Team</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
