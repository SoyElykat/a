module.exports = {
    siteMetadata: {
        title: 'dbd-stats',
        siteUrl: 'https://dbd-stats.net',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/',
            },
            __key: 'images',
        },
        {
            resolve: "gatsby-plugin-no-sourcemaps",
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `DbD-Stats.net`,
                short_name: `DbD-stats`,
                description: `Player Statistics, Skill-Check Simulator and more...`,
                lang: `en`,
                display: `standalone`,
                icon: `src/assets/images/icon.png`,
                start_url: `/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-EMVJRSYTW8", // Google Analytics / GA
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: true,
                cookie_expires: 0,
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: [],
              },
            },
          },
    ],
};
