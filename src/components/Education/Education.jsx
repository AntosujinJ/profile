import React, { useState } from 'react'
import "./education.css"

const Education = ({ key, course, group, year, cgpa, college }) => {

    const [show, setshow] = useState(false)

    return (
        <div >
            <div className='education'
                onMouseEnter={() => setshow(true)}
                onMouseLeave={() => setshow(false)}>


                {
                    show ? <div className='education__1'>
                        <h2>{college}</h2>
                            <h3>{year}</h3>
                            <h4>{cgpa}</h4>

                        
                    </div> :
                        <div className='education__2'>
                            
                            <h2>{course}</h2>
                            <h3>{group}</h3>
                        </div>
                }



            </div>

        </div>
    )
}

export default Education