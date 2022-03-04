import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, delectus et 
            iure, fuga atque similique quam omnis sunt ea doloremque pariatur recusandae 
            voluptatem debitis cumque.</p>
            <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className="phone-img" alt='phone'/>
        </article>
      </div>

    </section>
  )
}

export default Hero
