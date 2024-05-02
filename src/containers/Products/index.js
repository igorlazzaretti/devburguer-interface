import React, { useEffect, useState } from 'react'

import ProductsIMG from '../../assets/Products/home-main-img-2dir.png'
import {CardProduct} from '../../componets'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsBanner,
  CategoryButton,
  CategoryNav,
  ProductsContainer,
} from './styles'
import api from '../../services/api'

export function Products() {
  // Chamada API para Nav
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState([0])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])



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
          { filteredProducts && filteredProducts.map(product => (

            <CardProduct key={product.id} product={product}/>

          ))}

      </ProductsContainer>
  
    </Container>
  )
}
