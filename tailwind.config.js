/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        ],
    theme: {
        extend: {
            colors: {
                brandOrange: "#EF6A34",
                brandGray: "#595A5C"
            },
            fontFamily: {
                'main': ['din', 'sans-serif'],
                'secondary': ['d-din-pro', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
