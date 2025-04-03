import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  return (
    <Router>

        <Routes>
            
            <Route exact path='/login' element={<LoginScreen />} />
            <Route path='*' element={<DashboardRoutes />} />
         
        </Routes>
    </Router>
  )
}

export default AppRouter
