import React from 'react'
import Pedidos from './pedidos'
import Produtos from './produtos'
import Config from './config'

function Dashbody(props) {

    const {index} = props

    if (index == 0) {
        return <Produtos/>
    } if (index == 1) {
        return <Pedidos/>
    } if (index == 2) {
        return <Config/>
    }
}

export default Dashbody