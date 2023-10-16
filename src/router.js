import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Inicio from './home'

import Login from './login'

import Produtos from './produtos'

import Dashboard from './dashboard'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path='/Produtos' element={<Produtos />}/>
                <Route path='/Dashboard' element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    )
}