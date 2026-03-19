# Site Update Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update SUSPECTI app with purple color scheme (#651959), real event data (4 events), remove "Under Construction", and add past event photo gallery.

**Architecture:** Purely frontend changes - color scheme via Tailwind CSS custom colors, hardcoded event data in calendar page, static image gallery. No new routes or APIs needed.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript

---

### Task 1: Define Custom Purple (Plum) Color Palette

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Add custom plum color palette to Tailwind theme**

Add custom colors in the `@theme inline` block in `globals.css`:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-plum-900: #3a0e33;
  --color-plum-800: #4d1245;
  --color-plum-700: #651959;
  --color-plum-600: #7e2070;
  --color-plum-500: #9b2d8b;
  --color-plum-400: #b44da6;
  --color-plum-300: #d07cc4;
  --color-plum-200: #e4a8db;
}
```

This enables classes like `bg-plum-700`, `text-plum-400`, `hover:bg-plum-600`, etc.

**Step 2: Verify build works**

Run: `cd /Users/florinjerdea/work/suspecti_app && npx next build 2>&1 | tail -5`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add custom plum color palette for purple theme"
```

---

### Task 2: Update Landing Page - Remove Construction + Purple Colors

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Replace all amber colors with plum equivalents**

Color mapping for this file:
| Old | New |
|---|---|
| `bg-amber-500/5` | `bg-plum-700/5` |
| `bg-red-500/5` | `bg-plum-500/5` |
| `bg-amber-400/3` | `bg-plum-600/3` |
| `bg-amber-400 text-zinc-900` (active lang) | `bg-plum-700 text-white` |
| `text-amber-400/80` | `text-plum-400/80` |
| `via-amber-400/50` | `via-plum-500/50` |
| `bg-gradient-to-r from-amber-400 to-amber-500` | `bg-gradient-to-r from-plum-600 to-plum-700` |
| `shadow-amber-500/25` | `shadow-plum-700/25` |
| `shadow-amber-500/30` | `shadow-plum-700/30` |
| `bg-zinc-950` | `bg-black` |

**Step 2: Remove "Under Construction" badge (lines 64-71)**

Delete the entire badge div:
```tsx
{/* Under Construction Badge */}
<div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20">
  ...
</div>
```

**Step 3: Remove "Coming Soon" message (lines 73-76)**

Delete:
```tsx
{/* Message */}
<p className="mb-10 text-lg sm:text-xl text-zinc-400 leading-relaxed">
  {t.comingSoon}
</p>
```

**Step 4: Update CTA button text color for purple background**

Since plum-700 is dark, button text should be white instead of zinc-900:
```tsx
className="... text-white bg-gradient-to-r from-plum-600 to-plum-700 ..."
```

**Step 5: Verify visually**

Run: `npx next dev`
Check: Landing page at http://localhost:3000 - no construction badge, purple colors, clean layout

**Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: remove Under Construction from landing, apply purple theme"
```

---

### Task 3: Update Navbar - Purple Colors

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Replace amber colors**

| Old | New |
|---|---|
| `bg-amber-400` (Buy Ticket button, line 54) | `bg-plum-600` |
| `hover:bg-amber-300` | `hover:bg-plum-500` |
| `text-zinc-900` (button text) | `text-white` |
| `bg-amber-400` (mobile Buy Ticket, line 112) | `bg-plum-600` |
| `hover:bg-amber-300` (mobile) | `hover:bg-plum-500` |

**Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: update Navbar to purple theme"
```

---

### Task 4: Update Home Page - Purple Colors + Real Upcoming Events

**Files:**
- Modify: `src/app/[lang]/app/page.tsx`

**Step 1: Replace all amber references with plum equivalents**

