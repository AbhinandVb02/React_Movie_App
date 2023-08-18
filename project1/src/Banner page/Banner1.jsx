import React, { useEffect, useState } from "react";
import { LatestMovies, imageUrl } from "../url";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";




function Banner1() {

  const [movie,setMovie] = useState([])

  useEffect(()=>{
          axios.get(LatestMovies).then((res)=> setMovie(res.data.results[ Math.floor(Math.random()* res.data.results.length)]
          ))
  },[])
      


  return (
    <div className="banner-main col-sm">
        <div className='banner' style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}> 
        <div className="banner-sub col-xl">
        <h2>{movie.title}</h2>
          &nbsp;{movie.vote_average} <AiFillStar/>
          <span>{movie.vote_count}</span>
        <p className="col-xl">{movie.overview}</p>
        </div>
        </div>
    </div>
  )
}

export default Banner1