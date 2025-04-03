import React, { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';


const HeroesScreen = () => {
    const {heroeId}= useParams();

    const hero =  useMemo(() => getHeroById(heroeId), [heroeId])


    if(!hero){
        return<Navigate to='/' />
    }
    const handleReturn =() =>{
        if(Navigate.length <= 2){
            Navigate.push('/')
        }else{
            Navigate.goBack()
        }
    }

    const{
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
  return (
    <div className='row mt-5'>
        <div className='col-4'>
            <img src={`../assets/${heroeId}.jpg`}
            alt={superhero}
            className='img-thumbnail' />
        </div>
        <div className='col-8'>
            <h3>{superhero}</h3>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'> <b> Aletr Ego: </b>{alter_ego}</li>
                <li className='list-group-item'> <b> Primera Aparicion: </b>{first_appearance}</li>
                <li className='list-group-item'> <b> Publicacion: </b>{publisher}</li>

            </ul>

            <h5>Caracteres</h5>
            <p>{characters}</p>
            <button className='btn btn-outline-info' onClick={handleReturn}>Regresar</button>
        </div>
      
    </div>
  )
}

export default HeroesScreen
