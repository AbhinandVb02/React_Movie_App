import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { LatestMovies, imageUrl } from '../url'
import { Button, Card} from 'react-bootstrap'
import { newcontext } from '../App'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import Banner1 from '../Banner page/Banner1'

function Latest() {

  const [latest, setLatest] = useContext(newcontext)
  const [search,setSearch] = useState('')

  

    useEffect(()=>{
        axios.get(LatestMovies).then((response)=>{
            setLatest(response.data.results)
            console.log();
        })
    },[])

    const searchhandle =(e)=>{
      e.preventDefault()
      const searchdata =latest.filter(data=>data.original_title.toLowerCase().includes(search.toLowerCase()))
      setLatest(searchdata)
      console.log(latest)
    }

    const reload = ()=>{
      window.location.reload(false);
    }
  

  return (
   <div className='col-sm'>
      <div >
      <span className='sp col-sm'>
      <Button variant='success'  onClick={reload}><BsArrowLeftCircleFill/></Button>
      </span>
     
     <div style={{float:'right'}}>
     <input className='searchbar col-lg'
       value={search}
        type="text"
         placeholder='search'
          onChange={(e)=>setSearch(e.target.value)} />&nbsp;

     <Button variant='success' className='searchbar-h col-sm' onClick={searchhandle}>Search</Button>

     </div>
      
      </div>

      <div>
      <Banner1/>
      </div>

     <div>
          {latest.map((item,index)=>{
      return(
        <Link className='link2' to={`/${item.id}`}>
        <Card className='card-main' key={index} style={{ width: '18rem' }}>
        <Card.Img className='card-main-img' variant="top" src={imageUrl+item.poster_path} />
        <Card.Body>
          <Card.Title className='card-main-text'>{item.title}</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
        </Link>

      )
    })}
    </div>
   </div>
  )
}

export default Latest