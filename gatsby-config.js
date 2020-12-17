/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Juan Moisés Torrijos",
    siteurl: "https://moitorrijos.com",
    siteUrl: "https://moitorrijos.com",
    description:
      "Sitio Web de Juan Moisés Torrijos, diseñador y desarrollador web.",
    message:
      "Hola, mi nombre es Juan Moisés Torrijos, soy diseñador y desarrollador  de sitios y aplicaciones para la web, en la Ciudad de Panamá 🇵🇦.",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://moitorrijos.com',
        sitemap: 'https://moitorrijos.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Bebas Neue', 'Raleway:wght@300;400;500']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "slider",
        path: `${__dirname}/src/assets/slider`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 685,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/about-layout.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 685,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '2',
        matomoUrl: 'https://trax.servidoresrapidos.net/',
        siteUrl: 'https://moitorrijos.com',
        cookieDomain: '*.moitorrijos.com'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MoiTorrijos',
        short_name: 'Moi',
        start_url: '/',
        background_color: '#1B33B3',
        theme_color: '#D00000',
        icon: 'src/assets/icon.png',
        display: `standalone`,
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165424620-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "moitorrijos.com",
      },
    }
  ],
}
