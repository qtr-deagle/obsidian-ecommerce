# Quick Reference - Common Tailwind Classes

## Typography
```jsx
text-xs    // 12px
text-sm    // 14px
text-base  // 16px (default)
text-lg    // 18px
text-xl    // 20px
text-2xl   // 24px
text-3xl   // 30px
text-4xl   // 36px

font-bold
font-semibold
font-medium
font-normal
```

## Colors - Text
```jsx
text-black
text-white
text-primary
text-gray-600  // Secondary text
text-gray-700  // Main text
text-red-500   // Error messages
```

## Colors - Background
```jsx
bg-primary           // #273c75
bg-black
bg-white
bg-gray-50
bg-gray-100
bg-gray-300
```

## Buttons

### Primary Button
```jsx
<button className="bg-primary text-white font-semibold py-4 rounded-full hover:bg-opacity-90 disabled:opacity-50 transition">
  Click me
</button>
```

### Secondary Button
```jsx
<button className="bg-white border-2 border-gray-300 text-black font-semibold py-4 rounded-full hover:bg-gray-50 transition">
  Click me
</button>
```

## Inputs
```jsx
<input
  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
  placeholder="Enter text"
/>
```

## Links
```jsx
<a href="#" className="text-primary hover:underline">
  Click here
</a>
```

## Spacing

### Margin
```jsx
mb-2   // margin-bottom: 0.5rem
mb-4   // margin-bottom: 1rem
mb-6   // margin-bottom: 1.5rem
mb-8   // margin-bottom: 2rem
mt-6   // margin-top: 1.5rem
```

### Padding
```jsx
px-4   // padding-left & right: 1rem
py-4   // padding-top & bottom: 1rem
p-6    // all sides: 1.5rem
```

## Layout
```jsx
flex
flex-1
gap-4        // space between flex items
justify-center
items-center
space-y-6    // vertical spacing between children
```

## Borders
```jsx
border-2 border-gray-300
rounded-lg
rounded-full
```

## Hover & Focus States
```jsx
hover:bg-opacity-90
hover:underline
focus:outline-none
focus:border-primary
disabled:opacity-50
disabled:cursor-not-allowed
```

## Common Patterns

### Full Width Input
```jsx
className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary"
```

### Full Width Button
```jsx
className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-opacity-90 transition"
```

### Heading
```jsx
className="text-4xl font-bold text-black mb-2"
```

### Subheading
```jsx
className="text-base text-gray-600"
```

### Section Container
```jsx
className="max-w-md mx-auto"
```

### Form Group
```jsx
className="space-y-6"
```

---

## Color Hex Values

| Name | Hex |
|------|-----|
| Primary | #273c75 |
| Black | #000000 |
| White | #ffffff |
| Gray 600 | #4b5563 |
| Gray 700 | #374151 |
