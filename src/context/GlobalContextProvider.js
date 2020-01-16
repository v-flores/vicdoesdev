import React, { useEffect } from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: "light",
  themeBool: false,
  lang: 'en',
  section: 'on',
  section2: 'on'
}


function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
        themeBool: state.theme === 'light' ? true : false
      }
    }
    case 'TOGGLE_EN': {
        return {
            ...state,
            lang: 'en'
        }
    }
    case 'TOGGLE_ES': {
        return {
            ...state,
            lang: 'es'
        }
    }
    case 'TOGGLE_ABOUT_SECTION_OFF': {
        return {
            ...state,
            section: 'off'
        }
    }
    case 'TOGGLE_ABOUT_SECTION_ON': {
        return {
            ...state,
            section: 'on'
        }
    }
    case 'TOGGLE_PORTFOLIO_SECTION_OFF': {
        return {
            ...state,
            section2: 'off'
        }
    }
    case 'TOGGLE_PORTFOLIO_SECTION_ON': {
        return {
            ...state,
            section2: 'on'
        }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider