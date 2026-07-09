# Rogue On Switch — Product Requirements Document

## Product summary

**Rogue On Switch** is an independent, editorial directory that helps players find roguelikes and roguelites playable on Nintendo Switch. It answers the practical questions storefront listings often leave unanswered: is this game right for a player, how does it play on Switch, and what should they try next?

**Positioning:** *Find your next great run on Nintendo Switch.*

**Proposed domain:** `rogueonswitch.com` (unregistered in a registry lookup on July 9, 2026; confirm availability at checkout before purchase).

## Audience and goals

The primary audience is Nintendo Switch owners looking for a run-based game by play style, experience level, budget, available time, or multiplayer needs.

The site should:

- Make discovery simpler than browsing the eShop.
- Build organic traffic through useful, original game and category pages.
- Establish an editorial voice that is practical, candid, and enthusiast-led.
- Provide enough structured information to make recommendations trustworthy.

## Editorial scope

Cover roguelikes, roguelites, and clearly labeled run-based hybrids. Start with well-known games such as *Hades*, *Dead Cells*, *Slay the Spire*, and *Balatro*, then prioritize overlooked, affordable, and niche picks.

Each game page includes:

- Genre and subgenre.
- Roguelike/roguelite classification and persistent-progression explanation.
- Typical run length, difficulty, replayability, and accessibility notes.
- Handheld performance, readability, loading experience, control support, and local co-op where applicable.
- Price, sale history, DLC, and online-membership requirements.
- Concise “Best for” and “Skip if” guidance.
- Related games and alternatives.

## Brand and visual direction

The design should evoke a polished dungeon field guide: dark charcoal surfaces, warm cream text, restrained pixel accents, and bright color cues for major game types (action, cards, tactics, shooter, co-op). Headings can use an arcade-inspired display face, balanced by a highly readable body typeface.

Do not imitate Nintendo’s branding or use Nintendo logos in the site identity. Include a clear independent/unofficial disclaimer; use “Nintendo Switch” descriptively only.

## Information architecture

Build static, indexable pages for intentional search needs:

- `/games/[slug]/` — individual game guides.
- `/best/[topic]/` — editorial buying guides.
- `/genre/[slug]/` — curated genre hubs.
- `/features/[slug]/` — discovery by need, such as local co-op, short runs, or offline play.
- `/collections/[slug]/` — themed collections such as hidden gems or games under $20.

Examples of core launch guides:

1. Best Roguelikes on Nintendo Switch
2. Best Roguelites for Beginners
3. Best Deckbuilding Roguelikes
4. Best Co-op Roguelites
5. Best Roguelikes for Short Sessions
6. Best Hidden Gems Under $20

## SEO and technical requirements

Use Astro with typed local content files and static deployment through Cloudflare Pages or Netlify. Every indexable page must ship as HTML with a unique title, meta description, canonical URL, breadcrumb navigation, contextual internal links, and optimized responsive imagery.

Provide an XML sitemap, robots.txt, social metadata, and `BreadcrumbList`/`ItemList` JSON-LD. Use game-related schema only when supported by visible page content. Keep interactive filters client-side, but generate editorial landing pages for indexable filters with real search intent.

Maintain source links and “last checked” dates for price, platform availability, and feature claims. Fail content validation for duplicate slugs, missing summaries, missing genres, or invalid source URLs.

## Launch scope

Launch with 40–60 manually curated game entries and the six editorial guides above. Use structured data for each entry so future category, feature, and collection pages can be generated consistently. Start with local files as the source of truth; introduce a CMS only when update frequency justifies it.

## Success measures

- All launch pages are reachable from normal navigation and included appropriately in the sitemap.
- Every game entry contains original editorial guidance, not copied store text.
- A first-time visitor can identify a suitable game within three interactions.
- Organic impressions and clicks grow for category, collection, and game-intent queries.
