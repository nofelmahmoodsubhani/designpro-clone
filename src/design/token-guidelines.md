# Design Token Usage Guidelines

## 🎨 Colors
- ✅ Use `var(--color-*)` in CSS and `theme('colors.*')` in Tailwind.
- ❌ Do NOT use raw hex values like `#fff`, `#000`, `#1a1a1a`.

## 📐 Spacing
- ✅ Use spacing tokens: `space.sm`, `space.md`, `space.lg` etc.
- ✅ In Tailwind: use `theme('spacing.4')` or classes like `p-4`, `mt-6`.
- ❌ Avoid arbitrary values like `23px`, `3.5rem`.

## 🧱 Radius
- ✅ Use radius tokens: `radius.sm`, `radius.md`, etc.
- ✅ In Tailwind: use `rounded-[var(--radius-sm)]` or `rounded-md`.
- ❌ Avoid hardcoded border-radius like `5px`.

## ✨ Shadows
- ✅ Use `shadow.*` tokens.
- ✅ In Tailwind: `shadow-[var(--shadow-md)]` or mapped Tailwind classes.
- ❌ Avoid custom shadows unless defined in tokens.

## 🖋 Typography
- ✅ Use `font.*` tokens for size, weight, and family.
- ✅ In Tailwind: use `text-base`, `font-semibold`, etc.
- ❌ Don’t hardcode font-sizes or line-heights.

## 🎞 Motion
- ✅ Use `motion.*` tokens for transitions and easing.
- ❌ Avoid raw `ease-in`, `0.3s` in components.

---

## ✅ General Rules
- Use design tokens through Tailwind config or CSS variables.
- Avoid raw values whenever tokens can cover it.
- Default theme is light — support dark via `[data-theme="dark"]`.

