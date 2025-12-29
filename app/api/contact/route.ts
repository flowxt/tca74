import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  difficulty: string;
  hasCompletedQuiz: boolean;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, difficulty, hasCompletedQuiz, message } = body;

    // Validation basique
    if (!name || !email || !subject || !difficulty || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Créer le contenu de l'email
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
    .field { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #F5E6E0; }
    .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .label { font-weight: 600; color: #8B7355; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
    .value { color: #4A3728; font-size: 16px; }
    .quiz-badge { display: inline-block; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; }
    .quiz-yes { background: #A8B5A0; color: white; }
    .quiz-no { background: #E8D5C4; color: #4A3728; }
    .message-box { background: white; padding: 20px; border-radius: 12px; border: 1px solid #E8D5C4; white-space: pre-wrap; }
    .footer { text-align: center; padding: 20px; color: #8B7355; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 Nouveau message de contact</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nom</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color: #8B7355;">${email}</a></div>
      </div>
      ${phone ? `
      <div class="field">
        <div class="label">Téléphone</div>
        <div class="value"><a href="tel:${phone}" style="color: #8B7355;">${phone}</a></div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Objet</div>
        <div class="value">${subject}</div>
      </div>
      <div class="field">
        <div class="label">Difficulté principale</div>
        <div class="value">${difficulty}</div>
      </div>
      <div class="field">
        <div class="label">Quiz complété</div>
        <div class="value">
          <span class="quiz-badge ${hasCompletedQuiz ? 'quiz-yes' : 'quiz-no'}">
            ${hasCompletedQuiz ? '✓ Oui, l\'accompagnement correspond' : 'Non, pas encore fait'}
          </span>
        </div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">
      Message envoyé depuis psy-tca-annecy.com
    </div>
  </div>
</body>
</html>
    `;

    // Envoyer l'email avec Resend
    const { error } = await resend.emails.send({
      from: "Site Web <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "l.baud@protonmail.com",
      replyTo: email,
      subject: `[Contact Site] ${subject} - ${name}`,
      html: emailContent,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