Key changes:
| Old | New |
|---|---|
| `bg-amber-500/10` | `bg-plum-700/10` |
| `text-amber-400` | `text-plum-400` |
| `bg-amber-400` (buttons) | `bg-plum-600` |
| `hover:bg-amber-300` | `hover:bg-plum-500` |
| `text-amber-400/80` | `text-plum-400/80` |
| `hover:text-amber-300` | `hover:text-plum-300` |
| `hover:border-amber-400/50` | `hover:border-plum-500/50` |
| `group-hover:text-amber-400` | `group-hover:text-plum-400` |
| `focus:border-amber-400` | `focus:border-plum-500` |
| `from-amber-400/10 to-red-400/10` | `from-plum-700/10 to-plum-500/10` |
| `bg-zinc-950` | `bg-black` |
| Button text `text-zinc-900` (on amber bg) | `text-white` (on plum bg) |

**Step 2: Update upcoming events section (lines 191-209)**

Replace the 3 placeholder events with real upcoming events data:
```tsx
const upcomingEvents = [
  {
    date: "29 Mar 2026",
    time: "15:00",
    title: locale === "ro" ? "Suspecți la Brunch" : "Suspecți at Brunch",
    location: locale === "ro" ? "Naive – etajul 5, București" : "Naive – 5th floor, Bucharest",
    link: null,
  },
  {
    date: "3 Apr 2026",
    time: "20:00",
    title: locale === "ro" ? "Suspecți la Party – Diamonds After Dark" : "Suspecți at Party – Diamonds After Dark",
    location: locale === "ro" ? "Naive – etajul 4, București" : "Naive – 4th floor, Bucharest",
    link: null,
  },
  {
    date: "18 Apr 2026",
    time: "16:00",
    title: locale === "ro" ? "Suspecți la Automachiaj" : "Suspecți at Self-Makeup",
    location: locale === "ro" ? "Naive, București" : "Naive, Bucharest",
    link: "https://www.ambilet.ro/bilete/suspecti-la-automachiaj-844938/",
  },
];
```

**Step 3: Commit**

```bash
git add src/app/[lang]/app/page.tsx
git commit -m "feat: update Home page to purple theme with real upcoming events"
```

---

### Task 5: Rename Event Photos to URL-Safe Names

**Files:**
- Modify: files in `public/Suspecti/poze evenimente/`

**Step 1: Rename all photos using a bash script**

```bash
cd "/Users/florinjerdea/work/suspecti_app/public/Suspecti"
mkdir -p gallery
i=1
for f in "poze evenimente"/*.jpeg; do
  cp "$f" "gallery/event-photo-$(printf '%02d' $i).jpeg"
  i=$((i + 1))
done
```

This creates `public/Suspecti/gallery/event-photo-01.jpeg` through `event-photo-16.jpeg`.

**Step 2: Verify files**

```bash
ls -la public/Suspecti/gallery/
```
Expected: 16 files named event-photo-01.jpeg through event-photo-16.jpeg

**Step 3: Commit**

```bash
git add public/Suspecti/gallery/
git commit -m "feat: add URL-safe event gallery photos"
```

---

### Task 6: Update Calendar Page - Real Events + Photo Gallery

**Files:**
- Modify: `src/app/[lang]/app/calendar/page.tsx`

This is the largest task. Replace the entire mock events array and add a gallery section.

**Step 1: Replace events array (lines 21-106) with real data**

