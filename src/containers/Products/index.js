import React, { useEffect, useState } from 'react'

import ProductsIMG from '../../assets/Products/home-main-img-2dir.png'
import {
  Container,
  ProductsBanner,
  CategoryButton,
  CategoryNav,
} from './styles'
import api from '../../services/api'

function Products() {
  // Chamada API para Nav
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState([0])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
      //   console.log('consoel do carousel response',response.data)
    }
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
    </Container>
  )
}

export default Products
