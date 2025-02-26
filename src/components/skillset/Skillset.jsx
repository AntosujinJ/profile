import React from 'react'
import { Element } from 'react-scroll'
import code3 from "../../img/code3.png"
import LinearProgress from "@mui/material/LinearProgress"
import "./skillset.css"

const Skillset = () => {
  return (
    <Element className='skillcontainer' name="skills">
        <div className='skillcontainer__img'>
            <img src={code3} alt=""/>
        </div>
        <div className='skillcontainer__text'>
            <h2>skills</h2>

            <div className='skillcontainer__skills'>
            <h4>HTML</h4>
            <div className='skillcontainer_slider skillcontainer_slider1'>
            <LinearProgress variant="determinate" value={80} />
            </div>
            </div>

            <div className='skillcontainer__skills'>
            <h4>CSS</h4>
            <div className='skillcontainer_slider skillcontainer_slider2'>
            <LinearProgress variant="determinate" color='inherit' value={85} />
            </div>
            </div>

            <div className='skillcontainer__skills'>
            <h4>JAVA SCRIPT</h4>
            <div className='skillcontainer_slider skillcontainer_slider3'>
            <LinearProgress variant="determinate" color="success" value={85} />
            </div>
            </div>

            <div className='skillcontainer__skills'>
            <h4>BOOTSRAP</h4>
            <div className='skillcontainer_slider skillcontainer_slider4'>
            <LinearProgress variant="determinate" color="secondary"value={75} />
            </div>
            </div>

            <div className='skillcontainer__skills'>
            <h4>REACT</h4>
            <div className='skillcontainer_slider skillcontainer_slider5'>
            <LinearProgress variant="determinate"color='inherit' value={90} />
            </div>
            </div>

            <div className='skillcontainer__skills'>
            <h4>PYTHON</h4>
            <div className='skillcontainer_slider skillcontainer_slider6'>
            <LinearProgress variant="determinate" color='success' value={70} />
            </div>
            </div>
            
        </div>
        
    </Element>
  )
}

export default Skillset