import React from 'react'
import {Navbar, About, Moon, Mars} from '../components'

const Home = () => {
  return (
    <div className='w-full  ' id='home'>
        
        <div className='w-full'>
            <Navbar/>
            
        </div>

        <div className='m-0'>
        <About/>
        </div>


    </div>
  )
}

export default Home;