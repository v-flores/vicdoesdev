import React, {useEffect, useContext} from 'react';
import Layout from '../components/Layout';
import {GlobalDispatchContext, GlobalStateContext} from '../context/GlobalContextProvider';
import PortfolioCards from '../components/PortfolioCards';
import {Helmet} from "react-helmet";

const Portfolio = () => {

    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext) || {
        theme: "light",
        themeBool: false,
        lang: 'es',
        section: 'on',
        section2: 'on'
      }
    console.log(state);

    useEffect(()=> {
        dispatch({type: 'TOGGLE_ABOUT_SECTION_OFF'});
        dispatch({type: 'TOGGLE_PORTFOLIO_SECTION_OFF'});
    }, [state.section]);



    return (

        
        <Layout>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Victor F - Portfolio</title>
                <link rel="canonical" href="http://www.victordoes.dev/portfolio" />
            </Helmet>
        <div className='portfolio'>
       <PortfolioCards quantity={15} />
       </div>
    </Layout>
    )
}

export default Portfolio;