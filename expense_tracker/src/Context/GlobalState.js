import React, { useReducer, createContext } from "react"
import AppReducer from "./AppReducer"
// any global values is going in here:

const initialState = {
  transactions: [
  ]
}

// create our global context | const contextVariableName = createContext('default Value'):
export const GlobalContext = createContext(initialState) // create context returns an object with a Provider and a consumer
// Provider Component:
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState) // useReducer takes our initial state
  // Actions:
  function deleteEl(id) {
    dispatch({ type: 'delete', payload: id })
  }
  function addEl(transaction) {
    dispatch({ type: 'add', payload: transaction })
  }
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteEl, addEl }}>
      {children}
    </GlobalContext.Provider>
  )
}