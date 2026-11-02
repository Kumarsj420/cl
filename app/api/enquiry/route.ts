import { parseEnquiry } from "@/lib/enquiry";
import { mailerConfigured, sendEnquiryEmail } from "@/lib/mailer";
import { allowRequest } from "@/lib/rate-limit";

function clientIp(request: Request) {
  // The last entry is the one added by Hostinger's proxy; earlier ones can be forged.
  const forwarded = request.headers.get("x-forwarded-for")?.split(",").pop()?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (typeof parsed !== "object" || parsed === null) throw new Error("not an object");
    body = parsed;
  } catch {
    return Response.json({ ok: false, code: "bad_request" }, { status: 400 });
  }

  // Hidden field that only bots fill in. They get a normal-looking reply and no email goes out.
  if (body.website) return Response.json({ ok: true });

  const { enquiry, errors } = parseEnquiry(body);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, code: "invalid", errors }, { status: 422 });
  }

  if (!allowRequest(clientIp(request))) {
    return Response.json({ ok: false, code: "rate_limited" }, { status: 429 });
  }

  if (!mailerConfigured()) {
    if (process.env.NODE_ENV === "production") {
      console.error("[enquiry] SMTP settings are missing, so an enquiry could not be sent");
      return Response.json({ ok: false, code: "send_failed" }, { status: 503 });
    }
    console.info("[enquiry] SMTP not set, development only:", enquiry);
    return Response.json({ ok: true });
  }

  try {
    await sendEnquiryEmail(enquiry);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[enquiry] Email failed:", error instanceof Error ? error.message : error);
    return Response.json({ ok: false, code: "send_failed" }, { status: 502 });
  }
}
