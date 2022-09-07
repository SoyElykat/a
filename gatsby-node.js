const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html' || stage === 'develop-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /apexcharts/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};

exports.createPages = async ({ actions }) => {
    const { createPage } = actions;

    createPage({
        path: '/profile/',
        matchPath: '/profile/*',
        component: path.resolve('./src/pages/index.js'),
    });

    createPage({
        path: '/compare/',
        matchPath: '/compare/*',
        component: path.resolve('./src/pages/index.js'),
    });
};
