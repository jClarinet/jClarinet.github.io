import React from 'react'
import './Photos.css'
import img_1 from '../../assets/Img_1.png'


const Photos = () => {

  
  return (
    <div className='photos'>
        <img src={img_1} alt="" className='photo'/>
    </div>
  )
}

export default Photos
