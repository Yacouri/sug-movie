import React from 'react'
import { Link } from 'react-router-dom'
import err404 from '../images/err-404.png'
import FeatherIcon from 'feather-icons-react'
import '../css/pageNotFound.css'

function PageNotFound() {
    return (
        <div>
            <div className="page-error">
                <img src={err404} alt="error-404"/>
                <p>Oops something went wrong 👻</p>
                <Link to="/home">
                    <FeatherIcon icon="arrow-left" color="#F03A17" size={20} />
                    Back home
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
