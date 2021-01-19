import { lazy,Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigator from './Navigator';
import NotFound from './views/NotFound';
import './App.css';

const HomePage = lazy(() => import('./views/HomePage.js'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage.js'));
const MoviesPage = lazy(() => import('./views/MoviesPage.js'));


export default function App() {
  return (
    <>
      <Navigator />
      <Suspense fallback={ <h1>Загружаем...</h1>}>
      <Switch>

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId" >
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFound />
        </ Route>
        </Switch>
      </Suspense>  
    </>
  );
}


