# NJDM Component & UX Specification

## Core components

Create reusable components for:

- Header
- MobileNavigation
- LanguageToggle
- SearchBar
- SearchResults
- Breadcrumbs
- ContentCard
- ContentList
- CategoryHeader
- DeityCard
- FestivalCard
- FeaturedSection
- LyricsReader
- ShareButton
- CopyLyricsButton
- RelatedContent
- Footer
- EmptyState
- LoadingState where needed

Do not duplicate the same markup across Bhajan, Aarti, Chalisa, Mantra, Stotram and Shlok pages.

## Content card

Show:
- Title
- Content type
- Deity if available
- Short excerpt if useful
- Read/open action

Keep cards compact.

## Search UX

Search should be visible from the homepage.

When typing:
- Keep the interface responsive
- Do not make the user wait for a server request
- Search local JSON data
- Show categorized results where possible

Search should support both Hindi and English terms where data supports them.

## Language UX

The user should be able to switch between:
- English UI
- Hindi UI

Lyrics remain Hindi.

Example:

English UI:
- `Read Bhajan`
- `Search devotional content`

Hindi UI:
- `भजन पढ़ें`
- `भक्ति सामग्री खोजें`

Do not translate lyrics through an automated translation system.

Persist the language choice locally if practical.

## Lyrics utilities

Provide:
- Copy lyrics
- Share
- Optional print-friendly behavior

Copy should copy only the meaningful lyric content, not navigation/UI text.

Share should use the Web Share API where available and a fallback where appropriate.

## Related content

Prioritize:
1. Same deity
2. Same type/category
3. Same festival
4. Relevant keywords

Avoid repeating the exact current item.

## Navigation

The visitor should always understand:
- Where they are
- What category they're in
- How to return

Use breadcrumbs on inner pages.

## SEO-friendly routing

Every content item must have a stable slug.

Avoid query-parameter-only content URLs such as:

`/bhajans?id=123`

Prefer:

`/bhajans/hanuman-bhajan`

## Accessibility

Interactive controls must have:
- Accessible names
- Keyboard support
- Visible focus
- Appropriate semantic elements

Do not use clickable `div`s when a button/link is appropriate.
