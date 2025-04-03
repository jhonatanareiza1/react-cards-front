import React from 'react'
import PropTypes from "prop-types";
import { Route } from 'react-router-dom'

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
  return (
    <Route {...rest}
    component={(props) =>(
        (isAuthenticated)
        ?
        (<Component {...props} />)
        :(<Route to='/login' />)
    )}
    />
  )
}

PrivateRoute.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute
