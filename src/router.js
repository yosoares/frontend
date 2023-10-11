import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Inicio from './home'

import Login from './login'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />}/>
                <Route path='/Login' element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}