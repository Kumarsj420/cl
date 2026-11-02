"use client";

import Link from "next/link";
import { createContext, use, useCallback, useId, useRef, useState, type FocusEvent, type FormEvent, type ReactNode } from "react";
import { Check, Loader2, Phone, X } from "lucide-react";
import { parseEnquiry, validateField, type EnquiryErrors, type EnquiryField } from "@/lib/enquiry";

export type EnquiryTopic = { destination?: string; packageTitle?: string };
export type ContactDetails = { phone: string; phoneHref: string };

const OpenEnquiry = createContext<(topic: EnquiryTopic) => void>(() => {});

/** Holds the one enquiry dialog that every "Send enquiry" button on the site opens. */
export function EnquiryProvider({ contact, children }: { contact: ContactDetails; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<{ topic: EnquiryTopic; attempt: number }>({ topic: {}, attempt: 0 });
  const titleId = useId();

  const open = useCallback((topic: EnquiryTopic) => {
    setCurrent((previous) => ({ topic, attempt: previous.attempt + 1 }));
    dialog.current?.showModal();
  }, []);
  const close = () => dialog.current?.close();
  const { topic, attempt } = current;

  return (
    <OpenEnquiry value={open}>
      {children}
      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        className="enquiry"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <h2 id={titleId} className="text-2xl font-bold">
              {topic.packageTitle ? `Ask about ${topic.packageTitle}` : topic.destination ? `Plan your ${topic.destination} trip` : "Tell us about your trip"}
            </h2>
            <button type="button" onClick={close} aria-label="Close enquiry form" className="-mt-1 -mr-1 inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-sky-100">
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
          <p className="mt-2 text-ink-soft">Share a few details and we will call you with a plan and a price.</p>
          <EnquiryForm key={attempt} topic={topic} contact={contact} onDone={close} className="mt-5" />
        </div>
      </dialog>
    </OpenEnquiry>
  );
}

export function EnquiryButton({
  topic = {},
  className = "btn btn-primary",
  children = "Send enquiry",
  label,
}: {
  topic?: EnquiryTopic;
  className?: string;
  children?: ReactNode;
  label?: string;
}) {
  const open = use(OpenEnquiry);
  return (
    <button type="button" className={className} aria-label={label} aria-haspopup="dialog" onClick={() => open(topic)}>
      {children}
    </button>
  );
}

type Status = "idle" | "sending" | "sent" | "failed" | "rate_limited";

const fieldClass =
  "mt-1 block min-h-11 w-full rounded-md border border-field bg-paper px-3 py-2 text-base text-ink placeholder:text-ink-soft aria-invalid:border-danger aria-invalid:border-2";

/**
 * The form itself. Used inside the dialog, in page heroes and on the contact page.
 * `short` drops the optional email and message fields so the form fits beside a hero.
 */
export function EnquiryForm({
  topic = {},
  contact,
  onDone,
  short = false,
  className = "",
}: {
  topic?: EnquiryTopic;
  contact: ContactDetails;
  onDone?: () => void;
  short?: boolean;
  className?: string;
}) {
  const id = useId();
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");
  const summary = useRef<HTMLDivElement>(null);
  const sentHeading = useRef<HTMLParagraphElement>(null);

  function checkOnBlur(event: FocusEvent<HTMLFormElement>) {
    const { name, value } = event.target as unknown as HTMLInputElement;
    if (!name || name === "website") return;
    const field = name as EnquiryField;
    setErrors((previous) => ({ ...previous, [field]: validateField(field, value.trim()) }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const { errors: found, enquiry } = parseEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, ...topicFields(topic), page: window.location.href }),
      });
      if (response.ok) {
        setSentTo(enquiry.phone);
        setStatus("sent");
        requestAnimationFrame(() => sentHeading.current?.focus());
      } else {
        setStatus(response.status === 429 ? "rate_limited" : "failed");
      }
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className={className}>
        <div className="flex items-start gap-3 rounded-md bg-mint p-4 text-mint-ink">
          <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <div>
            <p ref={sentHeading} tabIndex={-1} className="font-bold">Enquiry sent</p>
            <p className="mt-1">We will call you on {sentTo}. If you would rather talk now, call {contact.phone}.</p>
          </div>
        </div>
        {onDone ? (
          <button type="button" className="btn btn-outline mt-4 w-full" onClick={onDone}>Close</button>
        ) : null}
      </div>
    );
  }

  const errorList = enquiryOrder.filter((field) => errors[field]);

  const field = (name: EnquiryField) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
    className: fieldClass,
  });
  const errorText = (name: EnquiryField) =>
    errors[name] ? <p id={`${id}-${name}-error`} className="mt-1 text-sm font-medium text-danger">{errors[name]}</p> : null;

  return (
    <form noValidate onSubmit={submit} onBlur={checkOnBlur} className={`grid gap-4 ${className}`}>
      {errorList.length > 0 ? (
        <div ref={summary} tabIndex={-1} role="alert" className="rounded-md border-2 border-danger p-3 text-sm">
          <p className="font-bold text-danger">Check {errorList.length === 1 ? "this field" : "these fields"} and send again:</p>
          <ul className="mt-1 list-disc pl-5">
            {errorList.map((name) => (
              <li key={name}><a className="text-link" href={`#${id}-${name}`}>{errors[name]}</a></li>
            ))}
          </ul>
        </div>
      ) : null}

      <div>
        <label htmlFor={`${id}-name`} className="font-semibold">Your name <span className="font-normal text-ink-soft">(required)</span></label>
        <input {...field("name")} type="text" autoComplete="name" placeholder="e.g. Rahul Sharma" required />
        {errorText("name")}
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className="font-semibold">Phone number <span className="font-normal text-ink-soft">(required)</span></label>
        <input {...field("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98765 43210" required />
        {errorText("phone")}
      </div>
      <div className="grid grid-cols-5 gap-3 sm:gap-4">
        <div className="col-span-3">
          <label htmlFor={`${id}-when`} className="font-semibold">Travel dates</label>
          <input {...field("when")} type="text" autoComplete="off" placeholder="e.g. Mid December" />
        </div>
        <div className="col-span-2">
          <label htmlFor={`${id}-travellers`} className="font-semibold">Travellers</label>
          <input {...field("travellers")} type="text" inputMode="numeric" autoComplete="off" placeholder="e.g. 4" />
          {errorText("travellers")}
        </div>
      </div>
      {short ? null : (
      <>
      <div>
        <label htmlFor={`${id}-email`} className="font-semibold">Email</label>
        <input {...field("email")} type="email" autoComplete="email" spellCheck={false} placeholder="e.g. name@gmail.com" />
        {errorText("email")}
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="font-semibold">Anything we should know?</label>
        <textarea {...field("message")} rows={2} maxLength={1000} placeholder="Pickup city, hotel type, food preferences" />
      </div>
      </>
      )}

      {/* Left empty by people, filled in by bots */}
      <div className="absolute size-px overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "failed" || status === "rate_limited" ? (
        <p role="alert" className="rounded-md bg-blush p-3 text-sm">
          {status === "failed"
            ? "Your enquiry did not reach us. Try again, or call "
            : "That is several enquiries in a few minutes, so sending is paused. Try again in 10 minutes, or call "}
          <a className="text-link" href={`tel:${contact.phoneHref}`}>{contact.phone}</a>.
        </p>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        <button type="submit" className="btn btn-primary" aria-busy={status === "sending"}>
          {status === "sending" ? <Loader2 aria-hidden="true" className="size-5 animate-spin" /> : null}
          {status === "sending" ? "Sending enquiry" : "Send enquiry"}
        </button>
        <a href={`tel:${contact.phoneHref}`} className="btn btn-outline">
          <Phone aria-hidden="true" className="size-4" /> Call instead
        </a>
      </div>
      <p className="text-sm text-ink-soft">
        We use these details only to reply to this enquiry. See our <Link className="text-link" href="/privacy">privacy policy</Link>.
      </p>
    </form>
  );
}

const enquiryOrder: EnquiryField[] = ["name", "phone", "when", "travellers", "email", "message"];

function topicFields(topic: EnquiryTopic) {
  return { destination: topic.destination ?? "", packageTitle: topic.packageTitle ?? "" };
}
