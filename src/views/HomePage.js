import { useState, useEffect } from 'react';
import { popularFetch } from '../functionFeatch';
import LoadFilmList from './LoadFilmList';


export default function HomePage() { 
    const [films, setFilms] = useState([]);
  

    useEffect(() => {
        popularFetch().then(setFilms);
        
    }, []);
    
    return (
        <div>
           {films.length > 0 && <LoadFilmList films={films} />}
        </div>
    )
   
}

