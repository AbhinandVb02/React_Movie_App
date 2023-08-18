import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { PopularMovies, imageUrl } from '../url'
import {Button, Card} from 'react-bootstrap'
import { newcontext } from '../App'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Banner1 from '../Banner page/Banner1'

function Popular() {

  const [popular,setPopular] = useContext(newcontext)
  const [search,setSearch] = useState('')

    useEffect(()=>{
        axios.get(PopularMovies).then((responce)=>{
            setPopular(responce.data.results)
        })
    },[])

    const searchhandle =(e)=>{
       e.preventDefault()
      const searchdata =popular.filter(data=>data.title.toLowerCase().includes(search.toLowerCase()))
      setPopular(searchdata)
      console.log(searchdata)
    }
  
    const reload = ()=>{
      window.location.reload(false);
    }
   
  return (
<div>
<div>
<span className='sp'>
  <Button variant='success' onClick={reload}><BsArrowLeftCircleFill/></Button>
</span>
     
     <div style={{float:'right'}}>
     <input className='searchbar'
       value={search}
        type="text"
         placeholder='search'
          onChange={(e)=>setSearch(e.target.value)}
           />&nbsp;

      <Button variant='success' className='searchbar-h' onClick={searchhandle}>Search</Button>
     </div>
     
      </div> 
      <Banner1/>
<div>
     {popular.length===0 ?
      <h3 className='load'>Loading...</h3> : 
      popular.map((item)=>{
      return(
       
       <Link className='link2' to={`/popular/${item.id}`}>
        <Card className='card-main' style={{ width: '18rem' }}>
        <Card.Img className='card-main-img' variant="top" src={imageUrl+item.poster_path} />
        <Card.Body>
          <Card.Title className='card-main-text'>{item.title}</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card></Link>
     
      )
    })}
    </div>
</div>
  )
}

export default Popular