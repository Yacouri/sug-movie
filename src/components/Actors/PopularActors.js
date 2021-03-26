import React from 'react'

import ActorsCarousel from './ActorsCarousel';

const PopularActors = ({ popular_actors }) => {
    return (
        <div>
            <div className="popular-actors-wrapper">
                <ActorsCarousel actors_data={popular_actors}/>
            </div>
        </div>
    )
}

export default PopularActors
