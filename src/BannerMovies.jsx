import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { imageUrl } from './Url';

const BannerMovies =({movies}) => {
    const [latest, setlatest] = useState([]);
    useEffect(() => {
      axios.get(movies)
           .then((values)=>setlatest(values.data.results))
    }, [])
    //console.log(latest);
    const arraylength = latest.length;
    let random_num = Math.floor((Math.random() * arraylength));
    const obj = latest[random_num]; 
    const img = imageUrl+obj?.poster_path;
   
  return (
    <div className="image"  style={{backgroundImage:`url(${img})`, }}>
      <div className="content">
      <h3><i>{obj?.title}</i></h3>
      <h6>Overview : {obj?.overview}</h6>
      </div>
    </div>
  )
}

export default BannerMovies;
