/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',
                secondary: '#1e293b',
                accent: '#3b82f6',
                surface: '#f8fafc',
                text: '#0f172a',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
            },
        },
    },
    plugins: [],
};
