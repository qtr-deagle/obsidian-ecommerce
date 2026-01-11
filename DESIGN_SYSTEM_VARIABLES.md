# Design System Variables - Complete Reference

This document defines all design tokens and variables used across the application. Follow these standards for consistency.

---

## 📐 TYPE SCALE

### Heading Sizes
| Variable | Size | Use Case |
|----------|------|----------|
| `--heading-h1` | 36px | Main page titles |
| `--heading-h2` | 30px | Section titles |
| `--heading-h3` | 24px | Subsection titles |
| `--heading-subheading` | 18px | Secondary headings |
| `--heading-paragraph` | 16px | Body text |
| `--heading-small-text` | 14px | Small text, labels |

### Text Sizes
```css
--text-xs: 0.75rem;    /* 12px - Captions */
--text-sm: 0.875rem;   /* 14px - Small labels */
--text-base: 1rem;     /* 16px - Default body text */
--text-lg: 1.125rem;   /* 18px - Large body */
--text-xl: 1.25rem;    /* 20px - Large heading */
--text-2xl: 1.5rem;    /* 24px - Heading */
--text-3xl: 1.875rem;  /* 30px - Large heading */
--text-4xl: 2.25rem;   /* 36px - Largest heading */
```

### Font Weights
```css
--font-weight-normal: 400;       /* Regular text */
--font-weight-medium: 500;       /* Slightly bold */
--font-weight-semibold: 600;     /* Bold labels */
--font-weight-bold: 700;         /* Headings */
```

### Example Usage
```jsx
<h1 style={{ 
  fontSize: 'var(--heading-h1)',
  fontWeight: 'var(--font-weight-bold)'
}}>
  Main Title
</h1>

<p style={{
  fontSize: 'var(--heading-paragraph)',
  fontWeight: 'var(--font-weight-normal)'
}}>
  Body text
</p>
```

---

## 🎨 COLORS

### Primary Colors
| Variable | Value | Use Case |
|----------|-------|----------|
| `--color-primary` | #273c75 | **Buttons, Links, Accents** |
| `--color-secondary` | #000000 | Black text |
| `--color-tertiary` | #ffffff | White backgrounds |

### Neutral Colors
| Variable | Value | Use Case |
|----------|-------|----------|
| `--color-black` | #000000 | Main text, primary elements |
| `--color-white` | #ffffff | Backgrounds, text on dark |

### Gray Scale (10 shades)
| Variable | Value | Use Case |
|----------|-------|----------|
| `--color-gray-50` | #f9fafb | Lightest background |
| `--color-gray-100` | #f3f4f6 | Light background |
| `--color-gray-200` | #e5e7eb | Light borders |
| `--color-gray-300` | #d1d5db | Input borders |
| `--color-gray-400` | #9ca3af | Disabled text |
| `--color-gray-500` | #6b7280 | Tertiary text |
| `--color-gray-600` | #4b5563 | Secondary text |
| `--color-gray-700` | #374151 | Primary text |
| `--color-gray-800` | #1f2937 | Dark text |
| `--color-gray-900` | #111827 | Darkest text |

### Semantic Colors
```css
--color-success: #10b981;   /* Green - Success messages */
--color-warning: #f59e0b;   /* Orange - Warnings */
--color-error: #ef4444;     /* Red - Errors */
--color-info: #3b82f6;      /* Blue - Information */
```

### Example Usage
```jsx
// Primary text
<p style={{ color: 'var(--color-black)' }}>Primary text</p>

// Secondary text
<p style={{ color: 'var(--color-gray-600)' }}>Secondary text</p>

// Link
<a style={{ color: 'var(--color-primary)' }}>Link</a>

// Success message
<p style={{ color: 'var(--color-success)' }}>Success!</p>
```

---

## 🔘 BUTTONS & LINKS

### Primary Button (Dark Blue #273c75)
```css
background: var(--btn-primary-bg);        /* #273c75 */
color: var(--btn-primary-text);           /* White */
border-radius: var(--button-border-radius); /* Full rounded */
padding: var(--spacing-md) var(--spacing-lg);
font-weight: var(--font-weight-semibold);
height: var(--button-height-md);          /* 48px */
```

**Tailwind Class:** `bg-primary text-white font-semibold py-4 px-6 rounded-full hover:bg-opacity-90`

### Secondary Button (Black Outlined)
```css
background: var(--btn-secondary-bg);      /* Transparent */
border: var(--border-width-md) solid var(--btn-secondary-border); /* 2px black */
color: var(--btn-secondary-text);         /* Black */
border-radius: var(--button-border-radius);
padding: var(--spacing-md) var(--spacing-lg);
font-weight: var(--font-weight-semibold);
height: var(--button-height-md);
```

**Tailwind Class:** `border-2 border-black text-black font-semibold py-4 px-6 rounded-full hover:bg-black hover:text-white`

### Tertiary Button (Link Style)
```css
background: transparent;
color: var(--btn-tertiary-text);          /* #273c75 */
border: none;
text-decoration: underline;
font-weight: var(--font-weight-semibold);
```

**Tailwind Class:** `text-primary hover:text-black underline font-semibold`

