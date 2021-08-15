module.exports = {
    // Target must be serverless
    target: 'serverless',
    async redirects() {
        return [
            {
                source: '/onam',
                destination: 'https://mon.school/code-a-pookkalam',
                permanent: true,
            },
        ];
    },
};
