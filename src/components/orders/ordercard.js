import React from 'react'

function OrderCards (props) {

    const {title} = props

    const order = [
        {
            products: [
              "X simples",
              "Coca cola 2LTS"
            ],
            _id: "5fbaf525f4a53a1c0fd3eb46",
            orderNumber: 2,
            clientId: "2fb892282fa9153941cb5233",
            clientName: "Bruno Jorgenson",
            clientAdress: "Rua Monsenhor 489, Santo Antônio - Joinville Bloco B, Apto 204",
            orderPrice: 15,
            orderTimestamp: "2020-11-28T04:09:25.000Z",
            sellerId: "5fb99d4a3ef2ad16b444ade0",
            __v: 0
          },
          {
            products: [
              "5fb9a7a83ef2ad16b444ade6",
              "5fb9a7753ef2ad16b444ade5"
            ],
            _id: "5fbaf62cf4a53a1c0fd3eb47",
            orderNumber: 3,
            clientId: "3fb892282fa9153941cb5233",
            clientName: "Sirlei Martins",
            clientAdress: "Rua Guanabara 489, Guanabara - Joinville Bloco B, Apto 204",
            orderPrice: 15.5,
            orderTimestamp: "2020-11-27T04:09:25.000Z",
            sellerId: "5fb99d4a3ef2ad16b444ade0",
            __v: 0
          },
          {
            products: [
              "5fb9a7253ef2ad16b444ade3",
              "5fb9a7253ef2ad16b444ade3",
              "5fb9a7da3ef2ad16b444ade7"
            ],
            _id: "5fbaf66df4a53a1c0fd3eb48",
            orderNumber: 4,
            clientId: "4fb892282fa9153941cb5233",
            clientName: "Luis Martins",
            clientAdress: "Rua Guanabara 489, Guanabara - Joinville Bloco B, Apto 204",
            orderPrice: 18,
            orderTimestamp: "2020-11-30T04:09:25.000Z",
            sellerId: "5fb99d4a3ef2ad16b444ade0",
            __v: 0
          },
          {
            products: [
              "5fb9a7413ef2ad16b444ade4",
              "5fb9a7253ef2ad16b444ade3"
            ],
            _id: "5fbaf525f4a53a1c0fd3eb46",
            orderNumber: 2,
            clientId: "2fb892282fa9153941cb5233",
            clientName: "Bruno Jorgenson",
            clientAdress: "Rua Monsenhor 489, Santo Antônio - Joinville Bloco B, Apto 204",
            orderPrice: 15,
            orderTimestamp: "2020-11-28T04:09:25.000Z",
            sellerId: "5fb99d4a3ef2ad16b444ade0",
            __v: 0
          },
          {
            products: [
              "5fb9a7a83ef2ad16b444ade6",
              "5fb9a7753ef2ad16b444ade5"
            ],
            _id: "5fbaf62cf4a53a1c0fd3eb47",
            orderNumber: 3,
            clientId: "3fb892282fa9153941cb5233",
            clientName: "Sirlei Martins",
            clientAdress: "Rua Guanabara 489, Guanabara - Joinville Bloco B, Apto 204",
            orderPrice: 15.5,
            orderTimestamp: "2020-11-27T04:09:25.000Z",
            sellerId: "5fb99d4a3ef2ad16b444ade0",
            __v: 0
          },
          {
            products: [
              "5fb9a7253ef2ad16b444ade3",
              "5fb9a7253ef2ad16b444ade3",
              "5fb9a7da3ef2ad16b444ade7"
            ],
            _id: "5fbaf66df4a53a1c0fd3eb48",
            orderNumber: 4,
            clientId: "4fb892282fa9153941cb5233",
            clientName: "Luis Martins",
            clientAdress: "Rua Guanabara 489, Guanabara - Joinville Bloco B, Apto 204",
            orderPrice: 18,
            orderTimestamp: "2020-11-30T04:09:25.000Z",
            sellerId: "5fb99d4a3ef2ad16b444ade0",
            __v: 0
          }
        
    ];

    const loadOrders = (card, index) => {

        return(
            <div className='Card' key={index}>
                    <h1>{card.clientName}</h1>
                    <h2>R${card.orderPrice}</h2>
                    <p>{card.clientAdress}</p>
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
