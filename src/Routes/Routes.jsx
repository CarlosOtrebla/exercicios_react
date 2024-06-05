import {Routes, Route} from 'react-router-dom'
import {Contador} from '../pages/contador/Contador'
import { ListaDePokemons } from '../pages/listaDePokemons/listaDePokemons'

export function Rotas(){
    return(
        <Routes>
            <Route path='/contador' element={<Contador/>} />
            <Route path='/lista-de-pokemon' element={<ListaDePokemons/>}/>
        </Routes>

    )
}