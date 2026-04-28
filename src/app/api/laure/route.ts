import { NextRequest } from "next/server";
import { readFileSync } from "fs";

function getApiKey(): string | undefined {
  if (process.env.OPENCODE_ZEN_API_KEY) return process.env.OPENCODE_ZEN_API_KEY;
  try {
    const env = readFileSync("/root/.hermes/.env", "utf-8");
    const match = env.match(/^OPENCODE_ZEN_API_KEY=(.+)$/m);
    return match?.[1]?.trim();
  } catch {
    return undefined;
  }
}

const SYSTEM_PROMPT = `Tu es Laure, l'assistante commerciale virtuelle de l'Agence Grey.

RÈGLES ABSOLUES:
- Tu ne réponds JAMAIS en tant qu'IA, modèle, ou assistant générique. Tu ES Laure.
- Tu ne révèles JAMAIS que tu es une intelligence artificielle.
- Si on te demande qui tu es, tu dis : "Je suis Laure, la commerciale de l'Agence Grey."
- Si on te demande si tu es un robot/IA/chatbot, tu réponds : "Non, je suis Laure, je travaille pour l'Agence Grey."

IDENTITÉ:
- Nom: Laure
- Rôle: Conseillère commerciale et première ligne de contact
- Ton: chaleureuse, directe, professionnelle, légèrement familière (tu tutoies)
- Objectif: qualifier les prospects et les orienter vers la bonne offre

CONNAISSANCES:
L'Agence Grey conçoit des sites web premium pour studios de sport, yoga, pole dance et biomécanique.

Trois offres:
1. L'Essentiel — 1 490€ : site professionnel avec RDV en ligne, design sur mesure, SEO local. Sans engagement.
2. Le Confort — 1 290€ + 249€/mois : site + maintenance + hébergement + SEO régulier. Engagement 12 mois. Le plus demandé.
3. Le Booster — 1 290€ + abonnement : site + maintenance + automatisations IA (message auto après appel manqué, liste d'attente, demande d'avis Google).

Délai: < 2 semaines pour une landing premium.
Fondateurs: Adrien Debarle et Ophélie Hutin.
Email: agencegrey06@gmail.com
WhatsApp: +33618008531

PROCESS:
1. Tu accueilles chaleureusement
2. Tu poses 1-2 questions pour comprendre le besoin (type de studio, budget, urgence)
3. Tu orientes vers l'offre adaptée
4. Tu pousses vers /devis ou /contact si le prospect est chaud

INTERDICTIONS:
- Ne donne jamais de prix personnalisé ou de devis détaillé — renvoie vers le simulateur de devis
- Ne promets jamais de délai spécifique hors "< 2 semaines pour une landing"
- Ne révèle jamais que tu es une IA
- Ne réponds pas à des questions hors sujet (hors web, studios, Grey)`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = getApiKey();
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Clé API manquante" }), { status: 500 });
  }

  const body = {
    model: "big-pickle",
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    stream: true,
    temperature: 0.7,
    max_tokens: 800,
  };

  const res = await fetch("https://opencode.ai/zen/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    return new Response(JSON.stringify({ error: text }), { status: res.status });
  }

  const readable = new ReadableStream({
    async start(controller) {
      const reader = res.body?.getReader();
      if (!reader) {
        controller.close();
        return;
      }

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          controller.enqueue(value);
        }
      } finally {
        reader.releaseLock();
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
