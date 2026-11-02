# Tour and travel website

Next.js site with a home page, about, contact and 15 destination landing pages. Each landing
page has package cards with a call button and an enquiry form in a dialog. Enquiries are emailed
through Hostinger SMTP.

## Run it

```bash
npm install
npm run dev      # http://localhost:3002
```

Without SMTP settings, a development server prints enquiries to the terminal instead of emailing them.

## Where to edit

| What | File |
| --- | --- |
| Company name, phone, email, address, hours | `content/site.ts` |
| A destination's text, packages, month guide and FAQs | `content/destinations/*.ts` |
| Add or remove a landing page | Add the file, then list it in `content/index.ts` |
| Photos, alt text and credits | `content/photos.ts`, files in `public/photos/` |
| Colours, fonts and shapes | `app/globals.css` |

**Prices:** add `price: 24999` to a package to show "From ₹24,999 per person, before taxes". Without
it, the card shows "Price on request".

## Before launch

1. Replace the placeholders in `content/site.ts`. Set `foundedYear` and `licence` to show them on the about page.
2. Have the client check every package, inclusion and promise. The routes and travel facts are
   researched drafts, and the service promises on the home and about pages need their agreement.
3. Check `app/privacy/page.tsx` with the client.
4. Set the environment variables below.

## Deploy on Hostinger

This needs a plan with **Node.js Web Apps**. In hPanel, go to Websites, Add website, Node.js app,
then connect GitHub or upload a ZIP of this folder without `node_modules` and `.next`.

| Setting | Value |
| --- | --- |
| Application type | `next` |
| Node.js version | 22 |
| Build script | `build` |
| Output directory | `.next` |
| Entry file | Leave as it is (ignored for Next.js) |

Environment variables are listed in `.env.example`:

- `NEXT_PUBLIC_SITE_URL`: the real domain. Until this is set, the site tells search engines not to
  index it. It is built into the pages, so redeploy after changing it.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: a mailbox created in hPanel. Without these, the
  form on the live site tells visitors that sending failed and shows the phone number.
- `ENQUIRY_TO`: the inbox for enquiries, if different from the sending mailbox.

Send a test enquiry after deploying, and confirm it arrives.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```
