module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#007bff',
                },
                background: {
                    DEFAULT: '#C1EDD9',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
