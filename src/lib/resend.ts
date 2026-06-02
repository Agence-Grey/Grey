import { Resend } from "resend";

const NOTIFY_EMAIL = "agencegrey06@gmail.com";
const FROM_EMAIL = "Grey <onboarding@resend.dev>";

export function getResendClient() {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

type ContactData = {
  nom: string;
  email: string;
  telephone?: string;
  type_studio?: string;
  message: string;
};

export async function sendContactNotification(data: ContactData) {
  const resend = getResendClient();
  if (!resend) return { ok: false, error: "Resend not configured" };

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      subject: `[Grey] Nouveau contact — ${data.nom}`,
      replyTo: data.email,
      text: `Nouveau message depuis le formulaire de contact agence-grey.fr

Nom : ${data.nom}
Email : ${data.email}
Téléphone : ${data.telephone || "Non renseigné"}
Type de studio : ${data.type_studio || "Non renseigné"}

Message :
${data.message}
`,
    });
    return { ok: true };
  } catch (error) {
    console.error("Resend contact error:", error);
    return { ok: false, error: String(error) };
  }
}

type DevisData = {
  nom: string;
  email: string;
  telephone?: string;
  nom_studio: string;
  ville?: string;
  type_studio: string;
  besoins: string[];
  offre: string;
  estimation_affichee?: string;
  rdv_souhaite?: boolean;
  message?: string;
};

export async function sendDevisNotification(data: DevisData) {
  const resend = getResendClient();
  if (!resend) return { ok: false, error: "Resend not configured" };

  const besoinsList =
    data.besoins.length > 0 ? data.besoins.join("\n- ") : "Aucun";

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      subject: `[Grey] Nouveau devis — ${data.nom} (${data.nom_studio})`,
      replyTo: data.email,
      text: `Nouvelle demande de devis depuis agence-grey.fr

Client : ${data.nom}
Email : ${data.email}
Téléphone : ${data.telephone || "Non renseigné"}
Studio : ${data.nom_studio}
Ville : ${data.ville || "Non renseignée"}
Type de studio : ${data.type_studio}

Offre choisie : ${data.offre}
Estimation : ${data.estimation_affichee || "Non calculée"}
RDV souhaité : ${data.rdv_souhaite ? "Oui" : "Non"}

Besoins :
- ${besoinsList}

Message :
${data.message || "Aucun message"}
`,
    });
    return { ok: true };
  } catch (error) {
    console.error("Resend devis error:", error);
    return { ok: false, error: String(error) };
  }
}
