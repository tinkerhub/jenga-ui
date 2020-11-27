module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                dmsans: ['DMSans', 'sans-serif'],
            },
            colors: {
                primary: '#007bff',
                background: '#C1EDD9',
                subtext: '#696969',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
