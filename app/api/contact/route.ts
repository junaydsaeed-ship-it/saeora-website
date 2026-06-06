import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, role, brand, platform, message } = await req.json();

  const context =
    role === "brand"
      ? `Brand: ${brand || "not provided"}`
      : role === "creator"
        ? `Platform/Handle: ${platform || "not provided"}`
        : "";

  const { error } = await resend.emails.send({
    from: "Saeora Contact <onboarding@resend.dev>",
    to: "junayd@saeora.space",
    replyTo: email,
    subject: `New enquiry from ${name} (${role || "unknown"})`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Role: ${role || "not selected"}`,
      context,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
