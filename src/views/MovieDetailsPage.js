import { useState, useEffect } from 'react';
import { NavLink,useParams,Route } from 'react-router-dom';
import FilmMovie from './FilmMovie';
import Actors from './Cast';
import Reviews from './Reviews';
import { gethMoviesDetailById, getCastByMoviesId, getReviewsById } from '../functionFeatch';
import '../Navigatior.moduls.css';

export default function MovieDetailsPage() {
    const [film, setFilm] = useState(null);
    const [actors, setActors] = useState(null);
    const [reviews, setReviews] = useState([]);
    const params = useParams();
    
   
    
    useEffect(() => {
        gethMoviesDetailById(params.movieId).then(setFilm);
        getCastByMoviesId(params.movieId).then(setActors);
        getReviewsById(params.movieId).then(setReviews);
    },[params.movieId]);

    
   
    return (
    <>
            { film && <FilmMovie film={film} />}
            <hr />
            <h1>Infomation</h1>
            <ul className="film__load">
                <li><NavLink to={`/movies/${params.movieId}/cast`}>Cast </NavLink></li>
                <li><NavLink to={`/movies/${params.movieId}/reviews`}>Reviews </NavLink></li>
            </ul>    
            <hr />
            <Route path="/movies/:movieId/cast">
                  {actors && <Actors actors={ actors}/>}
            </Route> 
           
            <Route path="/movies/:movieId/reviews">
                  {reviews.length>0 && <Reviews reviews={reviews} />}
            </Route>
            
    </>        
    )
}