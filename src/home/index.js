import { Link } from "react-router-dom"
import './inicio.estilo.scss'

export default function Inicio() {

    return (
        <div>
            <div className="loginInicio">
                <h1><center>Login</center></h1>
            </div>
            <div className="formInicio">
            
            <form>
                <label>Email:</label>
                <input type='text' />
                <br />

                <label>Senha:</label>
                <input type='password' />
                <br/>
                
                <button>Enviar</button>
               <p>Se cadastra-se <Link to='/Login'>Aqui</Link></p>
            </form>
            </div>
        </div>

    )
}