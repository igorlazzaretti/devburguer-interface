import React from 'react'

import HomeIMG from '../../assets/Home/HomeBanner.png'
import { Container, HomeBanner} from './styles'
import CategoryCarousel from '../../componets/CategoryCarousel'
import OffersCarousel from '../../componets/OffersCarousel'

function Home() {
  return ( 
  <Container>
    <HomeBanner src={HomeIMG} alt='Logo da Home'style={{ width: '100%', height:'30vh', objectFit:'cover' }}/>
    <CategoryCarousel></CategoryCarousel>
    <OffersCarousel></OffersCarousel>
  </Container>
)}

export default Home
