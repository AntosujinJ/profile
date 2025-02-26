import React from 'react'
import { Link } from 'react-scroll'
import "./topcontent.css"
import Resume from "../../img/Antosujin j.pdf"

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
            <h1>J ANTO SUJIN</h1>
            <p>Web and App Developer</p>
            <a href={Resume} download="Antosujin_Resume.pdf">
          <button className="topcontentdownload">Download CV</button>
        </a>
            <Link to="skills" smooth={true} duration={500}>
                <button className='topcontentskills'>Skills</button>
            </Link>
        </div>

    </div>
  )
}

export default Topcontent