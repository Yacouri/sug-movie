import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../styledComponents/item'
import Carousel from "react-elastic-carousel";
import { checkActorImage } from '../../actions/movie'
import FeatherIcon from 'feather-icons-react'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
  ];

const MovieCredits = ({ casters }) =>{
    const renderCasters = casters.map((actor) => {
        return (
            <Item key={actor.id}>
                <div className="popular-actor" key={actor.id}>
                    <div className="actor-img">
                        <Link to='/home'>
                            <img src={checkActorImage(actor.profile_path, actor.gender)} alt={actor.name}/>
                        </Link>
                    </div>
                    <div className="actor">
                        <h3>{actor.name}</h3>
                    </div>
                    <div className="character">
                        <p className="character-text">Character</p>
                        <p className="character-name">{actor.character}</p>
                    </div> 
                </div>
            </Item>
        )
    })

    return (
        <div>
            <div className="popular-actors-wrapper">
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {renderCasters}
                </Carousel>
            </div>
        </div>
    )
}

export default MovieCredits
