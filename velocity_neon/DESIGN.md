# Design System Strategy: The Kinetic Pulse

### 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Kinetic Pulse."** 

In the world of social media, AI should feel like a co-creator, not a cold calculator. This system moves away from the rigid, boxy layouts of traditional SaaS and embraces a high-energy, editorial aesthetic. We achieve this through "Intentional Asymmetry"—where elements feel like they are in motion—and a sophisticated layering of frosted surfaces. By utilizing high-contrast typography scales and overlapping components, we create a "viral" energy that feels fast, premium, and human-centric.

### 2. Colors & Surface Philosophy
The palette is built on the tension between the deep, nocturnal depths of `surface` (#060e20) and the high-voltage energy of `primary` (#ba9eff) and `secondary` (#ff67ad).

*   **The "No-Line" Rule:** We do not use 1px solid borders to define sections. Visual boundaries are created exclusively through background tonal shifts. For example, a content area using `surface-container-low` should sit directly against the `surface` background. The eye should perceive change through color value, not a structural line.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. To create depth, nest containers using the tier system:
    *   **Level 0 (Base):** `surface` or `surface-container-lowest`.
    *   **Level 1 (Section):** `surface-container-low` for large content blocks.
    *   **Level 2 (Interactive):** `surface-container-high` for cards or focus areas.
*   **The "Glass & Gradient" Rule:** Floating elements (modals, dropdowns, navigation bars) must utilize Glassmorphism. Use `surface-variant` at 60-80% opacity with a `24px` backdrop blur. 
*   **Signature Textures:** For high-impact CTAs and Hero sections, use a linear gradient (135°) transitioning from `primary` (#ba9eff) to `primary-dim` (#8455ef). This provides the "visual soul" that flat colors lack.

### 3. Typography: Editorial Impact
Our typography strategy balances the "Bold & Friendly" requirement with a high-end editorial feel.

*   **Display & Headlines (Plus Jakarta Sans):** These are our "Hooks." Use `display-lg` and `headline-lg` with tight letter-spacing (-0.02em) to create a sense of urgency and impact. This font’s geometric nature conveys the modern, AI-driven speed of the tool.
*   **Title & Body (Be Vietnam Pro):** This is our "Narrative." It provides a clean, sophisticated contrast to the headlines. `body-lg` should be used for caption previews to ensure the user’s content is the hero. 
*   **Hierarchy as Identity:** Use extreme scale differences. A `display-lg` headline paired with a `label-md` uppercase tag creates an intentional, non-template look that feels like a premium digital magazine.

### 4. Elevation & Depth
In this system, depth is a feeling, not a shadow effect.

*   **The Layering Principle:** Stacking is the primary tool for hierarchy. A `surface-container-highest` card placed on a `surface-container-low` background creates a natural lift.
*   **Ambient Shadows:** If an element must float (like a "Generate" FAB), use an extra-diffused shadow.
    *   *Specs:* Y: 20px, Blur: 40px, Color: `on-background` at 6% opacity.
    *   *Constraint:* Never use pure black or high-opacity shadows.
*   **The "Ghost Border" Fallback:** If accessibility requirements demand a container edge, use the `outline-variant` token at **15% opacity**. This creates a "breath" of a line rather than a hard boundary.
*   **Intentional Overlap:** To break the "template" feel, allow components to break the grid. For example, an image or a "viral" badge should overlap the edge of its parent container by `1rem` to create kinetic energy.

### 5. Components

*   **Buttons:**
    *   **Primary:** Pill-shaped (`full` roundedness). Use the Primary-to-Primary-Dim gradient. Text should be `on-primary` (black for high contrast).
    *   **Secondary:** `surface-container-highest` background with a `secondary` (#ff67ad) "Ghost Border."
*   **Interactive Chips:** Use `secondary-container` for the background and `on-secondary-container` for the text. Use `sm` roundedness (0.5rem) to keep them distinct from the pill-shaped buttons.
*   **Input Fields:** Avoid boxes. Use `surface-container-high` as a solid background with a `DEFAULT` (1rem) corner radius. On focus, transition the background to `surface-bright` and add a subtle `primary` outer glow (4px blur).
*   **Cards:** Forbid divider lines. Use vertical white space from the spacing scale (e.g., `2rem` between header and content) and subtle background shifts (`surface-variant`) to separate the card's footer from its body.
*   **AI Progress Bars:** Use a "moving" gradient effect using `primary` and `secondary`. The container should be `surface-container-lowest` to look like it’s "cut out" of the UI.
*   **Floating Navigation:** A glassmorphic bar positioned at the bottom center of the screen, using `surface-variant` with a 20% opacity and `xl` (3rem) corner radius.

### 6. Do’s and Don’ts

**Do:**
*   **Do** use asymmetrical layouts where content is slightly offset to create a sense of "speed."
*   **Do** use `primary` and `secondary` colors as glows or "auras" behind glass containers.
*   **Do** prioritize `plusJakartaSans` for any text that is meant to feel "viral" or "action-oriented."
*   **Do** use `lg` (2rem) and `xl` (3rem) corner radii for large containers to maintain the "soft" feel.

**Don’t:**
*   **Don’t** use 1px solid borders for sectioning or card definition.
*   **Don’t** use traditional "Drop Shadows" with high opacity or dark colors.
*   **Don’t** use more than three levels of surface nesting; it will muddy the visual clarity.
*   **Don’t** use standard "out-of-the-box" grid gutters. Experiment with wider white space to let the "Electric Pulse" of the colors breathe.