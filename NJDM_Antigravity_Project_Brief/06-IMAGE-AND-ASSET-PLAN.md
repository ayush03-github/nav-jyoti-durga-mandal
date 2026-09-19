# NJDM Image & Asset Plan

## Important instruction for Antigravity

**DO NOT GENERATE IMAGES.**

During development, use suitable existing web images only as temporary placeholders.

The final organization-owned images will be added later.

## Temporary image strategy

Use image references that can easily be replaced.

Keep image paths centralized in JSON or a single configuration layer.

Example:

```text
public/
└── images/
    ├── placeholder/
    ├── deities/
    ├── festivals/
    └── content/
```

Where an image is temporary, add a code comment:

```text
TODO: Replace temporary image with official NJDM image.
```

## Assets expected later

Potential final assets:
- NJDM logo
- Organization hero image
- Official deity artwork/photos
- Festival images
- Category thumbnails
- Social sharing images
- Favicon
- OG image

## Do not invent organization identity

Do not create:
- Fake logo
- Fake organization history
- Fake address
- Fake phone number
- Fake social accounts
- Fake institutional claims

Use placeholders/comments until official assets/details are supplied.

## Image performance

When images are used:
- Use Next.js image optimization
- Provide meaningful alt text
- Avoid unnecessarily large source images
- Lazy-load non-critical images
- Use appropriate aspect ratios
- Prevent layout shift by reserving dimensions

## Copyright

Temporary web images must not be treated as automatically licensed for final publication.

For production, replace them with:
- Organization-owned images
- Properly licensed images
- Public-domain/appropriate licensed assets

## Logo

Leave the logo area replaceable.

If no official logo is provided, use a simple text-based NJDM identity temporarily rather than generating a logo image.
