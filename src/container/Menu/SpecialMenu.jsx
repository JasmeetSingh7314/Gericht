import React from 'react';

import {SubHeading,MenuItem} from '../../components';

import './SpecialMenu.css';
import {images,data} from '../../constants';


const SpecialMenu = () => (
  <div className='app__specialMenu flex__center' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu That Fits your Palatte'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>

    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu-items'>
          {data.wines.map((wine,index)=>(
            
            <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />

          ))}

        </div>
      </div>


      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt='..bottle' />
      </div>


      <div className='app__specialMenu-menu_cocktails'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu-items'>
            {data.cocktails.map((cocktails,index)=>(
              <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}


        </div>
      </div>
     

    </div>
    <div style={{margin:'15px 0'}}>
      <button type='button' className='custom__button'>Know More</button>

    </div>
    
  </div>
);

export default SpecialMenu;
