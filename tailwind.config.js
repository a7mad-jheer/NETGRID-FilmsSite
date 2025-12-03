/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",       // لو تستخدم app folder
        "./pages/**/*.{js,ts,jsx,tsx}",     // لو تستخدم pages folder
        "./components/**/*.{js,ts,jsx,tsx}",// لو تستخدم components
    ],
    theme: {
        extend: {
            colors: {
                'royal-blue': '#4169E1',
                'white-ahmed' : '#FFFFFF',
            },
        },
    },
    plugins: [],
}
