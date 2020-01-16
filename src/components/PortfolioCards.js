import React, {useContext} from 'react';
import Img from 'gatsby-image';
import {graphql,useStaticQuery} from 'gatsby';
import '../css/portfoliocards.css';
import {GlobalStateContext} from '../context/GlobalContextProvider';




const PortfolioCards = (props) => {

  const state = useContext(GlobalStateContext) || {
    theme: "light",
    themeBool: false,
    lang: 'es',
    section: 'on',
    section2: 'on'
  }
  console.log(state);

    const images = useStaticQuery(graphql`
query {
    allFile(sort: {fields: [name], order: DESC}, filter: { sourceInstanceName: { eq: "portfolio" } }) {
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


let title = '';
let desc = '';
let git = '';
let live = '';
let titlees = '';
let titleen = '';
let desces = '';
let descen = '';
let count = 0;

console.log(images);
// edge.node.childImageSharp.fixed

function displayCards() {
   return images.allFile.edges.map((edge) => {
   
    console.log(props.quantity + 'aaaa');

       switch(edge.node.childImageSharp.fixed.originalName) {

                // Project 2
                case 'book.jpg':
                titlees = 'My Book List';
                titleen = 'My Book List';
                desces = 'Book List is a basic CRD app which allows a user to add and delete books. Books are stored locally and the form contains basic validations.';
                descen = 'Book List is a basic CRD app which allows a user to add and delete books. Books are stored locally and the form contains basic validations.';
                git = 'https://github.com/v-flores/book_list';
                live = 'https://v-flores.github.io/book_list/';
                break;
                // Project 3
                case 'forecast4u.jpg':
                titlees = 'Forecast4u';
                titleen = 'Forecast4u';
                desces = 'Forecast4u is a simple weather app powered by the DarkSky.net API. It provides the user with their local weather forecast easily by mere location tracking.';
                descen = 'Forecast4u is a simple weather app powered by the DarkSky.net API. It provides the user with their local weather forecast easily by mere location tracking.';
                git = 'https://github.com/v-flores/forecast4u';
                live = 'https://v-flores.github.io/forecast4u';
                break;
                // Project 3
                case 'counter.jpg':
                titlees = 'Coming Soon';
                titleen = 'Coming Soon';
                desces = 'Coming Soon features a vanilla JS built countdown timer, social media links, and an email subscription form.';
                descen = 'Coming Soon features a vanilla JS built countdown timer, social media links, and an email subscription form.';
                git = 'https://github.com/v-flores/comingsoon';
                live = 'https://v-flores.github.io/comingsoon/';
                break;
                // Proejct 4
                case 'obscure.png':
                titlees = 'Obscure Events';
                titleen = 'Obscure Events';
                desces = 'I created this website with HTML5, CSS, and vanilla Javascript for my event marketing company Obscure Events.';
                descen = 'I created this website with HTML5, CSS, and vanilla Javascript for my event marketing company Obscure Events.';
                git = 'https://github.com/v-flores/obscure_web';
                live = 'https://v-flores.github.io/obscure_web';
                break;
                 // Project 2gi
                case 'coffeefaq.jpg':
                titlees = 'Coffee FAQ';
                titleen = 'Coffee FAQ';
                desces = 'This FAQ contains a custom accordion component created with mere vanilla JavaScript.';
                descen = 'This FAQ contains a custom accordion component created with mere vanilla JavaScript.';
                git = 'https://github.com/v-flores/faqaccordion';
                live = 'https://v-flores.github.io/faqaccordion/';
                break;
            default:
                titlees = '';
                titleen = '';
                descen = '';
                desces = '';
                desc = '';
                git = '';
                live = '';
            break;
       }

       state.lang === 'es' ? title = titlees : count++;
       state.lang === 'en' ? title = titleen : count++;
       state.lang === 'es' ? desc = desces : count++;
       state.lang === 'en' ? desc = descen : count++;
        return (
            <div className={state.theme === 'light' ? 'card-body' : 'card-body dark'}>
            <div className={state.theme === 'light' ? 'card-top' : 'card-top dark'}>
            <Img fixed={edge.node.childImageSharp.fixed} />
            </div>
            <div className='card-bottom'>
            <h1 className='card-title'>{title}</h1>
            <p className='card-desc'>{desc}</p>
            <p className='links'>{git ? <a href={git}>GITHUB REPO</a> : 'PRIVATE REPO'}</p>
            <p className='links'><a href={live}>DEMO</a></p>
            </div>
            </div>
        )
    }).slice(0,props.quantity)
}




    return (
        <div className={state.section2 === 'off' ? 'card-main wrap' : 'card-main'}>
            
            {displayCards()}
            

        </div>
    )
}


export default PortfolioCards