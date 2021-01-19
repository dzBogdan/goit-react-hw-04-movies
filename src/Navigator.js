import {  NavLink } from 'react-router-dom';
import './Navigatior.moduls.css';


export default function Navigator() { 
    return (
        <>
        <nav>
                <NavLink  exact to="/"  className="link" activeClassName="activeLinck">Главная</NavLink>
                <NavLink to="/Movies" className="link" activeClassName="activeLinck">Поиск</NavLink>
       </nav>   
       <hr />
       </>     
    )
}