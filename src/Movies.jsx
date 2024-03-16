import React, { createContext, useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap';
import { imageUrl } from './Url';
import { Link } from 'react-router-dom';
import { movieContext } from './App';

const Movies = ({movielist,title}) => {
  // console.log(movielist);
   const {listmovies,setlistmovies,movie_id,setmovie_id} = useContext(movieContext);
   const [movies, setmovies] = useState([]);
    useEffect(() => {
           axios.get(movielist)
          .then((response)=>{
            setmovies(response.data.results)
            setlistmovies(response.data.results)
          })
        }, [movielist]);
   //console.log(listmovies);
   const getid = (id)=>{
     setmovie_id(id);
    // setshow((e)=>!e)
     }
   
 return (
    <div style={{backgroundColor:'  #000' }}>
      <div className='row ms-5' >
         <h2 className='page-head'>{title}</h2>   
       {movies.map((i)=>{
        return(
           <Card className='movie-card' onClick={()=>getid(i.id)}  style={{ width: '18rem', margin: '2rem' }}>
           <Link to= "/moviedetail" style={{textDecoration:"none",color:"black"}}>
          <Card.Img variant="top" src= {imageUrl+i.poster_path} 
            style={{ height:"200px",objectFit:"cover",width:"100%"}} />
          <Card.Body className='cardColor'>
          <Card.Title style={{ textAlign: 'center',fontSize:"30px",fontWeight:"600"}} >{i.title}{i.nameE}
          </Card.Title>
          <Card.Text>
            <b>Overview : </b>{i.overview}<br/>
            <b>Language :</b>{i.original_language} <br/>
            <b>Release Date :</b>{i.release_date}<br/>
            <b>Popularity :</b>{i.popularity}<br/>
         </Card.Text>
          <Button variant="" style={{backgroundColor:"#000",color:"#fff"}}>View More</Button>
        </Card.Body>
      </Link></Card> 
        )
     })}
      </div>
      </div>
  )
}

export default Movies
