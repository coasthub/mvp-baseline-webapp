import { React , useState } from 'react'
import ProfileCard from './../components/config/profilecard'

function updateProfile(userprofile, delivery) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userprofile, delivery)
    };
    fetch('http://localhost:3001/sellers', requestOptions)
        .then(response => response.json())

}

function Config () {
        
    const [userprofile, setUserProfile] = useState({ displayName:'', address:'', address2:'', userCEP:'', openTime:[], cardPay:true })
    const [delivery, setDelivery] = useState(true)

    const [edit,setEdit] = useState(false)

    const handleEdit = () => {

        return setEdit(!edit)

    }


            if (edit) {
                return (
                    <div className="config-form">
                    <h1>Nome do estabelecimento*</h1>
                    <input
                    className="profile-input"
                    placeholder="Digite o nome do estabelecimento"
                    type="text"
                    autoFocus
                    required
                    value={userprofile.displayName}
                    onChange={(event) => setUserProfile(event.target.value)}
                    />
                     <h1>CEP*</h1>
                    <input
                    className="profile-input"
                    placeholder="00.0000-000"
                    type="text"
                    autoFocus
                    required
                    value={userprofile.userCEP}
                    onChange={(event) => setUserProfile(event.target.value)}
                    />
                     <h1>Endereço*</h1>
                    <input
                    className="profile-input"
                    placeholder="Rua"
                    type="text"
                    autoFocus
                    required
                    value={userprofile.address}
                    onChange={(event) => setUserProfile(event.target.value)}
                    />
                    <div className="config-row">
                        <div className="config-form">
                            <h1>Número*</h1>
                            <input
                            className="profile-input"
                            placeholder="Número da Rua"
                            type="text"
                            autoFocus
                            required
                            />
                        </div>
                        <div className="config-form">
                            <h1>Complemento</h1>
                            <input
                            className="profile-input"
                            placeholder="Apartamento/Bloco"
                            type="text"
                            autoFocus
                            required
                            value={userprofile.address2}
                            onChange={(event) => setUserProfile(event.target.value)}
                            />
                        </div>
                    </div>
                    <h1>CNPJ</h1>
                    <input
                    className="profile-input"
                    placeholder="XX. XXX. XXX/XXXX-XX"
                    type="text"
                    autoFocus
                    required
                    />
                         <h1>Delivery</h1>
                        {delivery ? (
                            <>
                                <button onClick={() => {setDelivery(false)}}>Desabilitar</button>
                            </>
                        ) : (
                            <>
                            <button onClick={() => {setDelivery(true)}}>Habilitar</button>
                            </>
                        )}
                    <div className="config-row">
                        <div className="config-form">
                            <h1>Dias de funcionamento*</h1>
                            <input
                            className="profile-input"
                            placeholder="Ex: Segunda à sexta"
                            type="text"
                            autoFocus
                            required
                            value={userprofile.openTime}
                            onChange={(event) => setUserProfile(event.target.value)}
                            />
                        </div>
                        <div className="config-form">
                            <h1>Horário de funcionamento*</h1>
                            <input
                            className="profile-input"
                            placeholder="Ex: 8:30 às 12:30"
                            type="text"
                            autoFocus
                            required
                            />
                        </div>
                    </div>
               
                    <button onClick={()=>{updateProfile(userprofile, delivery, handleEdit())}}>Salvar</button>
                    <button className="cancel" onClick={()=>{handleEdit()}}>Cancelar</button>
                    </div>
                )
                
            } else {
                    
                return  (
                    
                    <ProfileCard edit={edit} setEdit={setEdit}/>
            )
        }
}

export default Config