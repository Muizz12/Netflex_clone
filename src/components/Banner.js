import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios'

function Banner({FethcURl}) {
    const truncate = (input) => input?.length > 5 ? `${input?.substring(0, 200)}...` : input;
    const [movie, setmovie] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(FethcURl)
            console.log('this',request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            return request

        }
        fetchData()
    },[FethcURl])
    return (
        <div className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition:"center center"
        }
        } >
            <header>
                <div className="banner__content">
                    <h1 className="banner__title">
                        {movie?.title||movie?.name||movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button">
                            Play</button>
                            <button className="banner__button">
                                My Lish
                            </button>
                    </div>
                    <h4 className="banner__description"> {truncate(movie.overview)}</h4>
                </div>
                <div className="banner__fadeButton"></div>
                {/* Backgroud Image */}
                {/* title */})
                {/* div -> 2 button play and list */}
                {/* discription */}
            </header>
            
        </div>
    )
}

export default Banner
