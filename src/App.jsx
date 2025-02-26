import React from 'react'
import Head from './components/header/Head'
import Topcontainer from './components/topcontainer/Topcontainer'
import Skillset from './components/skillset/Skillset'
import Projectcontainer from './components/projectscontainer/Projectcontainer'
import"./App.css"
import Educationcontainer from './components/Education/Educationcontainer'
import Contact from './components/contact/contact'
 

const App = () => {
  return (
    <div>
      <Head/>
      <Topcontainer/>
      <Skillset/>
      <Educationcontainer/>
      <Projectcontainer/>
      <Contact/>
    </div>
  )
}

export default App