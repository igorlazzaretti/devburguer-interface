import React from 'react'

import HomeIMG from '../../assets/Home/HomeBanner.png'
import { Container, HomeBanner} from './styles'
import CategoryCarousel from '../../componets/CategoryCarousel'

function Home() {
  return ( 
  <Container>
    <HomeBanner src={HomeIMG} alt='Logo da Home'/>
    <CategoryCarousel></CategoryCarousel>
  </Container>
)}

export default Home
