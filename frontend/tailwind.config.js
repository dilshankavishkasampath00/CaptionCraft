/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'on-primary': 'var(--color-on-primary)',
        'primary-container': 'var(--color-primary-container)',
        'on-primary-container': 'var(--color-on-primary-container)',
        'secondary': 'var(--color-secondary)',
        'on-secondary': 'var(--color-on-secondary)',
        'secondary-container': 'var(--color-secondary-container)',
        'on-secondary-container': 'var(--color-on-secondary-container)',
        'surface': 'var(--color-surface)',
        'surface-container': 'var(--color-surface-container)',
        'surface-container-high': 'var(--color-surface-container-high)',
        'surface-container-low': 'var(--color-surface-container-low)',
        'surface-bright': 'var(--color-surface-bright)',
        'on-surface': 'var(--color-on-surface)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        'surface-variant': 'var(--color-surface-variant)',
        'outline': 'var(--color-outline)',
        'outline-variant': 'var(--color-outline-variant)',
        'error': 'var(--color-error)',
      },
      fontFamily: {
        headline: ['var(--font-headline, sans-serif)', 'sans-serif'],
        body: ['var(--font-body, sans-serif)', 'sans-serif'],
        label: ['var(--font-label, sans-serif)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
