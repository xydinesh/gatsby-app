module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms', 
      options: {
        endpoint: 'https://api-eu-central-1.graphcms.com/v2/ckila7b714xgl01xy318t9n09/master' 
      }
    },
  ],
}
