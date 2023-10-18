import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import apiLocal from '../API/api'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    //is a component
    const [user, setUser] = useState()
    const [token, setToken] = useState('')
    
    const isAutenticado = !!user
    //!!= se ele for verdadeiro

    //função que busque as inf. no banco de dados

    async function signIn({email, password}){
        try{
            const resposta = await apiLocal.post('/LoginUsuario', {
                email, password
            })
            return resposta
            //retorna pro arquivo de login
            //por aqui também pode fazer a aplicação
        } catch (err) {

        }
    }

    return (
        <AuthContext.Provider value={{signIn}}>
            {children}
        </AuthContext.Provider>
    )
}