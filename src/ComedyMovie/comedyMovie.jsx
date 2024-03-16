import React, { useEffect, useState } from 'react'
import { imageUrl, comedyMovies } from '../Url';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

const ComedyMovie = () => {
  const [comeady, setComedy] = useState([]);

  useEffect(() => {
    axios.get(comedyMovies)
      .then((response) => setComedy(response.data.results))
  }, []);

  console.log(comeady);

  return (
    <div className=' cards row m-5'>
      <h2 className='page-head'>Comeady Movie</h2>
      {comeady.map((i) => (
        <Card  key={i.id} style={{width: '18rem', margin: '2rem' ,backgroundColor:'rgba(255, 255, 0, 0.38)',color: '#fff'}}>
          <Card.Img variant='top' src={imageUrl + i.poster_path} style={{ height: '250px' }} />
          <Card.Body>
            <Card.Title style={{textAlign: 'center',fontSize:"30px",fontWeight:"600"}}>{i.title}</Card.Title>
            <Card.Text>
              <b>Overview:</b> {i.overview}<br />
              <b>Language:</b> {i.original_language}<br />
              <b>Release Date:</b> {i.release_date}<br />
              <b>Popularity:</b> {i.popularity}<br />
            </Card.Text>
            <Button variant="secondary">Read More</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ComedyMovie