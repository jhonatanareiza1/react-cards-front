import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import types from '../../types/types';


const NavBar = () => {

    const navigate = useNavigate();

   const {user: {name}, dispatch} = useContext(AuthContext);

const handleLogout = () =>{
    navigate('/login', {replace:true});
    dispatch({
        type: types.logout
    })
}
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/tresd"
                    >
                        3D
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/arte"
                    >
                        Arte
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/personajes"
                    >
                        Personajes
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link'> {name}</span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout} 
                    >
                        Logout
                    </button>
                </ul>
            </div>

           
        </nav>
    )
}

export default NavBar