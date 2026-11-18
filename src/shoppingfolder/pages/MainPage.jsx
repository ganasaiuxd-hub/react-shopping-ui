
import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import WomenCoolections from '../components/WomenCoolections'

import {Gents, Ladies} from '../data'

const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)

  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <WomenCoolections ladiesFashion={ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage