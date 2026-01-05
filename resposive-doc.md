# Responsive Design & Layout Guidelines

## 1. Core Responsive Rules

1. **Mobile-First Approach**
   Design for small screens first, then scale up for tablets and desktops.

2. **Use Relative Units**
   Prefer `%`, `vh`, `vw`, and `rem` over fixed `px` values for flexibility.

3. **Minimal Breakpoints**
   Stick to essential breakpoints only:

   * Phone: 320px to 600px
   * Tablet: 600px to 1024px
   * Desktop: 1024px to 1440px

4. **Use Flexbox or CSS Grid**
   Enables automatic alignment and prevents messy or broken layouts.

5. **Consistent Spacing**
   Maintain uniform padding and margins to ensure smooth visual transitions.

6. **Cross-Device Testing**
   Test layouts on multiple screen sizes and adjust breakpoints as needed.

7. **Clear Visual Hierarchy**
   Order content intentionally:
   **Hero → CTA → Products → Story → Footer**

---

## 2. First Impression (Landing Page Structure)

### Hero Section

* Full-screen height (`100vh`)
* Clear headline and supporting tagline
* Primary Call-to-Action (CTA)
* Immersive background (image, video, or gradient)

### Navigation Bar

* Sticky positioning
* Minimal design
* Includes:

  * Home
  * Shop
  * Categories
  * About
  * Contact
  * Search
  * Cart

### Trust Signals

* Small icon indicators for:

  * Free shipping
  * Secure checkout
  * Eco-friendly / sustainability

### Featured Products

* Display 3–6 bestsellers or new arrivals
* Hover effects for interaction feedback

### Brand Story

* Short narrative explaining the brand
* Lifestyle or contextual imagery

### Micro-Interactions

* Smooth transitions
* Hover and focus states
* Subtle animations (avoid overuse)

### Quick Access Elements

* Floating chat/help button or wishlist icon

---

## 3. Scrollable Layout Principles

* Websites scroll naturally when content exceeds viewport height
* Hero sections should be **exactly `100vh`**, not taller
* Add a scroll indicator (arrow or “Scroll to explore” text)
* Stack sections logically:
  **Hero → Products → Story → Testimonials → Footer**
* Use consistent padding and margins between sections

---

## 4. `100vh` vs `100%`

### `100vh`

* Represents 100% of the viewport height
* Best for:

  * Hero sections
  * Splash or landing pages

### `100%`

* Relative to the parent element’s height
* Only works when the parent has an explicitly defined height

**Rule of Thumb**

* Use `100vh` for fullscreen layouts
* Use `100%` for nested or child containers

---

## 5. Responsive Design Logic

### Mobile-First Strategy

* Start with a mobile layout
* Expand features and spacing for larger screens

### Fluid Layouts

* Avoid fixed widths
* Use `%`, `vh`, `vw`, and `rem`

### Breakpoints

```css
@media (max-width: 768px) {
  /* Tablet */
}

@media (max-width: 480px) {
  /* Mobile */
}
```

### Flexible Layout Systems

* Use **Flexbox** or **Grid** for product listings and layouts

### Typography

* Use `rem` for scalable, accessible text sizing

### Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Navigation

* Desktop: full navigation bar
* Mobile: hamburger menu

### Content Priority (Mobile)

* Hero
* CTA
* Products

---

## 6. CSS Units Reference

| Unit  | Description        | Best Use Case         |
| ----- | ------------------ | --------------------- |
| `%`   | Relative to parent | Layout widths/heights |
| `vh`  | Viewport height    | Fullscreen sections   |
| `vw`  | Viewport width     | Fluid layouts         |
| `rem` | Root font size     | Typography & spacing  |

---

## 7. Product Grid Example (CSS Grid)

```css
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Mobile: 2 items per row */
  gap: 1rem;
}

@media (min-width: 768px) {
  .products {
    grid-template-columns: repeat(4, 1fr); /* Desktop: 4 items per row */
  }
}
```

**Benefits**

* Automatic alignment
* No floating elements
* Consistent spacing using `gap`

---

## 8. Hero → Product Section Connection

### HTML Structure

```html
<section class="hero">
  <h1>Welcome to Obsidian</h1>
  <p>Elevating your shopping experience</p>
  <a href="#products" class="scroll-down">↓</a>
</section>

<section id="products" class="products">
  <div class="product">Product 1</div>
  <div class="product">Product 2</div>
</section>
```

### CSS Styling

```css
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2rem;
}
```

**Result**

* Hero fills the viewport
* Single scroll reveals products cleanly
* Padding creates visual continuity between sections
* Grid expands naturally on larger screens

---

If you want, I can:

* Convert this into **Markdown optimized for VS Code**
* Turn it into a **personal front-end checklist**
* Adapt it specifically for **Laravel + Blade + Tailwind** (since you’re using those)
