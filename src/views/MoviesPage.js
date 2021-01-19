import { useState } from "react";
import { Link } from "react-router-dom";
import { searchMoviesByKeyword } from '../functionFeatch';

export default function MoviesPage() { 
    const [film, setFilm] = useState([]);
    const [filtr, setFiltr] = useState('');

    const handleOnChange = event => { 
        setFiltr(event.currentTarget.value);
        
    }
    
    const handleButtonClick=()=>{ 
        searchMoviesByKeyword(filtr.toLowerCase()).then(setFilm);
        
   
    }

    return (
     <>
        <input type="text"
        onChange={handleOnChange}
        />
        <button onClick={handleButtonClick}>Поиск</button>
        <ul className="film__load">
            {
                film.map(item=>(
                    <li>
                       <Link to={`movies/${item.id}`}> { item.title} </Link>
                    </li>    
                ))
            }
            </ul>  
        </>    
    )
    


}