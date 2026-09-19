# NJDM Final QA Checklist

## Branding
- [ ] Organization name is Nav Jyoti Durga Mandal
- [ ] NJDM abbreviation is used consistently
- [ ] No fake organization information
- [ ] Official logo can be inserted later
- [ ] Temporary images have TODO replacement comments

## Pages
- [ ] Home works
- [ ] Bhajans listing works
- [ ] Bhajan detail works
- [ ] Aarti listing works
- [ ] Aarti detail works
- [ ] Chalisa listing works
- [ ] Chalisa detail works
- [ ] Mantra listing works
- [ ] Mantra detail works
- [ ] Stotram listing works
- [ ] Stotram detail works
- [ ] Shlok listing works
- [ ] Shlok detail works
- [ ] Festivals works
- [ ] Festival detail works
- [ ] Deities works
- [ ] Deity detail works
- [ ] Search works
- [ ] About works
- [ ] 404 works

## Content
- [ ] JSON is the source of truth
- [ ] No devotional lyrics are hardcoded into UI components
- [ ] Slugs are unique
- [ ] Content types are consistent
- [ ] Deity references are consistent
- [ ] Search keywords are present where useful
- [ ] Featured flags work
- [ ] Published flags work

## Language
- [ ] English UI works
- [ ] Hindi UI works
- [ ] Toggle works on mobile
- [ ] Lyrics remain Hindi
- [ ] UI translations are consistent
- [ ] Language preference persists if implemented

## Search
- [ ] English search works
- [ ] Hindi search works
- [ ] Search covers titles
- [ ] Search covers deity
- [ ] Search covers keywords
- [ ] Search covers category
- [ ] Empty state works

## Mobile
- [ ] No horizontal scrolling
- [ ] Navigation works
- [ ] Search is easy to use
- [ ] Cards are readable
- [ ] Lyrics are comfortable to read
- [ ] Buttons have adequate touch targets
- [ ] Language toggle is easy to access

## Desktop
- [ ] Layout uses available space appropriately
- [ ] Content doesn't become excessively wide
- [ ] Lyrics retain a comfortable reading width
- [ ] Navigation is clear
- [ ] Grids don't look sparse or overcrowded

## Accessibility
- [ ] Semantic headings
- [ ] Keyboard navigation
- [ ] Visible focus states
- [ ] Image alt text
- [ ] Accessible controls
- [ ] Good color contrast
- [ ] Reduced motion respected

## Performance
- [ ] Images optimized
- [ ] Non-critical images lazy-loaded
- [ ] Minimal client components
- [ ] No unnecessary libraries
- [ ] No unnecessary third-party scripts
- [ ] Main pages load quickly

## SEO
- [ ] Unique title metadata
- [ ] Unique descriptions where appropriate
- [ ] Canonicals
- [ ] Sitemap
- [ ] Robots
- [ ] Open Graph
- [ ] Breadcrumbs
- [ ] Clean URLs
- [ ] Individual content pages indexable

## UX polish
- [ ] Subtle hover effects
- [ ] Subtle transitions
- [ ] No distracting animation
- [ ] Loading states are calm
- [ ] Empty states are clear
- [ ] Error states are useful
- [ ] Buttons have clear labels
- [ ] Share/copy functionality works where implemented

## Production readiness
- [ ] No broken links
- [ ] No console errors
- [ ] No hydration warnings
- [ ] No missing images
- [ ] No placeholder organization claims
- [ ] No exposed secrets
- [ ] Environment variables are not committed
- [ ] Build succeeds
- [ ] Vercel deployment works
