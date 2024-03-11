import React from 'react'
import {Navbar, About} from '../components'

const Home = () => {
  return (
    <div className='w-full ' id='home'>
        
        <div className='w-full'>
            <Navbar/>
        </div>

        <div className='w-full'>
            <About/>
        </div>

    </div>
  )
}

export default Home