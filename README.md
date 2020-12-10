# Coast Hub - Front-End MVP

## Sum Up

A single page app where the user can manage the orders received from the whatsapp chatbot. A WebApp in ReactJS controlled by login/register system, displaying a dashboard where the user is able to register his own products, manage orders and customize his company info. 

### To Do:

- [x] Firebase Authentication;  
- [ ] Single Page Web App (React.js):  
- [x] Pages controlled based on User; 
    - [x]  Header;  
    - [x]  Menu;  
    - [ ]  Products;  
    - [ ]  Orders;  
    - [ ]  Config;  
- [ ] APIs Implementation:  
    - [x] sellerCreate;  
    - [x] sellerCheck;  
    - [ ] sellerUpdate;  
    - [x] sellerOrder;  
    - [ ] orderUpdate;  
    - [ ] sellerProducts;  
    - [ ] createProduct;  
- [ ] Deploy (coasthub.com.br); 

## Directory

```js
 . 
  > node-modules
  > public
  v src
   > components
   > pages
   > styles
   package.json
 ```
 
 ## Packages (package.json)

 ```json

{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "firebase": "^8.1.1",
    "firebase-tools": "^8.16.2",
    "packages": "^0.0.8",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.0",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.1",
    "socket.io-client": "^3.0.3",
    "web-vitals": "^0.2.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
}

```
## Fetch API Method

```js

//you must import React, useEffect and useState from react

import { React, useEffect, useState } from 'react'

  //here, we're setting a state to an object. It must start with an empty array

    const [obj,setObj] = useState([])

    //useEffects are effect hooks and its working to set our object value as soon as it appears on the screen

    useEffect(() => {
        fetchProfile(setObj)
    },[]);

    /*this is the function we're using to fetch our data with the API. it will receive a function from the useState method to set
    our object value. We take the response, turn into a JSON and then set the result into our object variable.*/

    function fetchProfile(setObj){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"_id":'5fd0fb762d21a07369216c2d'})
        };
        fetch('http://localhost:3030/sellerCheck', requestOptions)
            .then(response => response.json())
            .then(jsonData => {
                setObj([jsonData])
            })
    }

    /* This is the callback function to call within the map method and its gonna be used 
    to turn each item from our API response into dynamic HTML */ 

    const mapProfile = (obj, index) => {
        return (
            <div key={index}>
            <div  className="user-profile">
                <h2>Nome do estabelecimento</h2>
                <h1>{obj.sellerName}</h1>
                <h2>Endereço</h2>
                <h1>{obj.sellerAdress} {obj.sellerAdressNumber}, {obj.sellerAdress2}</h1>
                <h1>CEP {obj.sellerCEP}</h1>
                <h2>Horário de funcionamento</h2>
                <h1>{obj.openTime} às {obj.closeTime}</h1>
                <h2>CNPJ</h2>
                <h1>{obj.sellerDoc}</h1>
                <div className="user-profile">
                <h2>Formas de Pagamento</h2>
                <h1>Cartão de Crédito / Débito / Dinheiro</h1>
                <h2>Entrega</h2>
                <h1>Habilitado</h1>
                <button onClick={()=>{handleEdit()}}>Editar</button>
            </div>
            </div> 
        </div>
        )
    }

    // Then, we return our obj wich must contain an Array and use the mapProfile 'function' within the map method.
    //OBS:It has to be inside a <div> or <></> when its a REACT component
    return (
        <div>
            {obj.map(mapProfile)}
        </div>
    )

}

//At the bottom line, we export our React Component
export default UpdateCard

```