```tsx
const events = [
  {
    id: 1,
    title: locale === "ro" ? "Suspecți la Cină" : "Suspecți at Dinner",
    subtitle: "Murder on the Dance Floor – Hollywood Noir 1940",
    date: "22",
    month: locale === "ro" ? "Mar" : "Mar",
    year: "2026",
    time: "16:30",
    location: "Naive, București",
    price: "119 lei",
    priceNote: locale === "ro" ? "Early Bird (apoi 139 lei)" : "Early Bird (then 139 lei)",
    image: "/Suspecti/cina_image.jpeg",
    gradient: "from-plum-700/20 to-plum-500/20",
    description: locale === "ro"
      ? "O cină diferită, cu mister și suspans. La sosire, fiecare participant primește identitatea unui personaj și devine parte din poveste."
      : "A different dinner, with mystery and suspense. Upon arrival, each participant receives a character identity and becomes part of the story.",
    link: null,
    status: "available" as const,
  },
  {
    id: 2,
    title: locale === "ro" ? "Suspecți la Brunch" : "Suspecți at Brunch",
    subtitle: "",
    date: "29",
    month: locale === "ro" ? "Mar" : "Mar",
    year: "2026",
    time: "15:00",
    location: locale === "ro" ? "Naive – etajul 5, București" : "Naive – 5th floor, Bucharest",
    price: locale === "ro" ? "Coming soon" : "Coming soon",
    priceNote: locale === "ro" ? "Bilete limitate" : "Limited tickets",
    image: null,
    gradient: "from-plum-700/20 to-plum-500/20",
    description: locale === "ro"
      ? "Detalii în curând."
      : "Details coming soon.",
    link: null,
    status: "coming_soon" as const,
  },
  {
    id: 3,
    title: locale === "ro" ? "Suspecți la Party" : "Suspecți at Party",
    subtitle: "Diamonds After Dark",
    date: "3",
    month: locale === "ro" ? "Apr" : "Apr",
    year: "2026",
    time: "20:00",
    location: locale === "ro" ? "Naive – etajul 4, București" : "Naive – 4th floor, Bucharest",
    price: "119 lei",
    priceNote: locale === "ro" ? "Early Bird (include prosecco + experiență + party)" : "Early Bird (includes prosecco + experience + party)",
    image: "/Suspecti/party_image.jpeg",
    gradient: "from-plum-700/20 to-plum-500/20",
    description: locale === "ro"
      ? "O experiență socială interactivă cu personaje, provocări și misiuni light, într-o atmosferă elegantă și misterioasă."
      : "An interactive social experience with characters, challenges and light missions, in an elegant and mysterious atmosphere.",
    link: null,
    status: "available" as const,
  },
  {
    id: 4,
    title: locale === "ro" ? "Suspecți la Automachiaj" : "Suspecți at Self-Makeup",
    subtitle: locale === "ro" ? "Devino propriul tău make-up artist!" : "Become your own make-up artist!",
    date: "18",
    month: locale === "ro" ? "Apr" : "Apr",
    year: "2026",
    time: "16:00",
    location: "Naive, București",
    price: "450 lei",
    priceNote: locale === "ro" ? "Include curs + cină + prosecco" : "Includes course + dinner + prosecco",
    image: "/Suspecti/machiaj_image.jpeg",
    gradient: "from-plum-700/20 to-plum-500/20",
    description: locale === "ro"
      ? "Workshop de automachiaj cu Andreea Fugaru. 4 ore în care înveți cum să te machiezi corect, cu produsele tale."
      : "Self-makeup workshop with Andreea Fugaru. 4 hours learning how to do your makeup properly, with your own products.",
    link: "https://www.ambilet.ro/bilete/suspecti-la-automachiaj-844938/",
    status: "available" as const,
  },
];
```

**Step 2: Remove the old filter buttons section (lines 108-116 and 150-168)**

Remove the `formats` array and the filter buttons UI. With only 4 real events, filters are unnecessary.

**Step 3: Rewrite event card rendering**

Replace emoji-based cards with image-based cards. Key changes:
- Use `<img>` with `event.image` instead of emoji spans
- Show price instead of spots/progress bars
- Show "Coming Soon" badge for brunch
- CTA links to `event.link` (external) or shows "Coming Soon" when no link
- Replace all amber colors with plum equivalents
- For events without image (brunch), show a placeholder with plum gradient

**Step 4: Replace `getAvailabilityBadge` function**

