import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import TresDCard from './TresDCard'

const TresDList = ({publisher}) => {

    const heroes =  useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className='card-columns animate__animated animate__fadeIn'>
      
        {
        heroes.map(hero => (
            <TresDCard key={hero.id}
                {...hero}>
            </TresDCard>
        ))
    }
    </div>
  )
}

export default TresDList
