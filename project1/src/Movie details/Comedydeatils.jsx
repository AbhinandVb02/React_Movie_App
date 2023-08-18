import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ComedyMovies, imageUrl } from '../url'
import { useParams } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import { Button } from 'react-bootstrap';
import { newcontext } from '../App';

function Comedydeatils() {

    
    const [comedy,setComedy] = useContext(newcontext)

    const {id} = useParams()

    const found = comedy ? comedy.filter(found=> found.id == id) :[]
  return (
    <div>
         {found.map((item)=>
           <div className="movie">
           <div className="movie__intro">
               <img className="movie__backdrop" src={imageUrl+item.backdrop_path} />
           </div>
           <div className="movie__detail">
               <div className="movie__detailLeft">
                   <div className="movie__posterBox">
                       <img className="movie__poster" src={imageUrl+item.poster_path} />
                   </div>
               </div>
               <div className="movie__detailRight">
                   <div className="movie__detailRightTop">
                       <div className="movie__name">{item.title}</div>
                       <div className="movie__rating">
                           {item.vote_average} <AiFillStar/>
                           <span className="movie__voteCount">{item.vote_count}</span>
                       </div>
                       <div className="movie__releaseDate">{item.first_air_date}</div>
                       <div className="movie__genres">
                       </div>
                   </div>
                   <div className="movie__detailRightBottom">
                       <div className="overviewText">Overview</div>
                       <div>{item.overview}</div><br />
                       <Button variant='dark'>Download</Button>&nbsp;&nbsp;
                       <Button variant='warning'><a className='link' href="https://www.imdb.com/">IMbd</a></Button>
                   </div>
               </div>
           </div>
       </div>
         )}
    </div>
  )
}

export default Comedydeatils