import React from 'react'
import Topcontent from './Topcontent'
import { Element } from 'react-scroll'
import "./topcontainer.css"

const Topcontainer = () => {
  return (
    <Element name="about" className='topcontainer container-fluid'>
        <Topcontent/>
    </Element>
        
    
  )
}

export default Topcontainer