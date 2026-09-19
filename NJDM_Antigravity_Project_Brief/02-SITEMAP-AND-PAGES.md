# NJDM Sitemap & Page Requirements

## Public routes

### `/`
Landing page

### `/bhajans`
All Bhajans

### `/bhajans/[slug]`
Individual Bhajan

### `/aartis`
All Aartis

### `/aartis/[slug]`
Individual Aarti

### `/chalisa`
All Chalisas

### `/chalisa/[slug]`
Individual Chalisa

### `/mantras`
All Mantras

### `/mantras/[slug]`
Individual Mantra

### `/stotram`
All Stotrams

### `/stotram/[slug]`
Individual Stotram

### `/shloks`
All Shloks

### `/shloks/[slug]`
Individual Shlok

### `/festivals`
Festival Special Collections

### `/festivals/[slug]`
Individual Festival Collection

### `/deities`
Browse by Deity

### `/deities/[slug]`
All devotional content associated with a deity

### `/search`
Global search results

### `/about`
About Nav Jyoti Durga Mandal

## Navbar

Desktop and mobile navigation should provide access to:
- Home
- Bhajans
- Aarti
- Chalisa
- Mantras
- Stotram
- Shloks
- Festivals

Use a compact mobile menu.

The logo/name should link to Home.

## Landing page

Build the homepage in this order:

1. Header
2. Hero section
3. Global search
4. Popular/Featured Bhajans
5. Aarti collection
6. Chalisa collection
7. Browse by Deity
8. Festival Special Collection
9. Explore all categories
10. About NJDM
11. Footer

### Hero

The hero should communicate:
- Nav Jyoti Durga Mandal
- Devotional lyrics and spiritual collection
- A short respectful supporting statement

Include a prominent search field.

Do not make the hero overly tall on mobile.

### Featured content

Use cards/list items that show:
- Title
- Category
- Deity where available
- Short excerpt where useful
- Open/read action

### Browse by Deity

Create a visually clean deity grid/list.

Do not hardcode deity names into individual UI components. Load them from structured data.

### Festival Special

Show selected festival collections.

This section must be easy to update through JSON.

## Category listing pages

Every category page should contain:
- Breadcrumb
- Page title
- Short description
- Search within category
- Optional deity filter
- Optional alphabetic filtering
- Content count
- Responsive content list/grid
- Pagination or progressive loading if necessary

Do not make 200–300 entries render into an enormous visually heavy page at once.

## Individual content pages

Each devotional content page should contain:

- Breadcrumb
- Category label
- Title
- Deity
- Optional short description
- Hindi lyrics
- UI language toggle
- Share action
- Copy lyrics action if practical
- Related devotional content
- Back/browse action

The lyrics area is the primary visual focus.

Use a calm reading layout with generous line spacing.

## Search page

Global search must search across:
- Title
- Deity
- Category
- Search keywords/tags
- Relevant description

Search results should clearly identify content type.

Example:

`Hanuman`

Results:
- Hanuman Chalisa — Chalisa
- Hanuman Aarti — Aarti
- Hanuman Bhajan — Bhajan

Include a useful empty state.

## Deity pages

A deity page should show:
- Deity name
- Optional image
- Short description
- Related Bhajans
- Related Aartis
- Related Chalisas
- Related Mantras
- Related Stotrams
- Related Shloks

Only show sections that actually contain content.

## Festival pages

Festival landing page:
- Festival cards
- Festival name
- Short description
- Number/type of devotional items

Individual festival page:
- Festival introduction
- Related Bhajans
- Aartis
- Mantras
- Chalisas
- Other relevant content

Again, hide empty sections.

## About page

Include:
- Nav Jyoti Durga Mandal
- Organization introduction
- Purpose of the devotional collection
- Respectful, simple presentation

Do not invent organizational history, addresses, phone numbers, dates or claims. Leave clear placeholders/comments for official information.

## Footer

Include:
- NJDM name
- Quick links
- Categories
- Deity/festival links where appropriate
- Language switch
- Copyright placeholder
- Official contact/social links as placeholders

Do not invent contact details.
