import React from 'react'
//import movieImg from '../../images/fight_club.png'
import {Link} from 'react-router-dom'
import {getMoviesGenre, getMovieSlug, getVoteColor} from '../../actions/movie'
import Item from '../styledComponents/item'
import Carousel from "react-elastic-carousel";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
  ];

const MovieCard = ({movies}) => {
    return (
        <div className="movie-card-wrapper">
            <h2 className="top-10">Trending movies 👌🏼</h2>
            <div className="movies">
                <Carousel breakPoints={breakPoints} pagination={false}>
                {movies.movies.map((movie, index)=>
                    <Item key={index}>
                        <div className="movie-card">
                            <div className="movie-img">
                                <Link to={`/movie/${movie.genre_ids[0]}/${movie.id}/${getMovieSlug(movie.title)}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="movie"/>
                                </Link>
                            </div>
                            <div className="movie-caption">
                                <div className="movie-title">
                                    <h3>{movie.title}</h3>
                                    <span>Trending</span>
                                </div>
                                <p className="movie-date">{movie.release_date}</p>
                                <p className="movie-category">{getMoviesGenre(movie.genre_ids[0])}</p>
                                <p className="movie-rating">
                                    <span className={`rate ${getVoteColor(movie.vote_average)}`}>{movie.vote_average}</span> / 10
                                </p>
                            </div>
                        </div>
                    </Item>
                )}
                </Carousel>
            </div>
        </div>
    )
}

export default MovieCard
