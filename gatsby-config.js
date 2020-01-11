/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Juan Moisés Torrijos',
    siteurl: 'https://moitorrijos.com',
    description: 'Sitio Web de Juan Moisés Torrijos, diseñador y desarrollador web.',
    message: 'Hola, mi nombre es Juan Moisés Torrijos, soy diseñador y desarrollador  de sitios y aplicaciones para la web, en la Ciudad de Panamá 🇵🇦.'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ]
}
