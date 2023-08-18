import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ComedyMovies, imageUrl } from '../url'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { newcontext } from '../App'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import Banner1 from '../Banner page/Banner1'

function Comedy() {

  const [comedy,setComedy,] = useContext(newcontext)

  const [search,setSearch] = useState('')

    useEffect(()=>{
        axios.get(ComedyMovies).then((responce)=>{
        setComedy(responce.data.results)
        console.log(responce.data)
        })
    },[])

    const searchhandle =()=>{
      const searchdata =comedy.filter(data=>data.name.toLowerCase().includes(search.toLowerCase()))
      setComedy(searchdata)
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
          onChange={(e)=>setSearch(e.target.value)} />&nbsp;

<Button variant='success' className='searchbar-h' onClick={searchhandle}>Search</Button>
      </div>

      </div>
      <Banner1/>
    <div className='card-container'>
            {comedy.length===0 ? <h3 className='load'>Loading...</h3> : comedy.map((item)=>{
                
          return(
            
           <Link className='link2' to={`/comedy/${item.id}`}>
            <Card className='card-main card ' style={{ width: '18rem' }}>
            <Card.Img className='card-main-img' variant="top" src={imageUrl+item.poster_path} />
            <Card.Body>
              <Card.Title className='card-main-text'>{item.name}</Card.Title>
            </Card.Body>
          </Card>
           </Link>
    
          )
          
        })}
        </div>
    </div>
  )
}

export default Comedy