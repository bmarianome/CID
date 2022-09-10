/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        ],
    theme: {
        extend: {
            fontFamily: {
                'din': ['din', 'sans-serif', 'ui-sans-serif', 'system-ui'],
                'din-pro': ['din-pro', 'sans-serif', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                brandOrange: "#EF6A34",
                brandGray: "#595A5C"
            },
            lineHeight: {
                'none': '0',
            },
            backgroundImage: {
                "white-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 90%, #FFFFFF 100%)",
                "white-gradient-desktop": "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 64.06%, #FFFFFF 100%)",
                "white-gradient-desktop-inverted": "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 64.06%, #FFFFFF 100%)",
                "white-gradient-desktop-2": "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 95%, #FFFFFF 100%)",
                "white-gradient-desktop-2-inverted": "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 95%, #FFFFFF 100%)",
            }
        },
    },
    plugins: [],
}
