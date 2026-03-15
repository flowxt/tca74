import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Adresse email requise" },
        { status: 400 }
      );
    }

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #4A3728; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #F5E6E0 0%, #E8D5C4 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center; }
    .header h1 { color: #4A3728; margin: 0; font-size: 24px; }
    .content { background: #FFFBF8; padding: 30px; border: 1px solid #E8D5C4; border-top: none; border-radius: 0 0 16px 16px; }
    .email-box { background: white; padding: 16px 20px; border-radius: 12px; border: 1px solid #E8D5C4; font-size: 18px; text-align: center; }
    .footer { text-align: center; padding: 20px; color: #8B7355; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 Nouvelle inscription newsletter</h1>
    </div>
    <div class="content">
      <p style="text-align: center; color: #8B7355; font-size: 14px; margin-bottom: 20px;">
        Une personne souhaite recevoir vos articles et ressources :
      </p>
      <div class="email-box">
        <a href="mailto:${email}" style="color: #8B7355; font-weight: 600;">${email}</a>
      </div>
    </div>
    <div class="footer">
      Inscription depuis le blog de psy-tca-annecy.com
    </div>
  </div>
</body>
</html>
    `;

    const { error } = await resend.emails.send({
      from: "Site Web <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "l.baud@protonmail.com",
      replyTo: email,
      subject: `[Newsletter] Nouvelle inscription - ${email}`,
      html: emailContent,
    });

    if (error) {
      console.error("Erreur Resend newsletter:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur serveur newsletter:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
