import React, {useState, useEffect, useContext} from 'react';
import Toggle from 'react-toggle';
import {useStaticQuery, graphql, Link} from "gatsby"
import Image from "gatsby-image"
import {GlobalDispatchContext, GlobalStateContext} from '../context/GlobalContextProvider';
import Typical from 'react-typical'


import '../css/layout.css';
import '../css/react-toggle.css';



const Layout = (props) => {
    const dispatch = useContext(GlobalDispatchContext);
    // console.log(dispatch);
    const state = useContext(GlobalStateContext) || {
        theme: "light",
        themeBool: false,
        lang: 'es',
        section: 'on',
        section2: 'on'
      }
    // console.log(state);

    const [webData, setWebData] = useState({
        links: ['Acerca De', ' | ', 'Blog' ,  ' | ', 'Portfolio'],
        
    });

    useEffect(()=> {
    console.log(webData);
    switch(state.lang) {
        case 'es':
        setWebData({
            links: [
                {
                    text: 'Acerca De',
                    path: '/'
                },
                {
                    text: ' | ',
                },
                {
                    text: 'Blog',
                    path: '/blog'
                },
                {
                    text: ' | ',
                },
                {
                    text: 'Proyectos',
                    path: '/portfolio'
                },
    
    
    
    
    ],
    download: {
        text: 'Descargá el PDF',
        path: './pdf/MartinChammah_es.pdf'
        }
        });
        break;
        case 'en':
                setWebData({
                    links: [
                        {
                            text: 'About me',
                            path: '/'
                        },
                        {
                            text: ' | ',
                        },
                        {
                            text: 'Blog',
                            path: '/blog'
                        },
                        {
                            text: ' | ',
                        },
                        {
                            text: 'Portfolio',
                            path: '/portfolio'
                        },
            ]
                });
        break;
    }


    }, [state.lang])

// Image Query  
    const data =  useStaticQuery(graphql`
    query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              childImageSharp {
                fixed(height: 200) {
                    ...GatsbyImageSharpFixed
                    originalName
                }
              }
              
            }
          }
        }
      }
`)



const languages = [
    {
        lang: 'es',
        linguas: 'Inglés, Español'
    },
    {
        lang: 'en',
        linguas: 'English, Spanish'
    },
]



const langDisplay = languages.filter (text => text.lang === state.lang );

// // // // // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BEGIN JSX RETURN

console.log(data.allFile);
    return(
    <main className={state.theme}>
        {state.theme === 'dark' ? <style>{'body { background-color: #141d26; }'}</style> : null}
   
        <div className={`header ${state.theme}`}>
        <span className='toggle-container'>
                <label>
                <Toggle
                    defaultChecked={state.themeBool}
                    icons={false}
                    onChange={()=> {
                        dispatch({type: 'TOGGLE_THEME'})
                    }}
                    />
                </label>
                <span style={{paddingLeft: "10px"}}>DARK MODE</span>
        </span>
        <span className={ state.theme === 'dark' ? 'toggle-flags dark' : 'toggle-flags'}></span>

        <span className='toggle-flags'>
        
        {data.allFile.edges.map((edge) => {
            let lang = edge.node.childImageSharp.fixed.originalName.substring(1, 3);
            let lang2 = lang.toUpperCase();
            return (
                <span key={lang} onClick={ () => {dispatch({type: 'TOGGLE_' + lang2})}}>
                <Image id={lang} className={'flags' + (lang === state.lang ? 'active' : '')} key={lang}   alt={lang} fixed={edge.node.childImageSharp.fixed} />
                </span>
            )

        }
        
      ).slice(0,2)}
        </span>
            <span className='break'></span>
            <span className={ state.theme === 'dark' ? 'title dark' : 'title'}>
           
<p  className="big" style={{display: "inline"}}>Victor does <b>dev</b>
                    <Typical
                        loop={0}
                        steps={[
                        '',2000]}
                        wrapper="b" />
                        <br></br>      
                        </p>
                        
                    {webData.links.map((link)=> {

                            return(<Link to={link.path}><p className='nav'>{link.text}</p> </Link>)


                    }
                    )}
            </span>
            <hr className={ state.theme === 'dark' ? 'break-line-dark' : 'break-line'}/>
        </div>
        <div className={state.section === 'off' ? 'left-bar ghost' :'left-bar'}>
        <Image className='image'  fixed={data.allFile.edges[2].node.childImageSharp.fixed}/>
        <div className='icon-wrapper-left'>
            <div className='iconos'><i className="fas fa-map-marker-alt fa-sm"></i><p>Chicago,IL</p></div>
            <div className='iconos'><i className="fas fa-graduation-cap fa-sm"></i><p>DePaul University</p></div>
            <div className='iconos'><i className="fas fa-code fa-sm"></i><p>HTML, CSS, JS</p></div>
            <div className='iconos'><i className="fas fa-language fa-sm"></i><p>{langDisplay[0].linguas}</p></div>
        </div>
        <div className={ state.theme === 'dark' ? 'icon-wrapper-left dark' : 'icon-wrapper-left'}>
            <div className='iconos'><a href='https://github.com/v-flores'><i className="fab fa-github fa-sm"></i><p>@v-flores</p></a></div>
            <div className='iconos'><a href='https://www.linkedin.com/in/victora88/'><i className="fab fa-linkedin fa-sm"></i><p>@victora88</p></a></div>
            <div className='iconos'><a href="mailto:hello@victordoes.dev"><i className="fas fa-envelope fa-sm"></i><p>hello@victordoes.dev</p></a></div>
        </div>
        </div>
        
        <div className={`center-content ${state.theme}`}>{props.children}</div>
        
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
    </main>
    )

}



export default Layout;