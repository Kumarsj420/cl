/** Rules for the enquiry form. The browser and the API route share them. */

export type EnquiryField = "name" | "phone" | "email" | "when" | "travellers" | "message";
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export type Enquiry = Record<EnquiryField, string> & {
  destination: string;
  packageTitle: string;
  page: string;
};

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export function validateField(field: EnquiryField, value: string): string | undefined {
  switch (field) {
    case "name":
      return value.length < 2 ? "Enter your name." : undefined;
    case "phone":
      return /^\+?\d{10,15}$/.test(value.replace(/[\s()-]/g, ""))
        ? undefined
        : "Enter a phone number with at least 10 digits, like 98765 43210.";
    case "email":
      return value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Enter an email like name@example.com, or leave it empty." : undefined;
    case "travellers":
      return value && !/^[1-9]\d?$/.test(value) ? "Enter a number from 1 to 99, or leave it empty." : undefined;
    default:
      return undefined;
  }
}

export const enquiryFields: EnquiryField[] = ["name", "phone", "email", "when", "travellers", "message"];

export function parseEnquiry(raw: Record<string, unknown>): { enquiry: Enquiry; errors: EnquiryErrors } {
  const enquiry: Enquiry = {
    name: clean(raw.name, 80),
    phone: clean(raw.phone, 24),
    email: clean(raw.email, 120),
    when: clean(raw.when, 80),
    travellers: clean(raw.travellers, 2),
    message: clean(raw.message, 1000),
    destination: clean(raw.destination, 80),
    packageTitle: clean(raw.packageTitle, 120),
    page: clean(raw.page, 400),
  };
  const errors: EnquiryErrors = {};
  for (const field of enquiryFields) {
    const error = validateField(field, enquiry[field]);
    if (error) errors[field] = error;
  }
  return { enquiry, errors };
}
