import React from 'react'
import './../styles/login-page.css'
import logo from './../styles/logocoast-removebg-preview.png'


function LoginForm(props){

    const { email,
            password,
            setConfirmPass,
            confirmpass,
            setEmail,
            setPassword,
            handleLogin,
            handleSignUp,
            emailError,
            passwordError,
            hasAccount,
            setHasAccount,
            setPasswordError,
            setEmailError
        } = props

        function buttonSwitch(){
            
            setHasAccount(!hasAccount)
            
            setEmail('')
            setPassword('')
            setEmailError('')
            setPasswordError('')
        }

    return (
       
        <section className="login">
            <div className="loginContainer">
            <img className="logoform" src={logo} alt="logo"/>
                <h1>Coast Hub</h1>
                <label>Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Senha</label>
                <input
                type="password"
                autoFocus
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div>
                    {hasAccount ? (
                               <></>
                    ) : (
                        <>
                        <label>Confirmar Senha</label>
                        <input
                        type="password"
                        autoFocus
                        required
                        value={confirmpass}
                        onChange={(event) => setConfirmPass(event.target.value)}
                        />
                    </>
                    )}
                </div>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>
                                Logar
                            </button>
                            <p>Ainda não tem conta?<span onClick={() => {buttonSwitch()}}>Criar Conta</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>
                                Cadastrar-se
                            </button>
                            <p>Já possui conta?<span onClick={() => {buttonSwitch()}}>Logar</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default LoginForm