import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './containers/Login'
import Register from './containers/Register'

//Toast: notificações para o Usuário
import { ToastContainer, toast } from 'react-toastify';


import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login />
    <ToastContainer />
    <GlobalStyles />
  </>
)
