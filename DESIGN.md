# Design System Inspired by Amrit Palace

## 1. Visual Theme & Atmosphere

Amrit Palace embodies warm, sophisticated authenticity rooted in Indian culinary heritage. The design exudes timeless elegance through a carefully curated palette of earthy tones—soft, neutral backgrounds evoke the texture of traditional clay and stone used in authentic Indian cooking. Serif typography commands attention with refined restraint, while warm accent colors recall the rich spices and vibrant cookware of traditional tandoori preparation. The overall aesthetic feels artisanal and carefully crafted, celebrating heritage while maintaining modern clarity. Every visual element reinforces a narrative of tradition, care, and culinary excellence.

**Key Characteristics**
- Warm, earthy neutrality with golden-bronze accents
- Refined serif display typography paired with geometric sans-serif body text
- Generous whitespace and vertical rhythm honoring content hierarchy
- Muted, sophisticated color language inspired by natural spice tones
- Minimal ornamentation; emphasis on food imagery and craft storytelling
- Touch of luxury through restraint and intentional spacing

## 2. Color Palette & Roles

### Primary
- **Cream Base** (`#D8CBB8`): Primary background, header overlays, neutral zones; creates warm, inviting surface
- **Warm Accent** (`#D49653`): Navigation highlights, category tabs, interactive accents; draws attention to actionable elements

### Accent Colors
- **Rich Spice** (`#D49653`): Secondary call-to-action emphasis; used for menu category buttons and highlight states

### Interactive
- **Link Text** (`#2C2C2C`): All linked and navigable text; maintains legibility and hierarchy
- **Button Text** (`#2C2C2C`): Default text on interactive components; ensures accessibility on light backgrounds

### Neutral Scale
- **Charcoal Dark** (`#2C2C2C`): Primary text, headings, body copy; dominant color used 991 times throughout interface
- **Deep Charcoal** (`#222222`): Secondary emphasis, fine details, subtle differentiation
- **Light Divider** (`#DDDDDD`): Subtle borders, dividing lines, minimal separation

### Surface & Borders
- **Page Background** (`#D8CBB8`): Entire page surface; consistent, warm foundation
- **Border Accent** (`#D49653`): Category separators and subtle containment lines

## 3. Typography Rules

