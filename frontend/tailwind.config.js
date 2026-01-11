/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Smooch Sans', 'sans-serif'],
      },
      colors: {
        primary: '#273c75',
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        base: ['1rem', { lineHeight: '1.5rem' }],      // 16px (base)
        lg: ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],// 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
      },
    },
  },
  plugins: [],
}