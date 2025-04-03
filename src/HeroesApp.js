import React, { useEffect, useReducer } from 'react'
import AppRouter from './routers/AppRouter'
import AuthContext from './auth/AuthContext'
import authReducer from './auth/authReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {
    logged: false
  }
}

const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() =>{
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <>
      <h1>Aca voy a poner mis trabajos esto me traera mucho mas labor</h1>
      <AuthContext.Provider value={{user, dispatch}}>
      <AppRouter />
      </AuthContext.Provider>
      
    </>
)}

export default HeroesApp