### Example Usage
```jsx
{/* Primary Button */}
<button style={{
  backgroundColor: 'var(--btn-primary-bg)',
  color: 'var(--btn-primary-text)',
  borderRadius: 'var(--button-border-radius)',
  height: 'var(--button-height-md)',
  padding: `var(--spacing-md) var(--spacing-lg)`,
  fontWeight: 'var(--font-weight-semibold)'
}}>
  Click me
</button>

{/* Tertiary Link */}
<a style={{
  color: 'var(--btn-tertiary-text)',
  textDecoration: 'underline',
  fontWeight: 'var(--font-weight-semibold)'
}}>
  Click here
</a>
```

---

## 📦 SPACING

### Spacing Scale
| Variable | Value | Size |
|----------|-------|------|
| `--spacing-xs` | 0.25rem | 4px |
| `--spacing-sm` | 0.5rem | 8px |
| `--spacing-md` | 1rem | 16px |
| `--spacing-lg` | 1.5rem | 24px |
| `--spacing-xl` | 2rem | 32px |
| `--spacing-2xl` | 2.5rem | 40px |
| `--spacing-3xl` | 3rem | 48px |
| `--spacing-4xl` | 4rem | 64px |

### Example Usage
```jsx
<div style={{
  paddingLeft: 'var(--spacing-lg)',    /* 24px */
  marginBottom: 'var(--spacing-md)',   /* 16px */
  gap: 'var(--spacing-xl)'             /* 32px */
}}>
  Content
</div>
```

**Tailwind Classes:**
```jsx
p-4      // padding: var(--spacing-md)
m-6      // margin: var(--spacing-lg)
space-y-6 // gap vertical: var(--spacing-lg)
```

---

## 🎯 BORDERS

### Border Widths
```css
--border-width-sm: 1px;   /* Subtle borders */
--border-width-md: 2px;   /* Standard (inputs, buttons) */
--border-width-lg: 3px;   /* Prominent */
```

### Border Radius
| Variable | Value | Use Case |
|----------|-------|----------|
| `--border-radius-sm` | 6px | Small components |
| `--border-radius-md` | 8px | Standard elements |
| `--border-radius-lg` | 16px | Cards, containers |
| `--border-radius-full` | 9999px | Buttons, pills |

### Example Usage
```jsx
<input style={{
  border: `var(--border-width-md) solid var(--input-border)`,
  borderRadius: 'var(--border-radius-lg)',
  padding: 'var(--spacing-md) var(--spacing-lg)'
}}
/>
```

---

## 💫 SHADOWS

### Shadow Levels
| Variable | Use Case |
|----------|----------|
| `--shadow-sm` | Subtle depth |
| `--shadow-md` | Standard cards |
| `--shadow-lg` | Prominent cards |
| `--shadow-xl` | Modal overlays |

### Example Usage
```jsx
<div style={{
  boxShadow: 'var(--shadow-md)',
  borderRadius: 'var(--border-radius-lg)',
  padding: 'var(--spacing-lg)'
}}>
  Card with shadow
</div>
```

---

## ⏱️ TRANSITIONS

### Timing Variables
```css
--transition-fast: 150ms;   /* Quick animations */
--transition-base: 250ms;   /* Standard animations */
--transition-slow: 350ms;   /* Slow animations */
--timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

### Example Usage
```jsx
<button style={{
  transition: `background-color var(--transition-base) var(--timing-function)`,
  backgroundColor: 'var(--btn-primary-bg)'
}}>
  Hover me
</button>
```

---

## 🎨 INPUT FIELDS

### Input Styles
```css
--input-border: var(--color-gray-300);    /* Default border */
--input-focus-border: var(--color-primary); /* #273c75 */
--input-text: var(--color-black);
--input-placeholder: var(--color-gray-400);
--input-bg: var(--color-white);
```

### Example Usage
```jsx
<input
  style={{
    border: `var(--border-width-md) solid var(--input-border)`,
    borderRadius: 'var(--border-radius-lg)',
    padding: `var(--spacing-md) var(--spacing-lg)`,
    color: 'var(--input-text)',
    backgroundColor: 'var(--input-bg)'
  }}
  onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
  onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-300)'}
  placeholder="Enter text"
/>
```

---

## 📱 RESPONSIVE LAYOUT

### Container Sizes
```jsx
// Max width containers
max-w-xs   // 20rem (320px)
max-w-sm   // 24rem (384px)
max-w-md   // 28rem (448px)
max-w-lg   // 32rem (512px)
max-w-xl   // 36rem (576px)
max-w-2xl  // 42rem (672px)
```

---

✅ **QUICK CHECKLIST**

- [ ] Using `--color-primary` (#273c75) for buttons
- [ ] Using black and white only for main website colors
- [ ] Using gray scale for text hierarchy (gray-700 for main, gray-600 for secondary)
- [ ] Using `--spacing-*` variables for all margins and padding
- [ ] Using `--border-radius-full` for buttons
- [ ] Using `--transition-base` for smooth animations
- [ ] Using `--border-width-md` for input borders
- [ ] Following heading size hierarchy (H1 > H2 > H3 > Subheading)
- [ ] Secondary buttons have black borders and text

---

## 🔗 Files to Update

All these variables are defined in: `frontend/src/design-system.css`

Import in any component or update Tailwind config to use them globally.

