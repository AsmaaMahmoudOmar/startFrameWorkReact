import React from 'react'
import avatar from '../../Assets/avatar.svg'
export default function Home() {
  return (
    <>
   <section id="home" className='text-center mt-5 text-white d-flex align-items-center outerSection'>
    <div className="container pt-5 mt-5">
        <div className=' mb-5'>
              <img src={avatar} alt="avatarHome" width={250} /> 
        </div>
    <h1 className='text-uppercase mb-3'> start framework</h1>
    <span className='star'> <i className='fa-solid fa-star'></i></span>
        <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
   </section>
    </>
  )
}
