import React from 'react'
import { Element } from 'react-scroll'
import "./contact.css"
import { IconButton } from '@mui/material'
import{Instagram,LinkedIn,YouTube} from "@mui/icons-material"


const Contact = () => {
  return (
    <Element name="contact" className='contact'>
        <h1>contact</h1>
        <div className='contact__content'>
            <h4>E-mail:<span>antosujinjoseph@gmail.com</span></h4>
            <h4>Phone:<span>9080763832</span></h4>
            <h4>Address:<span>88/b,chithambara nagar,
                              kottar,
                              Nagercoil-629002.</span></h4>
               <div  className='contact_icons'>
               <a href="https://www.instagram.com/_anto_sujin_" target="_blank" rel="noopener noreferrer">
  <IconButton>
    <Instagram />
  </IconButton>
</a>
<a href="https://www.linkedin.com/in/anto-sujin-j-9a0517266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
  <IconButton>
    <LinkedIn />
  </IconButton>
</a>
<a href="https://www.youtube.com/your_youtube_channel" target="_blank" rel="noopener noreferrer">
  <IconButton>
    <YouTube />
  </IconButton>
</a>
            
        </div>
        </div>

    </Element>
  )
}

export default Contact 