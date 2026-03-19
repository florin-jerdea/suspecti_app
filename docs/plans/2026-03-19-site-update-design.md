# SUSPECTI App - Site Update Design

## Scope

Focused update: change color scheme, replace mock events with real data, remove "Under Construction" from landing page, add past event photos gallery.

## 1. Color Scheme Change

Replace amber/gold theme with black + purple (#651959).

| Element | Current | New |
|---|---|---|
| Background | zinc-950 | black (#000000) |
| Accent (buttons, badges, hover) | amber-400/500 | #651959 (deep plum) |
| Accent hover | amber-300 | #7e2070 (lighter plum) |
| Accent text/highlight | amber-400 | #9b2d8b (light plum) |
| Text primary | white | white (unchanged) |
| Text secondary | zinc-400 | zinc-400 (unchanged) |
| Gradient orbs (landing) | amber + red | plum + purple |
| Shadow accents | amber-500/25 | purple variants |

Purple used as accent only. White text stays.

## 2. Landing Page - Remove "Under Construction"

- Remove "In Constructie" / "Under Construction" badge
- Remove "Lucram la ceva extraordinar" / "We're working on something extraordinary" message
- Keep: title, CTA button ("Intra in Aplicatie"), language switcher, animated background
- Update animated background colors to purple theme

## 3. Events - Real Data (3 Events)

Replace 6 mock events with 4 real ones (ordered by date):

### Event 1: Suspecti la Cina - Murder on the Dance Floor
- Location: Naive, Bucuresti
- Date: 22 martie 2026
- Time: 16:30
- Price: 119 lei (Early Bird) / 139 lei (Second Wave)
- Image: /Suspecti/cina_image.jpeg
- Description: Full text from cina_22_03.docx (murder mystery dinner, Hollywood Noir 1940 theme)
- Includes: welcome drink (prosecco), personaj + poveste
- Note: cina NOT included in ticket price (ordered separately at venue)
- Dress code: Hollywood Golden Age / Cinema Noir

### Event 2: Suspecti la Brunch
- Location: Naive - etajul 5, Bucuresti
- Date: 29 martie 2026
- Time: 15:00
- Status: Coming soon (bilete limitate)
- Image: none (coming soon placeholder)
- Link: none
- Description: minimal/coming soon

### Event 3: Suspecti la Party - Diamonds After Dark
- Location: Naive, etaj 4, Bucuresti
- Date: 3 aprilie 2026
- Time: 20:00
- Price: 119 lei (Early Bird, include prosecco + experienta interactiva + party)
- Image: /Suspecti/party_image.jpeg
- Link: TBD (no ambilet link provided)
- Description: Full text from Party_3_03.docx
- Dress code: Elegant / All Black / Statement

### Event 4: Suspecti la Automachiaj
- Location: Naive, Bucuresti
- Date: 18 aprilie 2026
- Time: 16:00-20:00
- Price: 450 lei (include curs + cina + prosecco)
- Image: /Suspecti/machiaj_image.jpeg
- Link: https://www.ambilet.ro/bilete/suspecti-la-automachiaj-844938/
- Description: Full text from machiaj_18_04.pdf
- Instructor: Andreea Fugaru (9+ years experience)

## 4. Past Event Photos Gallery

- New section on Calendar page, below upcoming events
- Grid layout with 16 photos from /Suspecti/poze evenimente/
- Title: "Momente din evenimentele trecute"
- Rename files to URL-safe names (no spaces)

## 5. Files

Assets in `public/Suspecti/`:
- cina_image.jpeg (used for past events reference or gallery)
- machiaj_image.jpeg (event card)
- party_image.jpeg (event card)
- poze evenimente/*.jpeg (16 photos - rename to safe filenames)

## Files to Modify

1. `src/app/page.tsx` - Landing page (remove construction, update colors)
2. `src/app/globals.css` - Global color updates if needed
3. `src/app/[lang]/app/calendar/page.tsx` - Events data + gallery
4. `src/components/Navbar.tsx` - Color updates (amber -> purple)
5. `src/components/LanguageSwitcher.tsx` - Color updates
6. `src/app/[lang]/app/page.tsx` - Home page color updates
7. `src/app/[lang]/app/layout.tsx` - Layout color updates
8. `src/i18n/dictionaries.ts` - Update/remove construction i18n keys, add event descriptions

## Out of Scope

- New pages or routes
- Backend/API integration
- Authentication
- Payment integration
- SEO optimization
