import React from 'react'
import {Link} from 'react-router-dom'
import Item from '../styledComponents/item'
import Carousel from "react-elastic-carousel";
import { checkActorImage } from '../../actions/movie'
import ShowMoreActorsImage from '../../images/show_more_actors.png'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
  ];

const ActorsCarousel = ({ actors_data }) =>{
    const renderActors = actors_data.actors.map((actor) => {
        return (
            <Item key={actor.id}>
                <div className="popular-actor" key={actor.id}>
                    <div className="actor-img">
                        <Link to='/home'>
                            <img src={checkActorImage(actor.profile_path, actor.gender)} alt={actor.name}/>
                        </Link>
                    </div>
                    <div className="actor-name">
                        <h3>{actor.name}</h3>
                    </div>    
                </div>
            </Item>
        )
    })

    return (
        <div>
            <div className="popular-actors-wrapper">
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {renderActors}
                    <Item>
                        <div className="show-more-movies">
                            <Link to='/more_movies'>
                                <img src={ShowMoreActorsImage} alt="more movies"/>
                            </Link>
                        </div>
                    </Item>
                </Carousel>
            </div>
        </div>
    )
}

export default ActorsCarousel
