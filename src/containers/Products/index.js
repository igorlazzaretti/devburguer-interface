import React, { useEffect, useState } from 'react'

import ProductsIMG from '../../assets/Products/home-main-img-2dir.png'
import CardProducts from '../../componets/CardProducts'
import {
  Container,
  ProductsBanner,
  CategoryButton,
  CategoryNav,
  ProductsContainer,
} from './styles'
import api from '../../services/api'

function Products() {
  // Chamada API para Nav
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState([0])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')
      console.log(data)
      setProducts(data)
     
    }

    loadProducts()
    loadCategories()
  }, [])

  return (
    <Container>
      <ProductsBanner
        src={ProductsIMG}
        alt="Logo da Home"
        style={{ width: '100%', height: '30vh' }}
      />
      <CategoryNav>
        {categories &&
          categories.map(category => (
            <CategoryButton 
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {setActiveCategory(category.id)}}
            > 
              {category.name}
            </CategoryButton>
          ))}
      </CategoryNav>

      <ProductsContainer>
          { products && products.map(product => (

            <CardProducts key={product.id} product={product}/>

          ))}


      </ProductsContainer>
    
    
    </Container>
  )
}

export default Products
