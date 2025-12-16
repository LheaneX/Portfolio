/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb", // Example blue
                secondary: "#1e293b", // Slate 800
                accent: "#3b82f6", // Blue 500
                background: "#f8fafc", // Slate 50
                text: "#0f172a", // Slate 900
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
