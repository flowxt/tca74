import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type CandidatureFormData = {
  name: string;
  email: string;
  phone?: string;
  situation: string;
  attentes?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const body: CandidatureFormData = await request.json();
    const { name, email, phone, situation, attentes } = body;

    if (!name || !email || !situation) {
      return NextResponse.json(
        { error: "Merci de renseigner votre nom, votre email et quelques mots sur vous." },
        { status: 400 }
      );
    }

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #4a3a22; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f3e4bf 0%, #dfb65e 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center; }
    .header h1 { color: #5b451d; margin: 0; font-size: 22px; }
    .content { background: #fdf9f0; padding: 30px; border: 1px solid #e7d6b8; border-top: none; border-radius: 0 0 16px 16px; }
    .field { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0e6d2; }
    .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .label { font-weight: 600; color: #a9761c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
    .value { color: #4a3a22; font-size: 16px; }
    .message-box { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e7d6b8; white-space: pre-wrap; }
    .footer { text-align: center; padding: 20px; color: #a9761c; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nouvelle candidature — ÉCLORE Premium</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nom</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #a9761c;">${escapeHtml(email)}</a></div>
      </div>
      ${
        phone
          ? `
      <div class="field">
        <div class="label">Téléphone</div>
        <div class="value"><a href="tel:${escapeHtml(phone)}" style="color: #a9761c;">${escapeHtml(phone)}</a></div>
      </div>
      `
          : ""
      }
      <div class="field">
        <div class="label">Là où elle en est / ce qui l'amène</div>
        <div class="message-box">${escapeHtml(situation)}</div>
      </div>
      ${
        attentes
          ? `
      <div class="field">
        <div class="label">Ce qu'elle aimerait explorer</div>
        <div class="message-box">${escapeHtml(attentes)}</div>
      </div>
      `
          : ""
      }
    </div>
    <div class="footer">
      Candidature envoyée depuis la landing ÉCLORE
    </div>
  </div>
</body>
</html>
    `;

    const { error } = await resend.emails.send({
      from: "Landing ÉCLORE <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "l.baud@protonmail.com",
      replyTo: email,
      subject: `[ÉCLORE Premium] Candidature - ${name}`,
      html: emailContent,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de votre candidature." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
