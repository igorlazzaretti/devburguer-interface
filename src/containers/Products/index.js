import React from 'react'

import ProductsIMG from '../../assets/Products/home-main-img-2dir.png'
import { Container, ProductsBanner} from './styles'


function Products() {
  return ( 
  <Container>
    <ProductsBanner src={ProductsIMG} alt='Logo da Home'style={{ width: '100%', height:'30vh', objectFit:'cover' }}/>

  </Container>
)}

export default Products
