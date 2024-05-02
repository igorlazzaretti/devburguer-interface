import React from 'react'

import PropTypes from 'prop-types'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

function AppProvider({ children }) {
    return (
      <UserProvider>
        <CartProvider>{children}</CartProvider>
      </UserProvider>
    )
  }
  
  AppProvider.propTypes = {
    children: PropTypes.node
  }

  
  export default AppProvider