Replace with a simpler status badge:
```tsx
const getStatusBadge = (status: string) => {
  if (status === "coming_soon") {
    return (
      <span className="px-3 py-1.5 text-xs font-bold bg-plum-700/20 text-plum-300 rounded-full border border-plum-500/30">
        Coming Soon
      </span>
    );
  }
  return (
    <span className="px-3 py-1.5 text-xs font-bold bg-plum-700/20 text-plum-300 rounded-full border border-plum-500/30 animate-pulse">
      {locale === "ro" ? "Locuri limitate" : "Limited spots"}
    </span>
  );
};
```

**Step 5: Add photo gallery section after events grid**

Before the Newsletter CTA section, add:
```tsx
{/* Past Events Gallery */}
<section className="px-6 pb-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
      {locale === "ro" ? "Momente din evenimentele trecute" : "Moments from past events"}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array.from({ length: 16 }, (_, i) => (
        <div key={i} className="aspect-square rounded-xl overflow-hidden group">
          <img
            src={`/Suspecti/gallery/event-photo-${String(i + 1).padStart(2, "0")}.jpeg`}
            alt={`Event photo ${i + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>
```

**Step 6: Update newsletter CTA section colors**

Replace `from-amber-500/10 to-red-500/10` with `from-plum-700/10 to-plum-500/10`
Replace `bg-amber-400` with `bg-plum-600` + `text-white`
Replace `hover:bg-amber-300` with `hover:bg-plum-500`

**Step 7: Verify visually**

Run: `npx next dev`
Check: Calendar page at http://localhost:3000/ro/app/calendar
- 4 event cards with real data and images
- Photo gallery below events
- Purple color scheme throughout

**Step 8: Commit**

```bash
git add src/app/[lang]/app/calendar/page.tsx
git commit -m "feat: replace mock events with real data, add event gallery, purple theme"
```

---

### Task 7: Update i18n Dictionaries

**Files:**
- Modify: `src/i18n/dictionaries.ts`

**Step 1: Update landing section - remove construction keys, update copyright**

For both `ro` and `en`:
```ts
landing: {
  enterApp: "Intră în Aplicație", // / "Enter the App"
  copyright: "© 2026 Suspecți. Toate drepturile rezervate.", // / "All rights reserved."
},
```

Remove `underConstruction` and `comingSoon` keys from both locales.

**Step 2: Update copyright year from 2025 to 2026 in both locales**

**Step 3: Commit**

```bash
git add src/i18n/dictionaries.ts
git commit -m "feat: update dictionaries - remove construction keys, update copyright year"
```

---

### Task 8: Final Verification + Build Check

**Step 1: Run production build**

```bash
cd /Users/florinjerdea/work/suspecti_app && npx next build
```
Expected: Build succeeds with no errors

**Step 2: Visual verification checklist**

Run `npx next dev` and check:
- [ ] Landing page: no "Under Construction", purple colors, clean CTA
- [ ] Home page: purple accents, real upcoming events (Brunch, Party, Machiaj)
- [ ] Calendar page: 4 real event cards with images
- [ ] Calendar page: photo gallery with 16 images
- [ ] Navbar: purple "Buy Ticket" button
- [ ] Language switcher works (RO/EN)
- [ ] All links work (ambilet.ro link on Machiaj card)

**Step 3: Final commit if any fixes needed**

---

## File Change Summary

| File | Action | What Changes |
|---|---|---|
| `src/app/globals.css` | Modify | Add plum color palette |
| `src/app/page.tsx` | Modify | Remove construction, amber → plum |
| `src/components/Navbar.tsx` | Modify | amber → plum |
| `src/app/[lang]/app/page.tsx` | Modify | amber → plum, real upcoming events |
| `src/app/[lang]/app/calendar/page.tsx` | Modify | Real events, gallery, amber → plum |
| `src/i18n/dictionaries.ts` | Modify | Remove construction keys, update year |
| `public/Suspecti/gallery/*.jpeg` | Create | 16 renamed event photos |
