import React, { useContext } from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/portfoliocards.css"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const PortfolioCards = props => {
  const state = useContext(GlobalStateContext) || {
    theme: "light",
    themeBool: false,
    lang: "es",
    section: "on",
    section2: "on",
  }
  console.log(state)

  const images = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: [name], order: DESC }
        filter: { sourceInstanceName: { eq: "portfolio" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 250) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    }
  `)

  let title = ""
  let desc = ""
  let git = ""
  let live = ""
  let titlees = ""
  let titleen = ""
  let desces = ""
  let descen = ""
  let count = 0

  console.log(images)
  // edge.node.childImageSharp.fixed

  function displayCards() {
    return images.allFile.edges
      .map(edge => {
        console.log(props.quantity + "aaaa")

        switch (edge.node.childImageSharp.fixed.originalName) {
          // Project 2
          case "book.jpg":
            titlees = "My Book List"
            titleen = "My Book List"
            desces =
              "Book List is a basic CRD app which allows a user to add and delete books. Books are stored locally and the form contains basic validations."
            descen =
              "Book List is a basic CRD app which allows a user to add and delete books. Books are stored locally and the form contains basic validations."
            git = "https://github.com/v-flores/book_list"
            live = "https://v-flores.github.io/book_list/"
            break
          // Project 3
          case "vicdoesdev.jpg":
            titlees = "Victordoes.dev"
            titleen = "Victordoes.dev"
            desces =
              "Victordoes.Dev is the second iteration of my portfolio website. It now includes a blog. It is built on React, Gatsby, and GraphQL."
            descen =
              "Victordoes.Dev is the second iteration of my portfolio website. It now includes a blog. It is built on React, Gatsby, and GraphQL."
            git = "https://github.com/v-flores/vicdoesdev"
            live = "https://www.victordoes.dev"
            break
          // Project 3
          case "counter.jpg":
            titlees = "Coming Soon"
            titleen = "Coming Soon"
            desces =
              "Coming Soon features a vanilla JS built countdown timer, social media links, and an email subscription form."
            descen =
              "Coming Soon features a vanilla JS built countdown timer, social media links, and an email subscription form."
            git = "https://github.com/v-flores/comingsoon"
            live = "https://v-flores.github.io/comingsoon/"
            break
          // Proejct 4
          case "obscure.png":
            titlees = "Obscure Events"
            titleen = "Obscure Events"
            desces =
              "I created this website with HTML5, CSS, and vanilla Javascript for my event marketing company Obscure Events."
            descen =
              "I created this website with HTML5, CSS, and vanilla Javascript for my event marketing company Obscure Events."
            git = "https://github.com/v-flores/obscure_web"
            live = "https://v-flores.github.io/obscure_web"
            break
          // Project 2gi
          case "currencyexchange.png":
            titlees = "Exchange Rate Calculator"
            titleen = "Exchange Rate Calculator"
            desces =
              "Exchange Rate Calculator calculates the rates of many common currencies. It fetches data from the ExchangeRate-API with vanilla Javascript."
            descen =
              "Exchange Rate Calculator calculates the rates of many common currencies. It fetches data from the ExchangeRate-API with vanilla Javascript."
            git = "https://github.com/v-flores/JS20/tree/master/exchange-rate"
            live = "https://v-flores.github.io/JS20/exchange-rate/index.html"
            break
          // Proejct 5
          case "caffepietro.jpg":
            titlees = "Caffe Pietro"
            titleen = "Caffe Pietro"
            desces =
              "This is a mock website of a favorite local coffee shops This was created in GatsbyJS and React. The site is connected with an API that I created on Contenful in order to showcase the menu items. The Contact Us form is set up via Formspree."
            descen =
              "This is a mock website of a favorite local coffeeshop. This was created in GatsbyJS and React. The site is connected with an API that I created on Contenful in order to showcase the menu items. The Contact Us form is set up via Formspree."
            git = "https://github.com/v-flores/caffep"
            live = "https://caffepietro.netlify.com"
            break
          default:
            titlees = ""
            titleen = ""
            descen = ""
            desces = ""
            desc = ""
            git = ""
            live = ""
            break
        }

        state.lang === "es" ? (title = titlees) : count++
        state.lang === "en" ? (title = titleen) : count++
        state.lang === "es" ? (desc = desces) : count++
        state.lang === "en" ? (desc = descen) : count++
        return (
          <div
            className={state.theme === "light" ? "card-body" : "card-body dark"}
          >
            <div
              className={state.theme === "light" ? "card-top" : "card-top dark"}
            >
              <Img fixed={edge.node.childImageSharp.fixed} />
            </div>
            <div className="card-bottom">
              <h1 className="card-title">{title}</h1>
              <p className="card-desc">{desc}</p>
              <p className="links">
                {git ? <a href={git}>GITHUB REPO</a> : "PRIVATE REPO"}
              </p>
              <p className="links">
                <a href={live}>DEMO</a>
              </p>
            </div>
          </div>
        )
      })
      .slice(0, props.quantity)
  }

  return (
    <div className={state.section2 === "off" ? "card-main wrap" : "card-main"}>
      {displayCards()}
    </div>
  )
}

export default PortfolioCards
