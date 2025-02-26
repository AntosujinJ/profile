import React from 'react'
import { Element } from 'react-scroll'
import Education from './Education'
import "./educationcontainer.css"

const Educationcontainer = () => {

    const data=[
        {
            course:"Msc",
            group:"Bioinformatics And Datascience",
            college:"Sathyabama institute of Science and technology",
            year:"2022-2024",
            cgpa:"67%"
        },
        {
            course:"Bsc",
            group:"Computer science",
            college:"Scott christian college",
            year:"2018-2021",
            cgpa:"61%"
        }
    ]
    


  return (
    <Element name="education" className='educationcontainer'>
        <h1>Education</h1>
        <div className='educationcontainer__content'>{
            data.map((data,index)=>{
                return(<Education key={data.key} course={data.course} group={data.group} college={data.college}
                year={data.year} cgpa={data.cgpa}/>)
            })
        }
        </div>

    </Element>
  )
}

export default Educationcontainer