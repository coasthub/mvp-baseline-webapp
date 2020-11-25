import React from 'react'
import Pedidos from './pedidos'
import Produtos from './produtos'
import Config from './config'

function Dashbody(props) {

    const {index,user} = props

    const objectMenu = {
        0:<Produtos/>,
        1:<Pedidos/>,
        2:<Config user={user}/>

    }

    return objectMenu[index]
}

export default Dashbody