module.exports = {
  siteMetadata: {
      title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./public/static/images"
    },
    __key: "images"
  },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oxygen\:300,400,700`,
          `Red Rose`,
          `Lato\:300,400,700`,
        ],
        display: 'swap'
      }
    }
  ]
};