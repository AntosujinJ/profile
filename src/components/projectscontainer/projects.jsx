import React, { useState } from 'react'
import "./project.css"

const Projects = ({ img, link, title, desc, keys }) => {

    const [show, setshow] = useState(false);
    return (
        <div>
            <a href={link}>
                <div className='pro'
                    onMouseEnter={() => setshow(true)}
                    onMouseLeave={() => setshow(false)}>
                    {
                        show ? (
                            <div className='pro__content'>
                                <h2>{title}</h2>
                                <p>{desc}</p>
                            </div>) :
                            <div>
                                <img src={img} alt="img" />
                            </div>
                    }


                </div>

            </a>
        </div>
    )
}

export default Projects