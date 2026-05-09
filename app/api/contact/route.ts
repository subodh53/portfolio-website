import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to you
    await resend.emails.send({
      from: "Portfolio Contact <portfolio@contact.svxtech.in>",
      to: "vedhesubodh@gmail.com", // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">This message was sent from your portfolio website.</p>
        </div>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Portfolio Contact <portfolio@contact.svxtech.in>",
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p style="color: #666;">Hi ${name},</p>
          <p style="color: #666;">Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          <p style="color: #666;">Best regards,<br/>Subodh</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
