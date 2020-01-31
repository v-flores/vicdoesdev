/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "VictorDoes.Dev - %s ",
    description:
      "This is the official website of the Chicago based Web Developer Victor Flores .",
    url: "https://www.victordoes.dev", // No trailing slash allowed!
    image: "/uploads/laptop.jpg", // Path to your image you placed in the 'static' folder
  },
  pathPrefix: '/gatsby-cv-site',
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      }
    },
 {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
    
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `portfolio`,
      path: path.join(__dirname, `src`, `portfolio`),
    },
    
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: path.join(__dirname, `src`, `posts`),
    },
    
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [ `gatsby-remark-images` ],
      plugins: [ `gatsby-remark-images` ],
    }
  },
  {
    resolve: "gatsby-remark-external-links",
    options: {
      target: "_self",
      rel: "nofollow"
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/`
    }
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-relative-images',
        `gatsby-remark-copy-linked-files`,
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 750,
            linkImagesToOriginal: false
          }
        },
        {
          resolve: `gatsby-remark-copy-linked-files`,
          options: {
            destinationDir: `path/to/dir`,
            ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
          }
        }
      ]
    }
},
    'gatsby-plugin-sass',
     `gatsby-transformer-sharp`, 
     `gatsby-plugin-sharp`,
     `gatsby-plugin-mdx`]
}
