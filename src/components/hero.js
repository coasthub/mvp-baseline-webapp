import React from 'react'
import logo from './../styles/logocoast-removebg-preview.png'
import Menu from './../components/menu'


const Hero = (props) => {


    const { handleLogout, user} = props
    return (
        <section className="hero">
            <nav>
                <div className="row">
                    <img className="logonav" src={logo} alt="logo"/>
                    <h1>Coast Hub</h1>
                </div>
                <div className="row">
                <h1>{user.email}  </h1>
                <button onClick={handleLogout}>Sair</button>
                </div>
            </nav>
            <Menu />
        </section>
    )
}

export default Hero