### Font Family
**Primary Display:** TT Ramillas Variable (https://fonts.googleapis.com/) — elegant, high-contrast serif for headings and brand presence. Fallback: `Georgia, serif`

**Secondary Body & UI:** Satoshi (https://fonts.googleapis.com/) — clean geometric sans-serif for navigation, links, labels, and readability. Fallback: `Segoe UI, -apple-system, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / Hero | TT Ramillas Variable | 95px | 300 | 76px | 0px | Menu page title, primary hero text |
| Heading 1 | TT Ramillas Variable | 64px | 300 | 51px | 0px | Large section headers |
| Heading 2 | TT Ramillas Variable | 48px | 300 | 38px | 0px | Section subheadings |
| Heading 3 | TT Ramillas Variable | 32px | 400 | 39px | 0px | Subsection titles |
| Body Large | Satoshi | 16px | 400 | 24px | 0px | Main content text, long-form descriptions |
| Body Regular | Satoshi | 15px | 500 | 15px | 0px | Primary navigation links |
| Body Small | Satoshi | 12px | 500 | 12px | 0px | Navigation items, labels, secondary text |
| Caption | Satoshi | 11px | 500 | 11px | 0px | Fine print, timestamps, metadata |
| Link | Satoshi | 15px | 500 | 15px | 0px | Standalone hyperlinks |

### Principles
- **Serif for Impact:** TT Ramilles Variable reserved for hero scales and primary headings, establishing authority and brand presence
- **Sans for Clarity:** Satoshi handles all UI text, navigation, and body copy; weight 500 ensures legibility at smaller sizes
- **Generous Line Height:** All typography maintains breathing room; minimum 1.0× line height ratio
- **Restrained Contrast:** Text color `#2C2C2C` on `#D8CBB8` provides warm, accessible contrast without harsh black
- **Semantic Sizing:** Each role has distinct purpose; no visual ambiguity across hierarchy levels

## 4. Component Stylings

### Buttons

#### Primary Navigation Button
- **Background:** `#D8CBB8`
- **Text Color:** `#2C2C2C`
- **Font:** Satoshi, 12px, weight 500
- **Padding:** `12px 12px 12px 12px`
- **Border Radius:** `0px`
- **Border:** `0px none #2C2C2C`
- **Line Height:** `12px`
- **Box Shadow:** `none`
- **Hover State:** Background `#D49653`, text `#2C2C2C`
- **Active State:** Background `#D49653`, underline border-bottom `2px solid #2C2C2C`

#### Category Tab Button
- **Background:** `#D49653`
- **Text Color:** `#2C2C2C`
- **Font:** Satoshi, 12px, weight 500
- **Padding:** `12px 24px 12px 24px`
- **Border Radius:** `0px`
- **Border:** `0px none #2C2C2C`
- **Line Height:** `12px`
- **Box Shadow:** `none`
- **Hover State:** Background `#D8CBB8`, text `#2C2C2C`, slight elevation
- **Active State:** Background `#D49653`, text `#FFFFFF`

#### Secondary Action Button
- **Background:** `transparent`
- **Text Color:** `#D49653`
- **Font:** Satoshi, 15px, weight 500
- **Padding:** `12px 24px 12px 24px`
- **Border Radius:** `0px`
- **Border:** `1px solid #D49653`
- **Line Height:** `15px`
- **Box Shadow:** `none`
- **Hover State:** Background `#D49653`, text `#FFFFFF`

### Cards & Containers

#### Menu Item Card
- **Background:** `#FFFFFF`
- **Text Color:** `#2C2C2C`
- **Padding:** `24px`
- **Border Radius:** `0px`
- **Border:** `1px solid #DDDDDD`
- **Box Shadow:** `0px 2px 8px rgba(0, 0, 0, 0.04)`
- **Heading Font:** TT Ramilles, 24px, weight 400
- **Description Font:** Satoshi, 15px, weight 400
- **Hover State:** Border color `#D49653`, box-shadow `0px 4px 12px rgba(0, 0, 0, 0.08)`

#### Feature Card / Hero Section
- **Background:** `#D8CBB8`
- **Text Color:** `#2C2C2C`
- **Padding:** `64px 52px 64px 52px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Box Shadow:** `none`
- **Heading Font:** TT Ramilles, 95px, weight 300
- **Body Font:** Satoshi, 16px, weight 400

#### Section Container
- **Background:** `#D8CBB8`
- **Padding:** `72px 40px 72px 40px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Box Shadow:** `none`

### Inputs & Forms

#### Text Input Field
- **Background:** `#FFFFFF`
- **Text Color:** `#2C2C2C`
- **Font:** Satoshi, 15px, weight 400
- **Padding:** `12px 16px 12px 16px`
- **Border Radius:** `0px`
- **Border:** `1px solid #DDDDDD`
- **Line Height:** `15px`
- **Box Shadow:** `none`
- **Focus State:** Border `2px solid #D49653`, box-shadow `0px 0px 0px 3px rgba(212, 150, 83, 0.1)`
- **Placeholder Color:** `#999999`

#### Select/Dropdown Field
- **Background:** `#FFFFFF`
- **Text Color:** `#2C2C2C`
- **Font:** Satoshi, 15px, weight 400
- **Padding:** `12px 16px 12px 16px`
- **Border Radius:** `0px`
- **Border:** `1px solid #DDDDDD`
- **Line Height:** `15px`
- **Box Shadow:** `none`
- **Hover State:** Border `1px solid #D49653`
- **Open State:** Border `2px solid #D49653`, background `#FFFFFF`

#### Label Text
- **Font:** Satoshi, 12px, weight 500
- **Color:** `#2C2C2C`
- **Margin Bottom:** `8px`
- **Line Height:** `12px`

### Navigation

#### Header Navigation
- **Background:** `#D8CBB8`
- **Text Color:** `#2C2C2C`
- **Font:** Satoshi, 12px, weight 500
- **Padding:** `12px 12px 12px 12px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Line Height:** `12px`
- **Box Shadow:** `none`
- **Hover State:** Background `#D49653`, text `#2C2C2C`
- **Active State:** Background `#D49653`, text `#FFFFFF`, border-bottom `3px solid #2C2C2C`

#### Menu Category Navigation
- **Background:** `#D49653`
- **Text Color:** `#2C2C2C`
- **Font:** Satoshi, 11px, weight 500
- **Padding:** `16px 20px 16px 20px`
- **Border Radius:** `0px`
- **Line Height:** `11px`
- **Hover State:** Background `#D8CBB8`, text `#2C2C2C`, shadow `0px 2px 6px rgba(0, 0, 0, 0.1)`
- **Active State:** Underline `3px solid #2C2C2C`

#### Link (Inline)
- **Background:** `transparent`
- **Text Color:** `#2C2C2C`
- **Font:** Satoshi, 15px, weight 500
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** `none`
- **Line Height:** `15px`
- **Box Shadow:** `none`
- **Hover State:** Text decoration `underline`, color `#D49653`
- **Active State:** Color `#D49653`, underline `2px solid #D49653`

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Scale:**
- `4px` — Micro adjustments, icon spacing
- `8px` — Tight grouping, input gaps
- `12px` — Buttons, form labels, component padding
- `16px` — Default margin, section gutters
- `20px` — Category separations, component gaps
- `24px` — Card padding, moderate spacing
- `28px` — Heading margins, breathing room
- `32px` — Group spacing, multi-component gaps
- `40px` — Section padding, horizontal gutters
- `52px` — Large card padding, hero padding
- `64px` — Major section margins, page-level spacing
- `72px` — Top/bottom section padding, dramatic separation

**Usage Context:**
- Buttons & form controls: `12px` padding
- Cards & containers: `24px`–`52px` padding
- Section spacing: `64px`–`72px` margin
- Navigation/header gaps: `8px`–`20px`
- Whitespace between sections: `72px` top/bottom

### Grid & Container

**Max Width:** `1280px` for main content container (with `40px` side padding = `1200px` effective)

**Column Strategy:** 12-column flexible grid for desktop; 6-column for tablet; single column for mobile with `24px` gutters

**Section Patterns:**
- Full-width hero sections: `#D8CBB8` background, `72px` vertical padding, centered text
- Content sections: max-width container, `40px` horizontal padding, `72px` vertical spacing
- Menu grid: 2–4 columns (adaptive) with `32px` gap between cards
- Navigation bar: full-width sticky, `12px` padding vertical/horizontal, flexbox centered

### Whitespace Philosophy

Whitespace is treated as an active design element reinforcing hierarchy and breathability. Vertical rhythm is maintained through consistent `64px`–`72px` spacing between major sections, creating visual pauses. Component padding (`24px`–`52px`) provides breathing room within cards. The warm `#D8CBB8` background itself acts as negative space, allowing featured content and food imagery to dominate. No cramped layouts; all interactive elements surrounded by minimum `12px` clearance.

### Border Radius Scale

- **Sharp Edges:** `0px` — Used throughout for buttons, inputs, cards, navigation; reinforces modern, editorial aesthetic
- **No Rounded Corners:** Consistent 0-radius approach maintains architectural clarity and heritage feel
- **Focus Indicators:** Subtle `2px solid #D49653` outline with `3px` offset for accessibility

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (L0) | No shadow, `box-shadow: none` | Backgrounds, sections, static containers |
| Raised (L1) | `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04)` | Cards, menu items, subtle lift |
| Elevated (L2) | `box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08)` | Hover states on cards, dropdown menus |
| High (L3) | `box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12)` | Modals, overlays, navigation dropdowns |
| Modal (L4) | `box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.15)` | Full-screen overlays, lightboxes |

**Shadow Philosophy:** Shadows are subtle and warm-toned, never harsh black. Elevation increases progressively with interactivity level. Hover states employ L2 shadows to signal clickability. Modals and overlays use L3–L4 for clear layering hierarchy. Flat design predominates; shadows used sparingly to avoid visual noise on the warm background.

## 7. Do's and Don'ts

### Do
- **Use `#2C2C2C` for all body text and headings** — it maintains warm contrast against `#D8CBB8` and is the dominant color throughout
- **Maintain `0px` border radius across all components** — sharp edges reinforce the refined, editorial aesthetic
- **Apply generous padding (`24px`–`52px`) to card and section containers** — respects the whitespace-first philosophy
- **Reserve TT Ramilles Variable for display/hero scales only** — use Satoshi for all UI text and navigation
- **Use `#D49653` as interactive accent sparingly** — category tabs, hover states, and primary CTAs only
- **Implement vertical spacing in `64px`–`72px` increments** between major sections
- **Layer shadows conservatively** — use L1 for cards, L2 for hovers; avoid stacking shadows
- **Ensure minimum `44px` touch target height** on buttons and interactive elements
- **Stack typography with semantic intent** — h1 for page titles, h2 for sections, body for content

### Don't
- **Don't use rounded corners** — this breaks the refined, architectural language
- **Don't apply `#D49653` as body background** — reserve for accent highlights and navigation only
- **Don't use pure black (`#000000`)** — employ `#2C2C2C` or `#222222` for warmth
- **Don't mix serif and sans fonts within a single text element** — maintain clear role separation
- **Don't pad buttons less than `12px`** — respect minimum touchability
- **Don't layer more than two shadows on a single element** — visual clarity takes precedence
- **Don't overcrowd with accent colors** — `#D49653` appears 4 times; restraint reinforces luxury
- **Don't use colors beyond the defined palette** — no custom shades; maintain consistency
- **Don't set line-height below `1.4×`** — ensure readability across all sizes
- **Don't ignore responsive breakpoints** — collapse gracefully; maintain spacing hierarchy on mobile

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|------------|
| Mobile | 320px–639px | Single-column layout, `24px` padding, `12px` gaps, h1 → 48px, navigation stacked |
| Tablet | 640px–1023px | 2-column grid, `32px` padding, `16px` gaps, h1 → 72px, horizontal nav |
| Desktop | 1024px–1279px | 3–4 column grid, `40px` padding, `32px` gaps, h1 → 95px, full nav bar |
| Large Desktop | 1280px+ | Max-width container `1280px`, centered, 4-column menu grid, full spacing scale |

### Touch Targets

- **Minimum Height:** `44px` for all interactive buttons, links, and navigation items
- **Minimum Width:** `44px` for icon-only buttons
- **Padding Around Targets:** `8px` minimum clearance between adjacent interactive elements
- **Finger-Friendly Spacing:** Navigation items spaced `16px` apart minimum
- **Form Fields:** Minimum height `44px` including padding; input text `15px` or larger

### Collapsing Strategy

- **Navigation:** Desktop horizontal nav collapses to vertical stack under hamburger menu at 640px breakpoint
- **Menu Grid:** 4 columns → 2 columns at 1024px → 1 column at 640px
- **Section Padding:** `72px` vertical → `52px` at tablet → `40px` at mobile
- **Typography:** Display (95px) → 72px (tablet) → 48px (mobile); body text `15px` → `14px` at mobile for legibility
- **Hero Sections:** Full-height on desktop → 70vh on tablet → 60vh on mobile
- **Horizontal Gutters:** `40px` → `32px` (tablet) → `16px` (mobile)
- **Card Gaps:** `32px` → `20px` (tablet) → `12px` (mobile)
- **Images:** 100% max-width, responsive aspect ratios (16:9 for hero, 4:3 for cards)

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA / Highlights:** Warm Accent (`#D49653`) — category tabs, hover states, secondary action emphasis
- **Page Background / Base:** Cream Base (`#D8CBB8`) — entire page surface, neutral zones, header overlay
- **All Body Text & Headings:** Charcoal Dark (`#2C2C2C`) — primary text, navigation, interface labels (991 occurrences)
- **Borders & Dividers:** Light Divider (`#DDDDDD`) — subtle separations, card borders
- **Secondary Text:** Deep Charcoal (`#222222`) — fine details, subtle differentiation
- **Foreground (Cards, Forms):** Pure White (`#FFFFFF`) — form fields, menu cards, content containers

### Iteration Guide

1. **Start with the warm neutral base:** All pages use `#D8CBB8` as default background; nest white (`#FFFFFF`) cards for form content and menu items
2. **Typography: serif for display, sans for UI:** TT Ramilles for h1/h2 at sizes 48px+; Satoshi for all body, navigation, labels; never mix fonts in a single line
3. **Spacing hierarchy: 64px–72px sections, 24px–52px padding:** Use vertical rhythm as primary visual organizer; generous breathing room reinforces luxury positioning
4. **Accent color discipline:** Apply `#D49653` only to navigation tabs, hover states, and primary interactive elements; use sparingly for maximum impact
5. **Shadows rare and subtle:** L1 (`0px 2px 8px rgba(0,0,0,0.04)`) for cards; L2 (`0px 4px 12px rgba(0,0,0,0.08)`) for hovers; avoid excess layering
6. **Sharp edges throughout:** `border-radius: 0px` on all buttons, inputs, cards, navigation; maintains refined, editorial aesthetic
7. **Minimum touch targets 44px:** All buttons and interactive elements meet accessibility standard; maintain `8px` clearance between adjacent targets
8. **Responsive collapse:** Desktop 4-column grid → tablet 2-column → mobile 1-column; typography scales 95px → 72px → 48px for hero; padding 40px → 32px → 16px
9. **Semantic text colors always:** Use `#2C2C2C` for 99% of text; reserve `#D49653` for accents; never use pure black; maintain warm, sophisticated tone across all scales