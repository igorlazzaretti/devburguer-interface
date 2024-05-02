import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../utils/formatCurrency'

import OffersIMGtitle from '../../assets/Home/OFERTAS.png'

import { Button, CategoryIMG, Container, ContainerItems, Image } from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer)
          .map(product => {
            return {...product, formatedPrice: formatCurrency(product.price)}
      })

      setOffers(onlyOffers)
      //   console.log('consoel do carousel response',response.data)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 4 },
  ]

  return (
    <Container>
      <CategoryIMG src={OffersIMGtitle} alt="Logo de Ofertas" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map((product) => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto do produto em oferta" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button>Peça Agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}

