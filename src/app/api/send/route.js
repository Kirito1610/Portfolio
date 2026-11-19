import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESENDAPI);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "Vishal Kundu <onboarding@resend.dev>",
      to: [fromEmail, 'vishalkundu1610@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
