import { Link } from "react-router-dom"
import './inicio.estilo.scss'
import { useState } from "react"


export default function Inicio() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(e){
        e.preventDefault()
    console.log(email,password) 
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