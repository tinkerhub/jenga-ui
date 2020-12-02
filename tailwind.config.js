module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            dmsans: ['DMSans', 'sans-serif'],
        },
        extend: {
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
