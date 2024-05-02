import React from 'react'
import ReactDOM from 'react-dom/client'

//Importamos as Rotas
import Routes from './routes/routes'

//Toast: notificações para o Usuário
import { ToastContainer } from 'react-toastify';


import GlobalStyles from './styles/globalStyles'

import AppProvider from './hooks';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <AppProvider>
    <Routes />  </AppProvider>
    <ToastContainer />
    <GlobalStyles />
  </>
)
