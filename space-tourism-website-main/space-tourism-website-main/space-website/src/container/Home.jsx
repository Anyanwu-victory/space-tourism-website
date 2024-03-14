import React from 'react'
import {Navbar, About, Destination} from '../components'

const Home = () => {
  return (
    <div className='w-full  ' id='home'>
        
        <div className='w-full'>
            <Navbar/>
            
        </div>

        <div className='m-0'>
        <About/>
        </div>

        <div className='w-full'>
        <Destination/>
        </div>

    </div>
  )
}

export default Home