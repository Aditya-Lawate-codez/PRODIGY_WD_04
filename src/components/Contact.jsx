import React from 'react'
import './home.css'
import SolecthonImage from '../assets/images/Profile.png';  // Update the path

export default function Contact() {
  return (
    <div className='full'>
    <div className="half" id="left">
        <img src={SolecthonImage} />
    </div>
    <div className="half">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, sed iste. Odio officia inventore ab repellendus maxime. Minus blanditiis velit ratione explicabo similique! Odio quibusdam nobis soluta magnam, magni doloribus?</div>
</div>
  )
}
