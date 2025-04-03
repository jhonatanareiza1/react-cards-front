import { heroes } from "../data/heores";


export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics', 'Arte'];

    if (!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter( hero =>hero.publisher === publisher);
}