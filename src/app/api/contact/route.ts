// Server-side contact endpoint. The Web3Forms access key is read from a server-only
// environment variable (WEB3FORMS_ACCESS_KEY) — it never ships to the browser and is
// never committed to the repo. The request to Web3Forms is made from the server, so the
// client only ever talks to this same-origin route.
export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
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

    const upstream = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New Free Demo request — AI Architect",
        from_name: "AI Architect Website",
        name,
        email,
        website,
        message,
      }),
    });

    const raw = await upstream.text();
    let data: { success?: boolean; message?: string } | null = null;
    try {
      data = JSON.parse(raw);
    } catch {
      // upstream did not return JSON (e.g. an HTML challenge page)
    }

    if (data?.success) {
      return Response.json({ success: true });
    }

    return Response.json(
      {
        success: false,
        message: data?.message ?? "Could not send your message.",
        _debug: { upstreamStatus: upstream.status, upstreamBody: raw.slice(0, 400) },
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
