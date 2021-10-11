import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import axios from '../axios'
import './Rows.css'
function Rows({title,FethcURl,isLargerRow}) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setmovies] = useState([])
    const [trailerURL, setTrailerUrl] = useState("")
    const handleClick = (movie) => {
        if (trailerURL) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.name || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => alert("Sorry, There is no trailer for this movie"));
        }
      };
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(FethcURl)
            // console.log(request.data.results);
            setmovies(request.data.results)
            return request

        }
        fetchData();
    },[FethcURl])
    const opts={
        height:"390",
        width:"100%",
        playerVars:{

            autoPlay:1,
        }

    }
    // console.table(movies)
    return (
        <div className="rows">
            <h2>{title}</h2>
            <div className="rows__posters">
                    {/* row__Poster */}
                    {movies.map(movie =>(
                    <img 
                    onClick={handleClick}
                    key={movie.id} 
                    className={`row__Poster ${isLargerRow&& "row__posterLarge"}`} 
                    src={`${base_url}${isLargerRow?movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                 ))} 
                 {trailerURL&&<YouTube videoId={trailerURL} opts={opts} />}
            </div>
           
 
            


            {/* constiner --> posters*/}
            {/*  */}
        </div>
    )
}

export default Rows
