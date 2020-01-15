//Credit to Kent C Dodds for some of the structure of this context


import React from 'react'

export const ThemeStateContext = React.createContext()
export const ThemeDispatchContext = React.createContext()


function themeReducer(state, action) {
  switch (action.type) {
    case 'light': {
      return {...state, 
        backgroundColor: 'white', 
        color: 'black'}
    }
    case 'dark': {
      return {...state, 
        backgroundColor: 'black', 
        color: 'white'}
    }
    default: {
      console.error(`Unhandled action type: ${action.type}`)
    }
  }
}
function ThemeProvider({children}) {
  const [state, dispatch] = React.useReducer(themeReducer, {backgroundColor: 'white', color: 'black'})
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}



export default ThemeProvider;
