import logo from './logo.svg';
import { useState, useEffect } from 'react'
import socketIo from 'socket.io-client'
import './App.css';

function fetchingData() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("http://localhost:3030/sellerOrders", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ "sellerId": "5fb99d4a3ef2ad16b444ade0" })
    })
      .then((res) => res.json())
      .then(setOrders)

      const socket = socketIo("http://localhost:3030/", {
        transports: ['websocket']
      })

      socket.on('newOrder', (order) => {
        setOrders((pastOrders) => [order, ...pastOrders])
      })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {orders.map(order =>(
          <p key={order._id}>{order.clientName}</p>
        ))}
      </header>
    </div>
  );
}

export default fetchingData;
