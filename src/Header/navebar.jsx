
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCameraReels } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";


function Header() {
  const [isHoverLatestMovies, setisHoverLatestMovies] = useState(false);
  const [isHoverPopularMovies, setisHoverPopularMovies] = useState(false);
  const [isHoverComedyMovies, setisHoverComedyMovies] = useState(false);

  const normalColor={color:"white"}
  const hoverColor={color:"#FFFF00"}

  return (
    <>
      <Navbar bg="dark" data-bs-theme="yellow">
        <Container>
          <Navbar.Brand href="#home" className='mt-2' style={normalColor}> <Link to ="/home" className='movie link'><SiThemoviedatabase/> </Link>
          <BsCameraReels style={{fontSize:"25px",marginLeft:"5px",color:"#FFFF00"}} />
          </Navbar.Brand>
          <Nav className="me-auto" style={{fontSize:"20px",marginLeft:"80vh"}}>
            <Nav.Link href="#latest"
            style={isHoverLatestMovies ? hoverColor : normalColor}
            onMouseEnter={() => setisHoverLatestMovies(true)}
            onMouseLeave={() => setisHoverLatestMovies(false)}>
              <Link to ="/latest" className='link'>
              Latest Movies</Link>
              </Nav.Link>
            <Nav.Link href="#popular" 
            style={isHoverPopularMovies ? hoverColor : normalColor}
            onMouseEnter={() => setisHoverPopularMovies(true)}
            onMouseLeave={() => setisHoverPopularMovies(false)}>
              <Link to ="/popular" className='link'>
              Popular Movies</Link>
              </Nav.Link>
            <Nav.Link href="#comedy"
            style={isHoverComedyMovies ? hoverColor : normalColor}
            onMouseEnter={() => setisHoverComedyMovies(true)}
            onMouseLeave={() => setisHoverComedyMovies(false)}>
              <Link to ="/comedy" className='link'>
              Comedy Movie</Link>
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;