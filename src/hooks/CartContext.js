import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})


//Aqui ficam nossas informações
export const CartProvider =  ( {children} ) => {
    const [cartProducts, setCartProducts] = useState({})

    const putProductInCart = async product => {
      console.log(product)
      
    }
    useEffect(() => {
        async function loadUserData() {
          const clientCartData = await JSON.parse(
            localStorage.getItem('devburguer:cartInfo')
          )
    
          if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData))
            //console.log('ConsoleLog do hook useEffect', JSON.parse(clientInfo))
          }
        }
    
        loadUserData()
      }, [])


    return (
        <CartContext.Provider value={{ putProductInCart, cartProducts }}>
            {children}        
        </CartContext.Provider>
        
    )
}
//Chamamos useUser na nossa Aplicacao para acessar os dados value
export const useCart = () => {
    const context = useContext(CartContext)

    if (!context){
        throw new Error('useCart must be used whith CartContext')
    }

    return context
}


CartProvider.propTypes = {
    children: PropTypes.node
}