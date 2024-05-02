import React from 'react'

import HomeIMG from '../../assets/Home/HomeBanner.png'
import {CategoryCarousel, OffersCarousel} from '../../componets'


import { Container, HomeBanner} from './styles'

export function Home() {
  return ( 
  <Container>
    <HomeBanner src={HomeIMG} alt='Logo da Home'style={{ width: '100%', height:'30vh', objectFit:'cover' }}/>
    <CategoryCarousel></CategoryCarousel>
    <OffersCarousel></OffersCarousel>
  </Container>
)}


