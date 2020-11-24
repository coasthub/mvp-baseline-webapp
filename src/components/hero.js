import React from 'react'
import logo from './../styles/logocoast-removebg-preview.png'


const Hero = (props) => {


    const { handleLogout, user} = props
    return (
        <section className="hero">
            <nav>
                <div className="row">
                    <img className="logonav" src={logo} alt="logo"/>
                    <h1>CoastHub</h1>
                </div>
                <h1>{user.userEmail}</h1>
                <button onClick={handleLogout}>Sair</button>
            </nav>
        </section>
    )
}

export default Hero