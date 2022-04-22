module.exports = {
  siteMetadata: {
    title: "Youssef Jounaid",
    description: "This is my awesome blog I made from scratch!",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "favicon",
        start_url: "/",
        display: "standalone",
        icon: "src/assets/jo.svg",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        // eslint-disable-next-line node/no-path-concat
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        // eslint-disable-next-line node/no-path-concat
        // path: `${__dirname}/content/assets`,
        path: "./src/assets",
        name: "assets",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Poppins:100,200,300,400,500,600,700,800,900",
          "Oxygen:300,400,700",
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          exclude: /\.back\.svg$/,
        },
      },
    },
  ],
}
