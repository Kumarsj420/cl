import "server-only";
import nodemailer from "nodemailer";
import type { Enquiry } from "./enquiry";
import { site } from "@/content/site";

export function mailerConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendEnquiryEmail(enquiry: Enquiry) {
  const port = Number(process.env.SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const subject = enquiry.packageTitle || enquiry.destination || "General enquiry";
  const lines = [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["Travel dates", enquiry.when],
    ["Travellers", enquiry.travellers],
    ["Destination", enquiry.destination],
    ["Package", enquiry.packageTitle],
    ["Message", enquiry.message],
    ["Sent from", enquiry.page],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`);

  await transport.sendMail({
    from: `"${site.name} website" <${process.env.SMTP_USER}>`,
    to: process.env.ENQUIRY_TO || process.env.SMTP_USER,
    replyTo: enquiry.email || undefined,
    subject: `New enquiry: ${subject} (${enquiry.name})`,
    text: lines.join("\n"),
  });
}
