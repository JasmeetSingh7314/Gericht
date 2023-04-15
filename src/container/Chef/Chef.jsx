import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__chef app__bg flex__center'>
    <div className='app__chef-img'>
      <img src={images.chef} alt='..jason' />

    </div>
    <div className='app__chef-info'>
      
      <div className='app__chef-info_headtext'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What We Believe In</h1>

      </div>
      <div className='app__chef-info_words'>
        
        <p className='p__opensans'>
        <img src={images.quote} alt='../quote'/>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .<br />
        
        Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>


      </div>
      <div className='app__chef-sign'>
        <h3 className='p__cormorant'>Kevin Luo</h3>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />

      </div>


    </div>
    Chef
  </div>
);

export default Chef;
