import React from 'react'

import PropTypes from 'prop-types'

import Button from '../Button'
import{Container, Image, ProductName, ProductPrice} from './styles'

function CardProducts( {product}) {
    return(
        <Container>
            <Image src={product.url} alt="Imagem do Produto"/>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <Button>Adicionar</Button>
        </Container>
    )
}

export default CardProducts

CardProducts.propTypes = {
    product: PropTypes.object
  }