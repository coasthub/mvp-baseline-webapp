import React from 'react'
import { useState , useEffect } from 'react'
import Dashboard from './../components/dashboard'

function Menu(props) {

    const {user} = props
    const [index,setIndex] = useState('0')


    return ( 
        <div>
        <section className="navbar-menu">
            <button onClick={() => setIndex('0')}>Produtos</button>
            <button onClick={() => setIndex('1')}>Pedidos</button>
            <button onClick={() => setIndex('2')}>Configurações</button>
        </section>
        <Dashboard index={index} user={user}/>
        </div>
    )
} 

export default Menu