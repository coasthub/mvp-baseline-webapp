import React from 'react'
import Orders from '../components/orders/orders'

function Pedidos () {

    return (
            <section className="orders">
                <Orders title="NOVOS"/>
                <Orders title="ANDAMENTO"/>
                <Orders title="FINALIZADOS"/>
            </section>
    )
}

export default Pedidos