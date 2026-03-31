# Design System Strategy: The Curated Vitality

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Sanctuary."** In the context of German Women’s Health, we must bridge the gap between clinical precision (Medical Reliability) and restorative calm (Modern Wellness). 

This system moves beyond the "grid-and-border" template of standard health apps. We utilize **Intentional Asymmetry** and **Editorial Layering** to create an experience that feels like a premium lifestyle publication rather than a medical database. By breaking the rigid alignment of traditional dashboards with overlapping elements and expansive white space, we signal a high-end, bespoke service.

## 2. Colors & Surface Philosophy
The palette is rooted in organic, skin-toned neutrals and soft botanical hues. We use color not just for decoration, but as a structural tool to define space without harsh lines.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders (`#outline`) for sectioning or containment. Boundaries must be defined solely through:
- **Background Color Shifts:** A `surface-container-low` section sitting on a `background` (`#fbf9f4`).
- **Tonal Transitions:** Using the `surface-container` tiers to create logical groupings.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like fine vellum paper or frosted glass. 
- **Base Layer:** `surface` (#fbf9f4)
- **Primary Content Areas:** `surface-container-low` (#f5f4ee)
- **Interactive Cards/Elements:** `surface-container-lowest` (#ffffff) for maximum "lift" and clarity.
- **Deep Content/Modals:** `surface-container-high` (#e9e8e1) to create a sense of recessed focus.

### Glass & Gradient Rule
To achieve a "signature" feel, floating navigation bars and high-priority modals must use **Glassmorphism**. Apply a semi-transparent `surface` color (80% opacity) with a `20px` backdrop-blur. 
- **Signature Textures:** For Hero sections or Primary CTAs, use a subtle linear gradient (135°) transitioning from `primary` (#6f5b53) to `primary-container` (#f8ddd2) to add "soul" and depth.

## 3. Typography: Editorial Authority
We pair the intellectual weight of a Serif with the functional clarity of a geometric Sans-Serif.

*   **Display & Headlines (`notoSerif`):** Used for storytelling, affirmations, and section titles. The serif represents the "Human" and "Expert" side of the startup. Use `headline-lg` for impactful, high-contrast moments.
*   **Body & Labels (`manrope`):** Used for clinical data, instructions, and navigation. This represents "Precision" and "Modernity."
*   **Hierarchy Note:** Always maintain a significant scale jump between `headline-md` and `body-lg` to ensure an editorial, high-end feel.

## 4. Elevation & Depth
In this system, depth is organic, not artificial.

*   **The Layering Principle:** Stack surface tiers to create hierarchy. A `surface-container-lowest` card placed on a `surface-container-low` background creates a soft, natural lift.
*   **Ambient Shadows:** If a floating effect is required (e.g., a Bottom Sheet or Floating Action Button), use a shadow with a `32px` blur and `4%` opacity. The shadow color must be derived from `on-surface` (#31332e), never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke (e.g., in a high-contrast mode), use `outline-variant` (#b2b2ab) at `15%` opacity. **Strictly forbid 100% opaque borders.**

## 5. Components & Primitives

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_dim`) with `on_primary` text. `xl` roundedness (0.75rem).
- **Secondary:** `secondary_container` fill with `on_secondary_container` text. No border.
- **Tertiary:** Text-only in `primary` with a subtle `3px` underline in `primary_fixed_dim`.

### Cards & Lists
- **Rule:** Forbid divider lines.
- **Implementation:** Separate list items using `spacing.4` (1.4rem) of vertical whitespace. For cards, use background shifts (`surface-container-low`) rather than shadows to denote boundaries.
- **Shape:** All cards must use `xl` (0.75rem) or `full` (9999px) corner radius for a soft, approachable feel.

### Input Fields
- **Style:** Background fill of `surface_container_highest` with no border. On focus, transition the background to `surface_container_lowest` and add a `2px` "Ghost Border" of `primary` at 20% opacity.
- **Typography:** Labels use `label-md` in `on_surface_variant`.

### Health-Specific Components
- **The "Vitality Ring":** Use `tertiary` (#655b6f) and `secondary` (#566350) for data visualization. Rings should have rounded caps and soft, inner-glow gradients to avoid a "flat" clinical look.
- **Contextual Tips:** Use the `secondary_container` (#e8f5dd) with `on_secondary_container` (#515e4c) for medical advice boxes to signal safety and growth.

## 6. Do’s and Don’ts

### Do
- **Do** use asymmetrical spacing (e.g., more padding on the top than the bottom) to create a premium, rhythmic feel.
- **Do** use `notoSerif` for numbers in data displays to make "stats" feel like "health stories."
- **Do** lean into the "Lavender" (`tertiary`) and "Sage" (`secondary`) tones for cycle tracking or mental health features.

### Don't
- **Don't** use standard "Error Red" for delicate health alerts. Use `error` (#aa371c) but soften the impact by housing it within an `error_container` with a high blur.
- **Don't** use icons with sharp 90-degree angles; all iconography should have a `2px` corner radius or rounded terminals.
- **Don't** crowd the screen. If a screen feels "busy," increase the spacing token by two increments (e.g., from `10` to `16`).