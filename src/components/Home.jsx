import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center gap-4'>
      <div className='text-start mb-4'>
        <h1 className='text-6xl font-bold mb-4 leading-relaxed'>One Step Closer To Your  <span className='text-purple-700'>Dream Job</span></h1>
        <p className='font-medium mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <Link to='/blog'><button className='btn-primary'>Get Started</button></Link>
      </div>
      <div className='text-center'>
      <img
        src='public\All Images\P3OLGJ1 copy 1.png'
        alt=''
        className='text-center'
      />
      </div>
    </section>
  )
}

export default Home
