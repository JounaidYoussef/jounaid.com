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
          `Poppins\:100,200,300,400,500,600,700,800,900`,
          `Oxygen\:300,400,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          exclude: /\.back\.svg$/,
        }
      }
    }
  ]
};