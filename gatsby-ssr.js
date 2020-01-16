import React from 'react';
import GlobalContextProvider from './src/context/GlobalContextProvider';

const wrapRootElement = ({ element }) => {
    return (
      <GlobalContextProvider>
        {element}
        </GlobalContextProvider>
    )
  }

  export default wrapRootElement;