import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='NewsLetter'/>
      <h1 className='headtext__cormorant'>Subscribe to our NewsLetter</h1>
      <p className='p__opensans'>And never miss latest updates!</p>


    </div>
    <div className='app__newsletter-input flex__center'>
      <input  type='email' placeholder='Enter yor Email'/>
      <button type='submit' className='custom__button' >Subscribe!</button>


    </div>

    
  </div>
);

export default Newsletter;
