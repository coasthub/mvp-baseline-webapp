import React from 'react'
import Orders from './orders'

function Pedidos () {

    return (
            <section className="orders">
                <Orders title="NOVOS PEDIDOS"/>
                <Orders title="EM ANDAMENTO"/>
                <Orders title="FINALIZADOS"/>
            </section>
    )
}

export default Pedidos