# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Big Give (thebiggive.ca) is a Gatsby 5 static site that pulls content from a WordPress backend via WPGraphQL. It supports English and French localization.

## Commands

- **Dev server:** `npm run develop` (runs on 0.0.0.0, uses `NODE_TLS_REJECT_UNAUTHORIZED=0`)
- **Build:** `npm run build`
- **Clean cache:** `npm run clean` (useful when Gatsby caching causes stale data)
- **Serve production build:** `npm run serve`
- **Format:** `npm run format` (Prettier)

## Architecture

### Data Source
- WordPress headless CMS accessed via `gatsby-source-wordpress` plugin
- GraphQL endpoint: `https://andrewd122.sg-host.com/graphql` (overridable via `WPGRAPHQL_URL` env var)
- `gatsby-node.js` programmatically creates Story pages from the `allWpStory` WordPress type using `src/templates/story.js`

### Styling
- **styled-components** for all component styling
- Each component folder has an `*Elements.js` file containing styled-component definitions, paired with an `index.js` for logic/markup
- Global styles in `globalStyles.js` using `createGlobalStyle`
- Responsive breakpoints defined in `media.js` at project root
- Custom fonts: Farro (headings) and Poppins (body), loaded via `src/css/typography.css`

### i18n
- `gatsby-plugin-react-i18next` with `react-i18next`
- Two locales: `en` and `fr`
- Translation files: `locales/en/common.json` and `locales/fr/common.json`
- Single namespace: `common`

### Layout
- `src/components/Layout/index.js` wraps all pages with Navbar, Footer, and a global donate Modal
- `AnnouncementBar` component exists but is currently commented out in Layout

### Pages
Static pages in `src/pages/`: index (home), about, big-stories, get-involved, participating-churches, become-a-regional-champion, statement-of-faith, the-big-give-agreement, thank-you, 404.

### Component Organization
Components are grouped by page/feature under `src/components/`:
- `Home/` — Header, About, Steps, RegionalChampions, BigStories, SocialMedia, ThankYou
- `About/` — AboutRegional, Contact (with Form), History (with Timeline), Team (with Card/Modal)
- `BigStories/` — Stories, Videos (with Thumbnail, VideoModal)
- `GetInvolved/` — Events (with Modal), Resources (with Dropdown)
- `ParticipatingChurches/` — ChurchList, ChurchMap (Google Maps integration)
- `Common/` — Reusable: AltHeader, EmailForm, FAQ, Header, Modal, PlainText
- `Layout/` — Navbar, Footer, MobileMenu, AnnouncementBar
- `Buttons/` — Shared button components
