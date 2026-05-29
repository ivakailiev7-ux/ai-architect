// Server-side contact endpoint. Lead notifications are sent through Resend
// (https://resend.com) using a server-only API key (RESEND_API_KEY). The key
// never ships to the browser and is never committed to the repo — it lives in a
// Vercel environment variable (Production) and in the gitignored .env.local for
// local development. Resend's API is designed for server-to-server calls, so —
// unlike the previous provider — it is reachable from Vercel's serverless runtime.

// Lead notifications go to the business owner's inbox. With no custom domain
// verified in Resend, the recipient must match the Resend account email, and the
// "from" address must be Resend's onboarding sender.
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

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !website) {
      return Response.json(
        { success: false, message: "Please fill in your name, email and store URL." },
        { status: 400 },
      );
    }

    const html = `
      <h2>New Free Demo request — AI Architect</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Store / Product URL:</strong> ${escapeHtml(website)}</p>
      <p><strong>Message:</strong><br>${escapeHtml(message) || "(none provided)"}</p>
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
        subject: `New Free Demo request — ${name}`,
        html,
      }),
    });

    const raw = await upstream.text();
    let data: { id?: string; message?: string; name?: string } | null = null;
    try {
      data = JSON.parse(raw);
    } catch {
      // non-JSON response — leave data null and surface raw text in diagnostics
    }

    if (upstream.ok && data?.id) {
      return Response.json({ success: true });
    }

    // TEMPORARY diagnostics — surfaces Resend's error so the first live test can
    // confirm the setup. Removed once the pipeline is verified end-to-end.
    return Response.json(
      {
        success: false,
        message: "Could not send your message.",
        _debug: { status: upstream.status, resend: data ?? raw.slice(0, 300) },
      },
      { status: 502 },
    );
  } catch (err) {
    return Response.json(
      {
        success: false,
        message: "Something went wrong on our end.",
        _debug: { error: err instanceof Error ? `${err.name}: ${err.message}` : String(err) },
      },
      { status: 500 },
    );
  }
}
