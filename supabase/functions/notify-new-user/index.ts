import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  const body = await req.json();

  const record = body.record;
  const table = body.table;

  // Detect source
  let source = "unknown";
  if (table === "waitlist_entries") source = "Waitlist";
  if (table === "contact_submissions") source = "Contact Form";

  const email = record.email || "no email";
  const name = record.name || "";
  const message = record.message || "";

  console.log(`New ${source} entry:`, record);

  // 🔥 Send email via Resend
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_RESEND_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Aera <hello@aerahealth.de>",
      to: ["YOUR_EMAIL@gmail.com"],
      subject: `New ${source} submission`,
      html: `
        <h2>New ${source}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })
  });

  return new Response("ok");
});