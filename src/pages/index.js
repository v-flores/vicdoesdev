import React, {useEffect, useContext} from 'react';
import {GlobalDispatchContext, GlobalStateContext} from '../context/GlobalContextProvider';
import Layout from '../components/Layout';

import '../css/index.css';
import {Helmet} from "react-helmet";

const Index = (props) => {
    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext) || {
        theme: "light",
        themeBool: false,
        lang: 'en',
        section: 'on',
        section2: 'on'
      }

    const intro = [
        {
        lang: 'es',
        p1: '¡Hola! Me llamo Víctor. Radico en Chicago y soy un desarrollador Front-End. En mi carrera anterior, utilicé varias tecnologías web en proyectos comerciales. Después de trabajar  en marketing en las redes sociales y en la promoción de eventos por más de 5 años, decidí dedicareme por completo a aprender tecnologías de web modernas. ',
        p2: ' Disfruto el cambio,la colaboración con otros y la busqueda de nuevas maneras de hacer el trabajo. En mis pasatiempos disfruto viajar, preparar café de especialidad, tocar mi saxofón y hacer ejercicio. '
        },
        {
            lang: 'en',
            p1: 'Hello! My name is Victor and I am a Front End Web Developer based in Chicago. I\'ve used several web technologies for commercial projects over the course of my previous career.I had been working in social media marketing and event promotion for over 5 years before deciding to focus on learning modern web development technologies in 2019. I am highly-motivated, result-oriented, and self-taught.',
            p2: 'I enjoy change, collaboration, and finding new ways to do a job. Aside from web development, I enjoy travel, brewing speciality coffee, jamming on my saxophone, and working out. I\'m a very experienced communicator and listener.'
        }


                 ];

const habilidadesEn = [
    {
        lang: 'es',
        title: 'Habilidades'

    },
       {
        lang: 'en',
        title: 'Skills'
    }
];

const hF = [ 'HTML5', 'CSS3','Javascript','NodeJS','Wordpress'];
const hL = [ 'Express','Bootstrap','React',"Gatsby", "GraphQL", 'Git','Bash' ];


console.log(state.lang);

const display = intro.filter(text => text.lang === state.lang);




const skillsDisplay = habilidadesEn.filter(text => text.lang === state.lang);

useEffect(()=> {
    dispatch({type: 'TOGGLE_ABOUT_SECTION_ON'});
    dispatch({type: 'TOGGLE_PORTFOLIO_SECTION_ON'});
}, [state.section])

console.log(state);


    console.log(props);
    return (
        
     <Layout>
          <Helmet>
                <meta charSet="utf-8" />
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                <title>Victor F - Front End Web Developer</title>
                <br></br>
                <link rel="canonical" href="http://www.victordoes.dev" />
            </Helmet>
         <hr id='break' className={ state.theme === 'dark' ? 'break-line-dark' : 'break-line'}/>
         <p className='description'>{display[0].p1}</p>
         <p className='description'>{display[0].p2}</p>
         <h2>{skillsDisplay[0].title}</h2>
         {hF.map(skill => <div key={skill} className='skill-pill'>{skill}</div>)}
         {hL.map(skill => <div key={skill}  className='skill-pill light'>{skill}</div>)}
     </Layout>
    )
}


export default Index