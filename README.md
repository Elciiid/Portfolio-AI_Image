# Jonas David - AI Fashion & Jewelry Imagery

Portfolio for AI fashion and jewelry imagery made with Stable Diffusion: a hero, a practice collection, a short "How I work", and contact details.

All images are AI-generated practice work, not client work. They were made with epiCRealism XL (by epinikion), upscaled 2x and given one light warm grade.

## Adding images

Drop finished images into `public/ai-imagery/` (jpg, png or webp). They are listed in file-name order: the first three fill the hero panels and all of them appear under Practice collection. Name files like `09-gold-hoop-earrings-warm-bokeh.jpg`; the words after the number become the alt text.

## Contact details

`lib/site.ts` holds the email, LinkedIn, rate, availability and payment method shown in the Contact section. Leave a value empty to hide its row.

## Tech Stack

- Next.js 15 App Router, React 18, TypeScript
- Tailwind CSS 4, Framer Motion, Lucide React

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For production checks:

```bash
npm run lint
npm run build
```
