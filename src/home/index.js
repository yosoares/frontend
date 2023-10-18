import { Link } from "react-router-dom"
import './inicio.estilo.scss'
import React, {useState, useContext} from "react"
import {AuthContext}  from "../Contexts/AuthContext"
import { toast } from "react-toastify"


export default function Inicio() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signIn } = useContext(AuthContext)

    async function handleLogin(e){
        e.preventDefault()
        let data = {
            email, password
        }

        const responde = await signIn(data)
        if (!responde){
            toast.error('Error de login')
            return 

        } else if ( responde.status === 200){

            const token = responde.data.token
            localStorage.setItem('@tklogin2023', JSON.stringify(token))
            toast.success('Login efetuado com sucesso')
        }
        console.log(responde.status)
    //props: enviar dados de um lugar para o outro
    }

    return (
        <div>
            <div className="loginInicio">
                <h1><center>Login</center></h1>
                <h2><Link to='/Dashboard'>Dashboard</Link></h2>
                <h2><Link to='/Produtos'>Produtos</Link></h2>
            </div>
            <div className="formInicio">
            
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input 
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <label>Senha:</label>
                <input 
                type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button type='submit'>Enviar</button>
               <p>Se cadastra-se <Link to='/Login'>Aqui</Link></p>
            </form>
            </div>
        </div>
        //oie lucas

    )
}