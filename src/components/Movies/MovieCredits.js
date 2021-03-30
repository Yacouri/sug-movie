import React from 'react'
import { Link } from 'react-router-dom'
import { checkActorImage } from '../../actions/movie'

const MovieCredits = ({ casters }) =>{
    const renderCasters = casters.map((actor, index) => {
        return (
            <div className="popular-actor" key={index}>
                <div className="actor-img">
                    <Link to='#'>
                        <img src={checkActorImage(actor.url_small_image)} alt={actor.name}/>
                    </Link>
                </div>
                <div className="character">
                    <p className="actor-name">{actor.name}</p>
                    <p className="character-name"><span>As</span> {actor.character_name}</p> 
                </div> 
            </div>
        )
    })

    return (
        <div>
            <div className="popular-actors-wrapper">
                {renderCasters}
            </div>
        </div>
    )
}

export default MovieCredits
