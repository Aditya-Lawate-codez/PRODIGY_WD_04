import React from 'react'
import './home.css'
import LogoImage from '../assets/images/Profile.png';

export default function HomePage() {
    return (
        <><div className='full'>
            <div className="half" id="left">
                <img src={LogoImage} />
            </div>
            <div className="half">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, sed iste. Odio officia inventore ab repellendus maxime. Minus blanditiis velit ratione explicabo similique! Odio quibusdam nobis soluta magnam, magni doloribus?</div>
        </div><div className='full'>
                <div className="half" id="left">
                    <img src={LogoImage} />
                </div>
                <div className="half">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, sed iste. Odio officia inventore ab repellendus maxime. Minus blanditiis velit ratione explicabo similique! Odio quibusdam nobis soluta magnam, magni doloribus?</div>
            </div></>
    )
}
