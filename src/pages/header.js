import React from 'react'
import logo from './../styles/logocoast-removebg-preview.png'
import Menu from '../components/menu'


const Hero = (props) => {

    const { handleLogout, user} = props

    function showUserName (user){

        if(user.displayName){
            return (<h1>{user.email}</h1>)
        } else {
            return (<h1>Cadastre seu estabelecimento em "Configurações"</h1>)
        }

    }

    return (
        <section className="hero">
            <nav>
                <div className="row">
                    <img className="logonav" src={logo} alt="logo"/>
                    <h1>Coast Hub</h1>
                </div>
                <div className="row">
                    {showUserName(user)}
                <button onClick={handleLogout}>Sair</button>
                </div>
            </nav>
            <Menu user={user}/>
        </section>
    )
}

export default Hero