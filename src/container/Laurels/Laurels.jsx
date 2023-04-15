import React from 'react';

import { SubHeading,MenuItem } from '../../components';
import {images,data} from '../../constants';
import './Laurels.css';

const AwardCard=({award:{imgUrl,title,subtitle}})=>(
  <div className='app__awards_laurels-card'>
    <img src={imgUrl} alt='img' />
    <div className='app__awards_laurels-card_content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      <p className='p__opensans' style={{color:'#fff'}}>{title}</p>

    </div>

  </div>

)

const Laurels = () => (
  <div className=' app__bg app__wrapper section__padding '>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & Recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__awards_laurels'>
        {data.awards.map((award)=><AwardCard award={award} key={award.title} />)}
        


      </div>
      


    </div>
    <div className='app__wrapper_img'>
          <img src={images.laurels} alt='laurels' />

      </div>
    
  </div>
);

export default Laurels;
