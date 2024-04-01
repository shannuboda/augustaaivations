
import './css/course.css'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Courses() {
  const Navigate = useNavigate()
  return (
    <div>
    <div className="course-1">
        <div className="r">
            <div className="d1"></div> <h4>Our Courses </h4>
            <div className="d1"></div>
      </div>
      <div className="r1">
        <h1>What We Provide</h1>
      </div>
    </div> 

    <Box sx={{ width: '100%', padding:'1rem',marginTop:'-3rem'}}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={6} >
          <Item >
            <div className="item-head">
                <h4>AUGUSTA certified Airport Management Course</h4>
            </div>
          <div className="item-des">
            <h6>India is one of the most popular tourist destinations, visited by travellers from around the globe.</h6>
          </div>
          <span onClick={()=>{Navigate('/airportmanagement')}} className='item-link' style={{cursor:'pointer'}}>Read More &#8594;</span>        
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item >
            <div className="item-head">
                <h4>AUGUSTA certified Ground Staff professionals</h4>
            </div>
          <div className="item-des">
            <h6>We all are mesmerized by the glamorous lives of Pilots and Cabin crews. They take care of us during our.</h6>
          </div>
          <span onClick={()=>{Navigate('/groundstaff')}} className='item-link'style={{cursor:'pointer'}}> Read More &#8594;</span>      
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <div className="item-head">
                <h4>AUGUSTA certified cabin crew professionals</h4>
            </div>
          <div className="item-des">
            <h6>Working as a cabin crew can be an exciting experience as well as a challenging one.</h6>
          </div>
          <span onClick={()=>{Navigate('/cabincrew')}} className='item-link'style={{cursor:'pointer'}}>Read More &#8594;</span>      
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <div className="item-head">
                <h4>AUGUSTA Certified Ticketing Course</h4>
            </div>
          <div className="item-des">
            <h6>The aviation industry is on the precipice of an exponential growth surge, with estimates that India will need 400 airports.</h6>
          </div>
          <span onClick={()=>{Navigate('/ticketing')}} className='item-link'style={{cursor:'pointer'}}>Read More &#8594;</span>      
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <div className="item-head">
                <h4>AUGUSTA Certified Cargo Course</h4>
            </div>
          <div className="item-des">
            <h6>A wide range of requirements apply when transporting dangerous goods.</h6>
          </div>
          <span onClick={()=>{Navigate('/cargo')}} className='item-link'style={{cursor:'pointer'}}>Read More &#8594;</span>      
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <div className="item-head">
                <h4>AUGUSTA Certificate in Pilot Course</h4>
            </div>
          <div className="item-des">
            <h6>Aviation, one of the most exciting profession in the world, requires the most talented and energetic staffs. In addition to.</h6>
          </div>
          <span  onClick={()=>{Navigate('/pilot')}} className='item-link'style={{cursor:'pointer'}}>Read More &#8594;</span>      
          </Item>
        </Grid>


       
      </Grid>
    </Box>
    </div>
  );
}




export default Courses