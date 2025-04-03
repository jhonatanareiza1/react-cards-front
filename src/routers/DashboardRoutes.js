import React from 'react'
import NavBar from '../components/ui/NavBar'
import { Routes, Route } from 'react-router-dom';
import Arte from '../components/arte/Arte'
import TresD from '../components/tresd/TresD'
import PersonajeScreen from '../components/personajes/PersonajeScreen'
import HeroesScreen from '../components/heroes/HeroesScreen'
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <div className='container mt-2'>
        <Routes>
          <Route exact path="/arte" element={<Arte />}/>
          <Route exact path="/tresd" element={<TresD />}/>
          <Route exact path="/hero/:heroeId" element={<HeroesScreen />}/>
          <Route exact path='/personajes' element={<PersonajeScreen />} />
          <Route exact path='/search' element={<SearchScreen />} />
        </Routes>
      </div>
    </>
  )
}

export default DashboardRoutes


