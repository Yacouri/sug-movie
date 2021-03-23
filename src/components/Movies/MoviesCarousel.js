import React from 'react'
import {Link} from 'react-router-dom'
import {getMoviesGenre, getMovieSlug, getVoteColor} from '../../actions/movie'
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
    return (
        <div>
            <div className="movies">
                <Carousel breakPoints={breakPoints} pagination={false}>
                {movies_data.map((movie, index)=>
                    <Item key={index}>
                        <MovieCard 
                            genre_id={movie.genre_ids[0]}
                            genre={getMoviesGenre(movie.genre_ids[0])}
                            id={movie.id}
                            slug={getMovieSlug(movie.title)}
                            poster={movie.poster_path}
                            title={movie.title}
                            release_date={movie.release_date}
                            vote_color={getVoteColor(movie.vote_average)}
                            vote_average={movie.vote_average}
                            section={section}
                        />
                    </Item>
                )}
                <Item>
                    <div className="show-more-movies">
                        <Link to='/more_movies'>
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
