module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                dmsans: ['DMSans', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#007bff',
                },
                background: {
                    DEFAULT: '#C1EDD9',
                },
                subtext: {
                    DEFAULT: '#696969',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
