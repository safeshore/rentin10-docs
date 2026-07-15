# rentin10-docs

Branded **Rentin10 Tenant Help Center** microsite. It organizes and links to the
official tenant documentation hosted on the
[TenantCloud Help Center](https://support.tenantcloud.com/en/collections/14418223-tenant).

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | The microsite markup — hero, searchable topic sections, CTA, footer. |
| `styles.css` | Rentin10 branding and responsive layout. |
| `app.js` | Client-side search/filter across all article cards. |

## Topics

- **Get Started** — orientation for new tenants
- **Account & Settings** — profile, security, 2FA, saved cards
- **Pay Rent** — general payments, ACH & card
- **My Rental** — lease info, renters insurance, maintenance, rent reporting
- **Communication** — connecting with your landlord
- **Rental Applications** — applying, screening, verification

## Run locally

It's a static site — open `index.html` directly, or serve it:

```pwsh
python -m http.server 8080
# then visit http://localhost:8080
```

## Notes

- All article links point to the source TenantCloud Help Center content.
- Update contact email (`support@rentin10.com`) and links as branding evolves.