import React from 'react'
import { ContainerButton } from './styles'
import PropTypes from 'prop-types'

function Button({children}){
  return <ContainerButton> {children} </ContainerButton>
}
export default Button

Button.propTypes = {
  children: PropTypes.string
}