import { React, useState } from 'react'
import fire from './../firebase'


function Config (props) {

    const {user} = props
    const [edit, setEdit] = useState(false)
    const [displayname, setDisplayName] = useState('')
    const [phone, setPhone] = useState('')


    const handleEdit = () => {
    
        return setEdit(!edit)

    }

    const updateProfile = () => {

        if(displayname != ''){
            fire.auth().currentUser.updateProfile({
                displayName: displayname,
            }).catch(function(error) {
                // An error happened.
              });
            handleEdit()
        }
        else {
            window.alert('Preencha todos os campos')
        }
    }
        
        {
            if (!edit) {
                return (
                    <div className="user-profile">
                        <h2>Nome do estabelecimento</h2>
                        <h1>{user.displayName}</h1>
                        <h2>Email:</h2>
                        <h1>{user.email}</h1>
                        <h2>Celular</h2>
                        <h1>{user.phoneNumber}</h1>
                        <div className="user-profile">
                        <h2>Formas de Pagamento</h2>
                        <h1>Cartão de Crédito / Débito / Dinheiro</h1>
                        <h2>Entrega</h2>
                        <button onClick={()=>{handleEdit()}}>Editar</button>
                        </div>
                    </div>
                )
            } else {
                return  (
                <div className="user-profile">
                    <h2>Nome do estabelecimento</h2>
                        <input
                            type="text"
                            autoFocus
                            required
                            value={displayname}
                            onChange={(event) => setDisplayName(event.target.value)}
                        />
                    <button onClick={()=>{updateProfile()}}>Salvar</button>
                </div>
            )
        }
    }
}

export default Config