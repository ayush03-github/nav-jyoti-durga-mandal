# NJDM Design System

## Design personality

The design should feel like:

**Traditional devotional + modern editorial website**

Not:
- Temple-management portal
- Generic blog
- Generic SaaS dashboard
- Overdecorated religious poster

## Color direction

Primary background:
- Warm cream / off-white

Primary accent:
- Saffron / devotional orange

Secondary accent:
- Maroon / deep red

Highlight:
- Restrained gold

Text:
- Deep charcoal / brown-black

Use colors consistently through Tailwind theme tokens rather than scattering arbitrary hex values throughout components.

## Typography

Hindi typography is extremely important.

Choose a clean Devanagari-compatible font with:
- Good readability
- Clear vowel marks
- Comfortable long-form reading

Use a separate display treatment for major headings if appropriate.

Lyrics should have:
- Comfortable font size
- Generous line height
- Appropriate letter spacing
- Good paragraph/verse spacing

Never use an overly decorative Hindi font for the main lyrics.

## Layout

Use:
- Wide but controlled desktop container
- Narrower reading width for lyrics
- Comfortable mobile horizontal padding
- Consistent section spacing
- Clear visual hierarchy

## Cards

Cards should be:
- Clean
- Light
- Slightly rounded
- Subtle border/shadow
- Easy to scan

Avoid making every element look like a card.

## Hero

Use devotional visual identity but keep the content readable.

If using a background image:
- Ensure text remains readable
- Add appropriate overlay
- Keep the image replaceable
- Add TODO comment for the official NJDM asset

## Lyrics reader

The lyrics section should feel like a focused reading experience.

Recommended:
- Cream/white reading surface
- High contrast text
- Large enough Hindi text
- 1.7–2.0 line-height range where visually appropriate
- Verse separation
- Sticky or easily accessible utility controls only if they do not obstruct reading

## Buttons

Primary:
- Saffron/orange

Secondary:
- Outline or neutral

Language toggle:
- Clearly show `हिन्दी` and `English`
- Make current selection obvious
- Work well on mobile

## Icons

Use a consistent icon library if already installed.

Do not mix multiple unrelated icon styles.

## Responsive behavior

### Mobile
- Single-column layout
- Compact header
- Mobile menu
- Large search
- Comfortable cards
- Full-width/near-full-width controls
- Lyrics optimized for reading

### Tablet
- 2-column grids where appropriate

### Desktop
- 3–4 column discovery grids where content supports it
- Wider navigation
- Controlled max-width
- Lyrics remain narrower than the full site width

## Empty states

Use calm, helpful empty states.

Example:
"No devotional content found for this search."

Do not make empty states visually dramatic.

## Error states

Provide a friendly 404 page with:
- Short message
- Home button
- Search option

## Motion

Use subtle transitions around 150–300ms where appropriate.

Prefer opacity/transform transitions over expensive animation.

Respect `prefers-reduced-motion`.

## Dark mode

Do not make dark mode a V1 requirement unless the existing project already has it. Prioritize the devotional light theme and reading quality.
