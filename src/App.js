import { React, useState , useEffect } from 'react'
import './styles/login-page.css'
import LoginForm from './components/LoginForm'
import fire from './firebase'
import Hero from './pages/header'


function App(){

    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmpass, setConfirmPass] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [hasAccount, setHasAccount] = useState(false)

    const clearInputs = () => {
        
        setEmail('')
        setPassword('')
    }

    const clearError = () => {
        
        setEmailError('')
        setPasswordError('')
    }

    const handleLogin = () => {
        
        clearInputs()
        clearError()

        fire
        .auth()
            .signInWithEmailAndPassword(email,password)
            .catch((error) => {
               switch (error.code) {
                   case "auth/invalid-email":
                   case "auth/user-not-found":
                    setEmailError(error.message)
                       break;
                   case "auth/wrong-password":
                    setPasswordError(error.mesage)
                       break;
               }
            })
    }

    const handleSignUp = () => {

        if(password == confirmpass){
            clearInputs()
            clearError()

            fire
            .auth()
                .createUserWithEmailAndPassword(email,password)
                .catch((error) => {
                    switch (error.code) {
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":
                            setEmailError(error.message)
                            break;
                        case "auth/weak-password":
                            setPasswordError(error.mesage)
                            break;
                }
        })
        } else {
            setPasswordError('Senha e confirmação de senha divergentes')
        }

    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs()
                setUser(user)
            }else{
                setUser('')
            }
        })
    }

    const handleLogout = () => {
       
        fire.auth().signOut()
    }

    useEffect(() => {
        authListener()
    }, [])

    return (
        <div className="App">
        {user ? (
             <Hero handleLogout={handleLogout} user={user}/>
        ) : (
            <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            confirmpass={confirmpass}
            setConfirmPass={setConfirmPass}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            setEmailError={setEmailError}
            setPasswordError={setPasswordError}
            emailError={emailError}
            passwordError={passwordError}
            />   
        )}
        </div>
    )
}

export default App