import { BASE_URL_POSTR } from '../functionFeatch'; 
//import { useState, useEffect } from 'react';
//import { NavLink, useParams, Route } from 'react-router-dom';
//import { gethMoviesDetailById,getCastByMoviesId,getReviewsById } from '../functionFeatch';
import '../Navigatior.moduls.css';

export default function Actors({ actors}) { 
   return (
        <>
            <ul className="actors__list">
                {actors.map(item => (
                    <li key={ item.id} className="actar__item">
                        <img src={`${BASE_URL_POSTR}${item.profile_path}`} className="actors"/>
                        <br/>
                        {item.name}
                    </li>    
                ))}
            </ul>    
          
        </>    
    )
}