// Server-side brief endpoint. After a customer subscribes via Stripe, they are
// redirected to /brief and submit their campaign brief here. The brief is
// emailed to the business owner through Resend using the server-only
// RESEND_API_KEY — exactly like /api/contact. The key never ships to the
// browser and is never committed to the repo; it lives in a Vercel environment
// variable (Production) and in the gitignored .env.local for local development.

const LEAD_RECIPIENT = "ivakailiev7@gmail.com";
const FROM_ADDRESS = "AI Architect <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();

    // Honeypot: real users never fill this hidden field. If it's set, it's a bot —
    // silently accept and drop it so the bot gets no signal.
    if (formData.get("botcheck")) {
      return Response.json({ success: true });
    }

    const plan = String(formData.get("plan") ?? "").trim() || "(not specified)";
    const brand = String(formData.get("brand") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();
    const products = String(formData.get("products") ?? "").trim();
    const audience = String(formData.get("audience") ?? "").trim();
    const usp = String(formData.get("usp") ?? "").trim();
    const references = String(formData.get("references") ?? "").trim();
    const avoid = String(formData.get("avoid") ?? "").trim();

    if (!brand || !email || !website) {
      return Response.json(
        { success: false, message: "Please fill in your brand, email and store URL." },
        { status: 400 },
      );
    }

    const row = (label: string, value: string) =>
      `<p><strong>${label}:</strong><br>${escapeHtml(value) || "(none provided)"}</p>`;

    const html = `
      <h2>New campaign brief — AI Architect</h2>
      <p><strong>Plan:</strong> ${escapeHtml(plan)}</p>
      <p><strong>Brand:</strong> ${escapeHtml(brand)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Store / Product URL:</strong> ${escapeHtml(website)}</p>
      ${row("Products to feature", products)}
      ${row("Target audience", audience)}
      ${row("Key benefit", usp)}
      ${row("Reference ads / vibe", references)}
      ${row("Anything to avoid", avoid)}
    `;

    const upstream = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [LEAD_RECIPIENT],
        reply_to: email,
        subject: `New brief — ${plan} — ${brand}`,
        html,
      }),
    });

    if (upstream.ok) {
      return Response.json({ success: true });
    }

    return Response.json(
      { success: false, message: "Could not send your brief." },
      { status: 502 },
    );
  } catch {
    return Response.json(
      { success: false, message: "Something went wrong on our end." },
      { status: 500 },
    );
  }
}
