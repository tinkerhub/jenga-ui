module.exports = {
    // Run type-check on changes to TypeScript files
    './src/**/*.{ts,tsx}': () => 'npm run type-check',
    // Run ESLint on changes to JavaScript/TypeScript files
    './src/**/*.{ts,tsx,js,jsx}': (filenames) => `npm run lint ${filenames.join(' ')}`,
};
