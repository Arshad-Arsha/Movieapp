import React, { useState } from 'react'
import { useContext } from 'react'
import { movieContext } from './App'
import { imageUrl } from './Url';
import Rating from '@mui/material/Rating'
import { Button } from 'react-bootstrap';
import { FaRegPlayCircle} from "react-icons/fa";


const DetailView = () => {
  const {listmovies,movie_id} = useContext(movieContext);
  const [selected_movie] = listmovies.filter(m => m.id === movie_id);
  //console.log(selected_movie)
 return (
  <div>
    <div className='view-content'>
      
      <div className='column 'style={{marginLeft: "75px"}} >
        <h2 className='page-head'>{selected_movie?.title}</h2>
        <h2 className='page-head'>{selected_movie?.name}</h2>
          <b>Overview : </b>{selected_movie?.overview}<br/>
          <b>Language :</b>{selected_movie?.original_language} <br/>
          <b>Release Date :</b>{selected_movie?.release_date}<br/>
          <b>Popularity :</b>{selected_movie?.popularity}<br/>
         <b>Vote_count :</b>{selected_movie?.vote_count}<br/>
          <Rating name="customized-10" defaultValue={selected_movie?.vote_average} max={10} /><br/><br/>
          <Button variant='#000' style={{color:"#fff",marginLeft:"5px"}} ><FaRegPlayCircle  style={{color:"white",fontSize:"50px"}}/>   
         <span style={{marginLeft:"10px"}}> Watch Now</span></Button>
      </div>
      <div className='column text-center'>
      <img src = {imageUrl+selected_movie?.poster_path} className='moviedetail_img' /></div>
     </div>
    </div>
  )
}

export default DetailView