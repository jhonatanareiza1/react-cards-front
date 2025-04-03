import { heroes } from "../data/heores";


const getHeroesByName = (name) =>{

    if(name === ''){
        return[];
    }
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}

export default getHeroesByName;