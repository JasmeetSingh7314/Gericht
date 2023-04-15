import React from 'react'; 

import { SubHeading } from '../../components';
import {images,data} from '../../constants';



const FindUs = () => (
  <div className='app__findus app__bg app__wrapper section__padding' style={{display:'flex',padding:'4%'}}>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact Us' />
      <h1 className='headtext__cormorant' style={{margin:'2rem 0'}}>Find Us</h1>
      <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
      <div className='app__wrapper-content'>
        <p className='p__cormorant' style={{margin:'2rem 0',color:'rgba(220,202,135)'}}> Opening Hours</p>

        <p className='p__opensans'>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p className='p__opensans'>
        Sat - Sun: 10:00 Am - 03:00 Am
        </p>
        <button type='button' className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>

      </div>

    </div>
    <div className='app__wrapper_img' >
      <img src={images.findus} alt='findusimg' />

    </div>

    
  </div>
);

export default FindUs;
