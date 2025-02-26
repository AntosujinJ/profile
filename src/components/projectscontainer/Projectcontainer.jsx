import React from 'react'
import { Element } from 'react-scroll'
import Projects from './projects'
import "./projectcontainer.css"

const Projectcontainer = () => {
 
    const data=[
        
        {
            title:"Mining Tcga DataBase for Genes Associated with Colon cancer",
            img:"https://media.istockphoto.com/id/1292415378/vector/big-genomic-data-visualization.jpg?s=612x612&w=0&k=20&c=hF5764OjXOgwYI4vufCt6_iWCekd3tZTrKHR2Z-Ovuc=",
            desc:"A comprehensive analysis of genes associated with colon cancer using data mining techniques applied to The Cancer Genome Atlas tcga database",
            link:"www.google.com"
        },
        {
            title:"weather prediction by city name",
            img:"https://superdevresources.com/wp-content/uploads/2014/02/Weather-Api.jpg",
            desc:"A dynamic weather application built with React, HTML, and CSS, utilizing a weather API to provide real-time forecasts.",
            link:"https://antosujinj.github.io/weather/"
        }

    ]

  return (
    
    <Element name="project" className='projectcontainer'>
        <h1>Projects</h1>
        <p>Here are some Projects that I did</p>
        <div className='projectcontainer__projects'>

            {data.map((data,index)=>{
                return(
                    <Projects key={(data.index)} title={data.title} img={data.img} desc={data.desc} link={data.link}/>
                )
})}

        </div>

    </Element>
       
)
}

export default Projectcontainer