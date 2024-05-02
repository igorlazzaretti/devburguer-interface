/* eslint-disable react/forbid-prop-types */
import React from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice >{product.formatedPrice}</ProductPrice>
        <Button  onClick={console.log('oi')}>
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
CardProduct.defaultProps = {
  product: null
}
