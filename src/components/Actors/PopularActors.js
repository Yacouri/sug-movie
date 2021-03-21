import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularActors } from '../../actions/movie'
import Item from '../styledComponents/item'
import Carousel from "react-elastic-carousel";
import maleImg from '../../images/male_img_not_found.png'
import femaleImg from '../../images/female_img_not_found.png'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
  ];

const PopularActors = () => {
    const dispatch = useDispatch()
    const actorsData = useSelector(state=> state.movie.actors)
    useEffect(() => {
        dispatch(fetchPopularActors())
    },[])
    const checkActorImage = (imgPath, gender) => {
        const url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'
        const actor_gender_img = gender === 1 ? femaleImg : maleImg
        const result = imgPath === null ? actor_gender_img : url+imgPath
        return result
    }
    const renderActors = actorsData.map((actor) => {
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
                </Carousel>
            </div>
        </div>
    )
}

export default PopularActors