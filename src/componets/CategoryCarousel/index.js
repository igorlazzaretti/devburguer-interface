import React, { useEffect } from 'react'
import api from '../../services/api'

import CategoryIMGtitle from '../../assets/Home/CATEGORIAS.png'

import { Container, CategoryIMG} from './styles'

function CategoryCarousel() {

    useEffect( () => {
        async function loadCategories(){
            const response = await api.get('categories')

            console.log(response)
        }
        loadCategories()
    },[])



  return ( 
  <Container>
    <CategoryIMG src={CategoryIMGtitle} alt='Logo de Categorias'/>
  </Container>
)}

export default CategoryCarousel
