---
name: YardPulse Control
colors:
  surface: '#031427'
  surface-dim: '#031427'
  surface-bright: '#2a3a4f'
  surface-container-lowest: '#000f21'
  surface-container-low: '#0b1c30'
  surface-container: '#102034'
  surface-container-high: '#1b2b3f'
  surface-container-highest: '#26364a'
  on-surface: '#d3e4fe'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d3e4fe'
  inverse-on-surface: '#213145'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#4ae176'
  on-tertiary: '#003915'
  tertiary-container: '#001d07'
  on-tertiary-container: '#009542'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#031427'
  on-background: '#d3e4fe'
  surface-variant: '#26364a'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  gutter: 12px
  sidebar_width: 240px
  sidebar_collapsed: 64px
---

## Brand & Style

The design system is engineered for YardPulse Control, a mission-critical rail yard dispatch interface. The brand personality is **utilitarian, precise, and authoritative**, prioritizing functional speed over decorative flair. The target audience consists of dispatchers and yard masters who require immediate situational awareness and the ability to process high-density data without visual fatigue.

The design style is **Functional Minimalism** with a focus on **Data-First Architecture**. It avoids gradients, blurs, and skeuomorphism in favor of high-contrast status signaling and structured information hierarchies. The UI evokes the feeling of a modern industrial control room: reliable, no-nonsense, and highly organized.

## Colors

The palette is rooted in a **Deep Industrial Slate and Navy** scheme to reduce eye strain during long shifts. 

- **Primary & Backgrounds:** The base is a near-black Navy (`#020617`), with panels and containers using Slate (`#1E293B`) to create subtle depth without shadows.
- **Accents:** Safety Orange is reserved for primary actions and critical alerts. Signal Green and Caution Yellow are used strictly for operational status indicators.
- **Typography Colors:** High-contrast White (`#F8FAFC`) for primary data and Slate-400 (`#94A3B8`) for metadata and labels.

## Typography

This design system utilizes **Inter** for its exceptional legibility and neutral character. For specific telemetry and ID strings, **JetBrains Mono** is employed to ensure character distinction (e.g., distinguishing '0' from 'O').

- **Tabular Numbers:** All data-heavy views must use `tnum` (tabular figures) to ensure columns of numbers align vertically for quick scanning.
- **Scale:** The scale is intentionally small to facilitate high information density. 14px is the standard for body text, while 12px and 13px are used for secondary data and table content.

## Layout & Spacing

The layout utilizes a **Fixed-Fluid Hybrid** model. A persistent 240px sidebar sits on the left, while the main dashboard area utilizes a 12-column fluid grid with tight 12px gutters.

- **Density:** We use a 4px base unit. Component internal padding is minimized (typically 8px horizontal, 4px vertical for list items) to maximize the "at-a-glance" capacity of the dispatch board.
- **Grid:** Layouts should prioritize horizontal scans. Rows in data tables have a fixed height of 32px or 36px to ensure consistency across massive datasets.

## Elevation & Depth

Elevation is communicated through **Tonal Stepping** rather than shadows. In a high-density, dark-mode industrial UI, shadows create visual mud. 

- **Level 0 (Base):** Deepest Navy (`#020617`).
- **Level 1 (Panels/Cards):** Slate (`#1E293B`).
- **Level 2 (In-panel elements/Popovers):** Lighter Slate (`#334155`).
- **Borders:** Subtle 1px borders using `#334155` are used to define boundaries between adjacent data cells and panels.

## Shapes

The shape language is **Strict and Architectural**. 

- **Corner Radius:** A universal 4px (`0.25rem`) radius is used for panels, buttons, and input fields. This provides a slightly modern feel while remaining space-efficient and professional.
- **Interactive Elements:** Buttons and tags maintain this 4px radius. Status "pills" may use a full-round (pill) shape only when used as standalone status indicators in a table row to differentiate them from interactive buttons.

## Components

### Data Tables
The core of the system. Tables must feature:
- Sticky headers with 1px bottom borders.
- Zebra striping (very subtle) to guide the eye across wide rows.
- Interactive column headers for sorting/filtering with 12px icons.
- Inline status badges (Signal Green, Safety Orange).

### Buttons & Inputs
- **Primary Action:** Solid Safety Orange with White text.
- **Secondary Action:** Ghost style with Slate-300 borders.
- **Inputs:** Dark backgrounds (`#0F172A`) with 1px borders. Focus states use a 1px solid Safety Orange ring.

### Sidebar Navigation
- A persistent, high-contrast vertical bar. 
- Icons are 20px, stroke-based, with high-contrast active states (Signal Green vertical "active" bar on the left edge).

### Status Badges
- Small, rectangular with 2px radius. 
- Backgrounds use 20% opacity of the status color (Green/Orange/Yellow) with a 100% opacity text color for maximum legibility without overwhelming the data.

### Rail Track Visualizer (Custom Component)
- Horizontal lines representing yard tracks. 
- Trains/Cars represented as condensed blocks with ID labels in `mono-data` typography.