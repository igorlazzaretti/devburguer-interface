import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

//Aqui ficam nossas informações
export const UserProvider =  ( {children} ) => {
    const user = { name: 'Rodolfo', age: 99 }

    return (
        <UserContext.Provider value={{ user }}>
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