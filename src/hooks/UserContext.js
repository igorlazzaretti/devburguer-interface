import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

//Aqui ficam nossas informações
export const UserProvider =  ( {children} ) => {
    const [userData, setUserData] = useState({})

    const putUserData = async (userInfo) => {
      setUserData(userInfo)

      await localStorage.setItem('devburguer:userData', JSON.stringify(userInfo))
    }

    useEffect(() => {
        async function loadUserData() {
          const clientInfo = await JSON.parse(
            localStorage.getItem('devburguer:userData')
          )
    
          if (clientInfo) {
            setUserData(clientInfo)
            //console.log('ConsoleLog do hook useEffect', JSON.parse(clientInfo))
          }
        }
    
        loadUserData()
      }, [])


    return (
        <UserContext.Provider value={{ putUserData, userData,  }}>
            {children}        
        </UserContext.Provider>
    )
}
//Chamamos useUser na nossa Aplicacao para acessar os dados value
export const useUser = () => {
    const context = useContext(UserContext)

    if (!context){
        throw new Error('useUser must be used whith UserContext')
    }

    return context
}


UserProvider.propTypes = {
    children: PropTypes.node
}