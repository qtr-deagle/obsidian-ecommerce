# Typography & Color System Guide

## Global Font Configuration

### Base Font Size
- **Base:** 16px (set on `<html>` element)
- **All sizes use rem units** (relative to 16px base)

### Font Size Scale (All in rem units)
```
- xs:   0.75rem  (12px)
- sm:   0.875rem (14px)
- base: 1rem     (16px) ← Default
- lg:   1.125rem (18px)
- xl:   1.25rem  (20px)
- 2xl:  1.5rem   (24px)
- 3xl:  1.875rem (30px)
- 4xl:  2.25rem  (36px)
```

### Font Size Usage Examples
```jsx
<h1 className="text-4xl">Heading</h1>    {/* 36px */}
<h2 className="text-3xl">Subheading</h2> {/* 30px */}
<p className="text-base">Body text</p>     {/* 16px */}
<small className="text-sm">Small</small>   {/* 14px */}
```

---

## Color System

### Primary Colors
- **Primary:** `#273c75` - Use for buttons, links, highlights
- **Black:** `#000000` - Text, borders, dark elements
- **White:** `#ffffff` - Background, light text on dark

### Gray Scale
```
- gray-50:  #f9fafb   (Lightest)
- gray-100: #f3f4f6
- gray-200: #e5e7eb
- gray-300: #d1d5db   ← Input borders
- gray-400: #9ca3af
- gray-500: #6b7280
- gray-600: #4b5563   ← Secondary text
- gray-700: #374151   ← Primary text
- gray-800: #1f2937
- gray-900: #111827   (Darkest)
```

### Using Colors in Tailwind

#### Button Examples
```jsx
{/* Primary button */}
<button className="bg-primary text-white hover:bg-opacity-90">
  Submit
</button>

{/* Secondary button */}
<button className="bg-white border-2 border-gray-300 text-black hover:bg-gray-50">
  Cancel
</button>
```

#### Text Color Examples
```jsx
<p className="text-black">Primary text</p>
<p className="text-gray-700">Secondary text</p>
<p className="text-gray-600">Tertiary text</p>
<a href="#" className="text-primary hover:underline">Link</a>
```

#### Input Examples
```jsx
<input
  className="border-2 border-gray-300 focus:border-primary text-base"
  placeholder="Enter text"
/>
```

---

## Tailwind Configuration

Located in `tailwind.config.js`, your custom theme includes:

```javascript
colors: {
  primary: '#273c75',
  black: '#000000',
  white: '#ffffff',
  gray: { /* ... complete gray scale ... */ }
}
```

### Custom Font Sizes
All font sizes are defined with proper line heights for optimal readability.

---

## Best Practices

### 1. **Use CSS Variables for Consistency**
Always use the defined color names, never hardcode hex values:
```jsx
// ✅ Good
<button className="bg-primary text-white">

// ❌ Avoid
<button style={{ backgroundColor: '#273c75' }}>
```

### 2. **Font Size Hierarchy**
- `text-4xl` - Page titles, main headings
- `text-3xl` - Section headings
- `text-xl` - Subheadings
- `text-base` - Body text, default size
- `text-sm` - Secondary information
- `text-xs` - Captions, small labels

### 3. **Focus States**
Always add focus states for accessibility:
```jsx
<input className="focus:border-primary focus:outline-none" />
```

### 4. **Hover States**
```jsx
{/* Primary button hover */}
<button className="bg-primary hover:bg-opacity-90">

{/* Text link hover */}
<a className="text-primary hover:underline">
```

### 5. **Responsive Typography**
You can use Tailwind's responsive prefixes:
```jsx
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive Heading
</h1>
```

---

## Scaling Changes

If you need to adjust the base font size globally, simply change the HTML font-size in `index.css`:

```css
html {
  font-size: 18px; /* Changes all rem units proportionally */
}
```

All typography and spacing will scale automatically since everything uses rem units.

---

## Files Modified

- `tailwind.config.js` - Added color and fontSize configuration
- `index.css` - Set base HTML font size to 16px
- All authentication pages - Updated to use primary color and rem-based sizes
- All account management pages - Updated to use primary color and rem-based sizes

---

## Summary

✅ **Global Font Size:** 16px base (all sizes in rem)
✅ **Primary Color:** #273c75 (use `bg-primary` and `text-primary`)
✅ **Black & White:** #000000 and #ffffff
✅ **Gray Scale:** 10 shades for text, borders, backgrounds
✅ **Consistent:** All components now use the system
