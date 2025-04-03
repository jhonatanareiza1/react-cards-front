import React, { useMemo } from 'react'
import TresDCard from '../tresd/TresDCard';
import useForm from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import getHeroesByName from '../../selectors/getHeroesByName';

const SearchScreen = ({Navigate}) => {
    
    const location =useLocation();
    const {q = ''} = queryString.parse(location.search)
    
    const navigate = useNavigate();
    const [formvalues, handleInputChange] = useForm({
        searchText: q
    });

    const {searchText} = formvalues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    ;

    const handleSearch = (e) =>{
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }
  return (
    <div>
      <h1>Busca las Pantallas</h1>
      <hr></hr>

      <div className="row">
        <div className="col-5">
          <h4>Formulario de Busqueda</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Encuentra a tu heroe"
              className="form-control"
              autoComplete='off'
              name='searchText'
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className='col-7'>
            <h4>Resultados</h4>
            <hr />

            

            {
                (q === '')
                &&
                <div className='alert alert-info'>BUsca un Heroe</div>
            }

            {
                (q !== '' && heroesFiltered.length === 0)
                &&
                <div className='alert alert-dark'>El heroe no existe {q} </div>
            }

            {heroesFiltered.map(hero =>(
                <TresDCard 
                    key={hero.id}
                    {...hero}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchScreen
