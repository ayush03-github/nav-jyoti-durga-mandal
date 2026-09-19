# NJDM Devotional Website — Antigravity Project Brief

## 1. Project identity

**Organization:** Nav Jyoti Durga Mandal  
**Short name:** NJDM

Build a modern, trustworthy, devotional content website dedicated to the organization's collection of:
- Bhajans
- Aartis
- Chalisas
- Mantras
- Stotrams
- Shloks
- Festival Special Collections

The website should feel devotional and culturally appropriate without looking outdated, cluttered, or like a generic lyrics blog.

## 2. Core product goal

Create a mobile-first website where visitors can:
1. Discover devotional content quickly.
2. Search across the complete collection.
3. Browse content by category and deity.
4. Read Hindi lyrics comfortably.
5. Switch the website UI between Hindi and English while keeping the lyrics in Hindi.
6. Open individual SEO-friendly content pages.
7. Discover festival-specific collections.
8. Share useful devotional pages easily.

The initial content volume is expected to be approximately **200–300 bhajans**, with additional Aarti, Chalisa, Mantra, Stotram and Shlok content.

## 3. Technical direction

Use the existing project stack where practical:
- Next.js
- React
- Tailwind CSS
- JSON-based content
- Static/server-rendered pages where appropriate
- No database
- No paid CMS
- No paid APIs
- No authentication/admin system for V1

Content must live in structured JSON files inside the project.

The architecture should make it easy to migrate to a database or CMS in the future without rebuilding the UI.

## 4. Important implementation principle

Do NOT over-engineer this project.

The website should be:
- Fast
- Simple
- Maintainable
- SEO-friendly
- Mobile-first
- Accessible
- Easy to update by editing JSON

Do not introduce unnecessary libraries merely for visual effects.

## 5. Content categories

V1 categories:
- Bhajans
- Aartis
- Chalisas
- Mantras
- Stotrams
- Shloks

Also support:
- Festival Special Collections
- Deity-based collections

The category architecture must be extensible.

## 6. Languages

The actual devotional lyrics are primarily **Hindi**.

The website UI must support:
- English UI + Hindi lyrics
- Hindi UI + Hindi lyrics

Provide a clear Hindi/English toggle.

The language toggle should affect:
- Navigation labels
- Buttons
- Search labels/placeholders
- Category labels
- Page headings
- Supporting UI text
- Empty states
- Footer text
- Metadata where practical

Do not translate or alter Hindi lyrics when switching UI language.

## 7. Images

Do NOT generate images.

Use appropriate existing web images from Google/search sources as temporary visual assets during development where necessary.

Important:
- Do not build the design around an image that cannot later be replaced.
- Add clear code comments such as:
  `// TODO: Replace temporary image with official NJDM asset`
- Keep image references centralized so replacement is easy.
- Prefer properly licensed/publicly usable images for the final production version.
- Do not scrape or copy copyrighted images blindly.

## 8. Visual direction

Use a **traditional devotional palette**:
- Cream/off-white base
- Saffron/orange accents
- Maroon/deep red accents
- Gold used sparingly
- Dark readable text

The visual language should feel:
- Peaceful
- Sacred
- Warm
- Premium
- Clean
- Respectful

Avoid:
- Excessive gradients
- Neon colors
- Heavy glassmorphism
- Overly flashy animations
- Excessive gold effects
- Cluttered cards
- Generic SaaS styling

## 9. Animation

Keep animation subtle.

Allowed:
- Soft hover transitions
- Button transitions
- Card hover elevation
- Small fade/slide page transitions
- Mobile menu transitions
- Search/filter transitions

Avoid:
- Large parallax effects
- Constant floating animations
- Distracting animated backgrounds
- Slow transitions that interfere with reading

## 10. Mobile-first

Design for mobile first.

Priorities:
1. Comfortable Hindi reading
2. Fast search
3. Easy category navigation
4. Large touch targets
5. Simple bottom/section navigation where useful
6. Responsive typography
7. No horizontal scrolling
8. Fast loading on mobile networks

Then progressively enhance for tablet and desktop.

## 11. Performance

The website should remain lightweight.

Prefer:
- Static generation where practical
- Optimized images
- Lazy loading below-the-fold images
- Minimal client-side JavaScript
- Server components where appropriate
- Avoid unnecessary third-party scripts

Lyrics pages should load quickly because they are likely to be the most frequently visited pages.

## 12. Accessibility

Include:
- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper button labels
- Sufficient contrast
- Alt text for meaningful images
- `aria-label` where necessary
- No interaction that depends only on hover
- Readable Hindi typography

## 13. Content integrity

Never modify devotional lyrics simply to make them look better.

Preserve:
- Line breaks where meaningful
- Paragraph/verse structure
- Traditional wording supplied in the JSON
- Hindi characters exactly as provided

If a lyric contains an uncertain spelling, do not silently invent a correction. Keep content editable in JSON.
