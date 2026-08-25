---
name: Miku Campaign Desk
colors:
  canvas: '#f4f5f3'
  sidebar: '#eceeec'
  surface: '#ffffff'
  mint: '#66d5c2'
  mint-strong: '#35b7a6'
  mint-soft: '#e4f7f2'
  mint-wash: '#e7f8f2'
  peach-wash: '#fff0e3'
  blue-wash: '#eaf2fa'
  orange: '#f49337'
  ink: '#17211f'
  ink-soft: '#53605b'
  muted: '#84908c'
  line: '#dfe4e1'
  line-soft: '#e1e7e4'
  shadow-ink: '#2f443d'
  focus: '#35b7a6'
typography:
  display:
    fontFamily: 'PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 42px
    fontWeight: '800'
    lineHeight: 1.05
    letterSpacing: -0.065em
  headline:
    fontFamily: 'PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 1.35
  body:
    fontFamily: 'PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 1.6
  label:
    fontFamily: 'PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 1.4
  micro:
    fontFamily: 'PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 1.4
rounded:
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 22px
  full: 9999px
spacing:
  unit: 4px
  sidebar: 248px
  gutter: 24px
  main-max: 940px
---

## Brand & Style

Miku Campaign Desk is a calm, useful studio desk for turning incomplete marketing thoughts into structured work. Its visual grammar borrows the clarity of a creative workspace, not the identity of another product: a fixed workbench rail, a single command surface, quick task strips, and a compact starter shelf.

The product should feel warm enough for creative work and precise enough for execution. Miku's cow-cat is the host of the workspace, while mint is the product action color and orange is reserved for account or plan actions.

## Visual Direction

- Desktop app shell with a quiet gray-green canvas and a fixed pale sidebar.
- One primary hero surface explains the product promise and exposes the four most important capabilities.
- One large white command surface is the main action, with a thin connection strip instead of decorative chrome.
- Quick tasks are horizontal and low-friction. Starter cards are secondary and textual, so the user understands the task before opening it.
- Miora is a structural reference only. Do not reuse its logo, mascot, copy, screenshots, or content.

## Color & Elevation

Use `canvas` for the app background, `sidebar` for the navigation rail, and `surface` for work surfaces. Use `mint-strong` for selected states, links, AI action affordances, and success feedback. Use `orange` only for plan or upgrade actions. Elevation is soft and neutral, with a visible vertical offset; avoid colored halos and heavy glass effects.

## Typography

Use the system Chinese sans stack so Chinese text stays reliable on the local preview and on Windows. The display title is the strongest level, body copy stays short, and small labels are reserved for context and status. Do not introduce a monospace typeface as decoration.

## Interaction & States

- Hero capability tabs change the prompt guidance and selected state.
- Quick tasks, project rows, and starter cards insert a concrete task into the composer.
- Composer controls report their current prototype state through the live status region.
- The send action validates empty input and then reports a task draft state.
- Every interactive control has a visible focus treatment and works at narrow widths.

## Responsive Behavior

At 820px the navigation compresses to an icon rail and the starter shelf becomes one column. At 620px the rail becomes a compact top bar, quick tasks become a horizontal scroll row, and the hero art moves below the text. The page must not create horizontal document overflow.
