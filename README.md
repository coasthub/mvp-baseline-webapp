## Coast Hub - Front-End MVP

# Sum Up

A single page app where the user can manage the orders received from the whatsapp chatbot. A WebApp in ReactJS controlled by login/register system, displaying a dashboard where the user is able to register his own products, manage orders and customize his company info. 

### To Do:

[x] Firebase Authentication; \
[ ] Single Page Web App (React.js): \
    --[x]  Pages controlled based on User; \
    --[x]  Header; \
    --[x]  Menu; \
    --[ ]  Products; \
    --[ ]  Orders; \
    --[ ]  Config; \
[ ] APIs Implementation: \
    --[x] sellerCreate; \
    --[x] sellerCheck; \
    --[ ] sellerUpdate; \
    --[x] sellerOrder; \
    --[ ] orderUpdate; \
    --[ ] sellerProducts; \
    --[ ] createProduct; \
[ ] Deploy (coasthub.com.br); 

# Directory

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
 
 # Packages (package.json)

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
