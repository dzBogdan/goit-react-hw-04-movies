import '../Navigatior.moduls.css';
import { BASE_URL_POSTR } from '../functionFeatch'; 

export default function FilmMovie({ film }) { 
   
    return(
    <>
    <div className="film" >
        <div className="film__div">
                    <img src={`${BASE_URL_POSTR}`+`${film.poster_path}`} className="film__img"/>
        </div>
        <div>
                <h1>{film.title===undefined?film.name:film.title }</h1><br /> 
                <p>User Score:  </p>
                <h1>overview</h1>
                <p>
                    {film.overview}
                </p>
                <h1>Genres</h1>
                <ul className="film__genres">
                    {film.genres.map(item => (
                        <li key={item.id} className="genres__item" >
                            {item.name}
                        </li>    
                    ))}
                </ul>  
               
        </div>
    </div>
                            
   </>
   

    )   
}
