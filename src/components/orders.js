import React from 'react'
import OrderCards from './ordercard'

function Orders (props) {

    const {title} = props

    return (
        <div className="order-view">
            <h2>{props.title}</h2>
            <OrderCards title={props.title}/>
        </div>
    )
}

export default Orders