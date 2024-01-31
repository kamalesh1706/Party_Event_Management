// Home.jsx
import React, { useState, useEffect } from 'react';
import './home.css';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FooterComponent from './FooterComponent';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const images = [
  './src/images/img6.jpg',
  './src/images/img7.jpg',
  './src/images/img8.jpg',
  // Add more images as needed
];



const Home = () => {
  

  const navigation=useNavigate();
const handleClick =()=>{
  navigation('/themes') 

}
const handleClick1 =()=>{
  navigation('/cus') 

}
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const redirectToWebsite = (url) => {
    window.location.href = url;
  };

  return (
    <>
    <Navbar/>
    <div className="home">
      {/* <Link to ="/"> <button onClick={handleNext}>&#9655;</button></Link> */}
      {/* <h1>Welcome to the Home Page</h1> */}
      <div className="image-slider">
        <button onClick={handlePrev}>&#9665;</button>
        <img src={images[currentIndex]} alt={`Slider Image ${currentIndex + 1}`} />
        <button onClick={handleNext}>&#9655;</button>
        
      </div>
 
      <div className='user12' style={{display:'flex'}}>
      <Card sx={{ maxWidth: 550 }}style={{marginRight:'30px',width:'850rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          width="500"
          image="./src/images/img9.jpg"
          onClick={handleClick}
          // alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Indoor Theme
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
      </CardActions>
    </Card>
      <Card sx={{ maxWidth: 550 }} style={{marginLeft:'30px', width:'850rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          width="900"
          image="./src/images/img9.jpg"
          onClick={handleClick1}
          // alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Customized Theme
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
      </CardActions>
    </Card>
    </div>
<FooterComponent/>
</div>
</>
      
  );
};

export default Home;
