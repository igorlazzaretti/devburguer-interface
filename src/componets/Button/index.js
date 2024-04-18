import React from 'react'
import { ContainerButton } from './styles'
import PropTypes from 'prop-types'

function Button({children}){
  return <ContainerButton style={{marginTop:23, marginBottom:12}} > {children} </ContainerButton>
}
export default Button

Button.propTypes = {
  children: PropTypes.string
}