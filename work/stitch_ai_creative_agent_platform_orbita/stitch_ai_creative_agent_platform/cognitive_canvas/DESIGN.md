---
name: Cognitive Canvas
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#464555'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#595f67'
  on-secondary: '#ffffff'
  secondary-container: '#dee3ed'
  on-secondary-container: '#5f656d'
  tertiary: '#3130c0'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b4dd8'
  on-tertiary-container: '#d9d8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#dee3ed'
  secondary-fixed-dim: '#c1c7d0'
  on-secondary-fixed: '#161c23'
  on-secondary-fixed-variant: '#41474f'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  sidebar-width: 260px
  unit: 8px
---

## Brand & Style

The design system is engineered for a high-performance AI Agent platform that balances technical sophistication with approachable productivity. Drawing from the visual cues in the reference images, the style is a blend of **Corporate Modern** and **Minimalism**, prioritizing clarity and content-first layouts.

The brand personality is intelligent, efficient, and visionary. It aims to evoke a sense of "organized intelligence" where the UI stays out of the way of the user's creative flow. By using expansive white space, a refined cool-toned palette, and soft geometry, the system provides a calm environment for complex AI-driven tasks.

## Colors

The palette is anchored by a high-ratio of white and neutral grays to maintain a "clean lab" aesthetic.

- **Primary Blue (#4F46E5):** Used for primary actions, progress indicators, and active states. It signals intelligence and reliability.
- **Surface Neutrals:** A range of grays from `#F9FAFB` (background) to `#E5E7EB` (borders) creates a subtle hierarchy without visual noise.
- **Accents:** A softer Indigo-wash (`#F0F5FF`) is used for large-area backgrounds like selected sidebar items or the chat input container, as seen in the reference images.
- **Success/Warning:** Standard semantic colors should be desaturated to fit the professional SaaS aesthetic.

## Typography

The typography system utilizes **Inter** for its exceptional legibility in data-dense interfaces and its neutral, modern tone.

- **Hierarchy:** Use bold weights (600-700) for page titles and section headers to provide clear entry points.
- **Body Text:** Standard reading text should use the Medium size (16px) with ample line height (1.5x) to prevent fatigue during long AI interactions.
- **Labels:** Small, all-caps labels with slight letter spacing are used for category tags and metadata to differentiate them from actionable text.
- **Contrast:** High contrast is maintained between headings (Near Black) and secondary text (Slate Gray) to ensure a clear information architecture.

## Layout & Spacing

This design system uses a **Fluid Grid** for the main content areas, supplemented by a fixed-width sidebar for navigation.

- **Split-Screen Canvas:** For the agent execution view, use a 40/60 split-pane. The left pane handles chat/input, while the right "canvas" handles output and visualization.
- **Grid System:** A 12-column grid is used for template galleries, with cards typically spanning 3 columns on desktop and 6 on tablet.
- **Rhythm:** An 8px linear scale governs all padding and margins. Use `24px` (3 units) as the default gutter between cards and `32px` (4 units) for major section spacing.
- **Responsive Behavior:** On mobile, sidebars collapse into a drawer, and the split-screen view stacks vertically to prioritize the output canvas.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Ambient Shadows** to create a structured but soft environment.

- **Surface Levels:** The primary background is the lowest level (#F9FAFB). Cards and the main workspace sit on Level 1 (Pure White) with a very soft, diffused shadow.
- **Shadow Profile:** Use a "Natural Ambient" shadow: `0px 4px 20px rgba(0, 0, 0, 0.03)`. It should be barely perceptible, serving only to separate the element from the background.
- **Active States:** Elements being dragged or hovered should see a slight increase in shadow spread and a subtle lift.
- **Outlines:** Use 1px borders in `#E5E7EB` instead of shadows for secondary UI elements like input fields and inactive chips to keep the interface "flat" and professional.

## Shapes

The shape language is defined by a "Large Radius" philosophy, giving the platform a modern, friendly SaaS feel.

- **Cards & Primary Containers:** Use a `16px` (rounded-lg equivalent) corner radius. This provides a soft frame for AI-generated content.
- **Buttons & Inputs:** Follow a `8px` (rounded-md equivalent) radius to maintain a professional look while remaining consistent with the overall softness.
- **Chips & Tags:** These should be fully pill-shaped to distinguish them from actionable buttons.
- **Interactive Elements:** Ensure focus states follow the parent container's radius precisely with a 2px offset.

## Components

### Buttons
- **Primary:** Solid `#4F46E5` with white text. High-contrast, 8px radius.
- **Secondary:** Light blue wash (`#F0F5FF`) with primary blue text. No border.
- **Ghost:** No background, subtle gray border on hover.

### Side Navigation
- Fixed 260px width.
- Uses a "Vibrant Selection" state: active items get a soft blue background and a 4px vertical pill indicator on the left edge.
- Icons should be linear, 20px, with a 2px stroke width.

### Template Cards
- White background, 16px radius, subtle ambient shadow.
- Top section for a thumbnail/preview, bottom section for title and metadata.
- Hover state: 1px primary-colored border.

### Search Bar
- Top-mounted, wide-format.
- Light gray background (`#F3F4F6`) with a "Search" icon on the left.
- Expands slightly on focus with a primary blue glow.

### Chat & Canvas
- Chat input uses a "Floating Pill" or "Inset Box" style (as seen in Image 6) with tools pinned to the bottom (Upload, Model Selection).
- Progress indicators for tasks should be linear, placed at the top of the chat message or as a sidebar status widget.

### Inputs & Selects
- 1px border, 8px radius.
- Use Inter Medium for input text to ensure clarity.
- Active states use a primary blue border and 2px focus ring.
