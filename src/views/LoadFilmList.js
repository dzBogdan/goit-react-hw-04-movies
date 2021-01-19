import { Link, useRouteMatch } from 'react-router-dom';
import '../Navigatior.moduls.css';

export default function LoadFilmList({ films }) { 
    const match = useRouteMatch();
    
    const filterTitle = item => { 
        console.log(item.title);
        if (item.title===undefined) {
            return item.name;
        }
        else { 
            return item.title
        }
    }
     
    return (
        <>
          <h1>Trending today</h1>
            <ul className="film__load">
                {films.map(item => (
                    <li key={item.id}>
                        
                        <Link to={`movies/${item.id}`}> {item.title===undefined?item.name:item.title } </Link>
                    </li>
                ))}
            </ul>    
                
        </>    
    )
}