# NJDM JSON Data Architecture

## Principle

Use JSON as the single source of truth for devotional content.

Do not duplicate the same lyric in multiple UI files.

## Suggested structure

```text
data/
├── bhajans.json
├── aartis.json
├── chalisas.json
├── mantras.json
├── stotrams.json
├── shloks.json
├── deities.json
├── festivals.json
└── site.json
```

If the JSON files become difficult to maintain, they may later be split into folders without changing the content model.

## Content schema

Each devotional item should support:

```json
{
  "id": "unique-id",
  "title": "Hindi title",
  "slug": "url-friendly-slug",
  "type": "bhajan",
  "deity": "Hanuman",
  "category": "Bhajan",
  "lyrics": "Hindi lyrics...",
  "description": "Short description",
  "excerpt": "Short listing excerpt",
  "keywords": [
    "hanuman bhajan",
    "bajrang bali bhajan"
  ],
  "festival": [],
  "image": "/images/placeholder.jpg",
  "youtubeUrl": "",
  "audioUrl": "",
  "featured": false,
  "published": true
}
```

Not every field needs to be filled.

## Important fields

### `id`
Stable internal identifier.

### `title`
Primary displayed Hindi title.

### `slug`
Unique URL slug.

Example:
`hanuman-chalisa`

### `type`
One of:
- bhajan
- aarti
- chalisa
- mantra
- stotram
- shlok

### `deity`
Use a consistent deity name that matches `deities.json`.

### `lyrics`
Main Hindi content.

### `description`
Short, factual description.

### `keywords`
Useful search/SEO terms.

### `festival`
Array of festival IDs/slugs where relevant.

### `image`
Optional visual asset.

### `youtubeUrl`
Optional external video.

### `audioUrl`
Optional future audio file.

### `featured`
Controls homepage featured content.

### `published`
Controls whether content appears publicly.

## Deity schema

```json
{
  "id": "hanuman",
  "name": "हनुमान",
  "englishName": "Hanuman",
  "slug": "hanuman",
  "description": "",
  "image": ""
}
```

Add a TODO comment in the code where official deity images should eventually replace temporary images.

## Festival schema

```json
{
  "id": "navratri",
  "name": "नवरात्रि",
  "englishName": "Navratri",
  "slug": "navratri",
  "description": "",
  "image": "",
  "featured": true
}
```

## Site configuration

Keep general website information in `site.json`:

```json
{
  "name": "Nav Jyoti Durga Mandal",
  "shortName": "NJDM",
  "description": "",
  "logo": "",
  "social": {
    "youtube": "",
    "instagram": "",
    "facebook": ""
  }
}
```

Do not invent official links or organization details.

## Data helpers

Create reusable functions for:
- Get all content
- Get content by slug
- Get content by type
- Get content by deity
- Get content by festival
- Get featured content
- Search content
- Get related content

Keep these functions separate from UI components.

## Search

Build search over the JSON dataset.

Search:
- title
- deity
- keywords
- description
- category/type

Normalize input for:
- lowercase English searches
- whitespace
- basic punctuation

Preserve Hindi search support.

Do not require an external search service.

## Future migration

Keep the UI independent from the raw JSON structure as much as practical.

If the organization eventually needs:
- Admin editing
- User submissions
- User accounts
- Favorites stored server-side
- Thousands of records
- Analytics-driven personalization

then the JSON layer can later be replaced by a database/CMS.
