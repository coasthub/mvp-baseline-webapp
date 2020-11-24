import React from 'react'
import './../styles/login-page.css'
import useState from 'react'


function LoginForm(props){

    const { email,
            password,
            setEmail,
            setPassword,
            handleLogin,
            handleSignUp,
            emailError,
            passwordError,
            hasAccount,
            setHasAccount
        } = props

    return (
       
        <section className="login">
            <div className="loginContainer">
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
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>
                                Logar
                            </button>
                            <p>Ainda não tem conta?<span onClick={() => setHasAccount(!hasAccount)}>Criar Conta</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>
                                Cadastrar-se
                            </button>
                            <p>Já possui conta?<span onClick={() => setHasAccount(!hasAccount)}>Logar</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default LoginForm