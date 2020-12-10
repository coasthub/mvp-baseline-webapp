import { React, useState, useEffect } from 'react'


function OrderCards () {

    const [order,setOrder] = useState([])

    useEffect(() => {
      checkOrders(setOrder) 
    },[])


    function checkOrders(setOrder){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"sellerId":'5fb99d4a3ef2ad16b444ade0'})
      };
      fetch('http://localhost:3030/sellerOrders', requestOptions)
        .then(response => response.json())
        .then(jsonData => {
            setOrder(jsonData)
        })
  }

   
    function loadOrders(order, index){
        return (
                <div className='Card' key={index}>
                    <h1>{order.clientName}</h1>
                    <h2>R${order.orderPrice}</h2>
                    <p>{order.clientAdress}</p>
                </div>
        )
    }

    return (
        <div>
            {order.map(loadOrders)}
        </div>
    )
}

export default OrderCards


