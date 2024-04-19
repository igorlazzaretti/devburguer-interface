import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './containers/Login'
import Register from './containers/Register'

//Toast: notificações para o Usuário
import { ToastContainer } from 'react-toastify';


import GlobalStyles from './styles/globalStyles'

import {UserProvider} from './hooks/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
    <Login />  </UserProvider>
    <ToastContainer />
    <GlobalStyles />
  </>
)
