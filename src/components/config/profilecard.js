import React from 'react'
import fire from './../../firebase'

function ProfileCard (props) {

    const {edit, setEdit} = props

    const handleEdit = () => {

        return setEdit(!edit)

    }

    const user = fire.auth().currentUser

    return (
        <div>
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
        </div>
    )
}

export default ProfileCard