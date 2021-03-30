import React from 'react'
import {Link} from 'react-router-dom'
import {getVoteColor} from '../../actions/movie'
import Item from '../styledComponents/item'
import Carousel from "react-elastic-carousel";
import ShowMoreMoviesImage from '../../images/show_more_movies.png'
import MovieCard from './MovieCard';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
  ];

const MoviesCarousel = ({ movies_data, section })=> {
    const renderMovies = movies_data.map((movie, index)=>{
        return (
            <Item key={index}>
                <MovieCard 
                    id={movie.id}
                    genre={movie.genres}
                    slug={movie.slug}
                    poster={movie.large_cover_image}
                    title={movie.title}
                    release_date={movie.release_date}
                    vote_color={getVoteColor(movie.rating)}
                    vote_average={movie.rating}
                    section={section}
                />
            </Item>
        )
    })
    return (
        <div>
            <div className="movies">
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {renderMovies}
                <Item>
                    <div className="show-more-movies">
                        <Link to='/movie-suggestion'>
                            <img src={ShowMoreMoviesImage} alt="more movies"/>
                        </Link>
                    </div>
                </Item>
                </Carousel>
            </div>
        </div>
    )
}

export default MoviesCarousel
