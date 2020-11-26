import { React , useState } from 'react'
import ProfileCard from './../components/config/profilecard'
import fire from './../firebase'


function Config (props) {
        
    const {user} = props
    const [edit, setEdit] = useState(false)
    const [displayname, setDisplayName] = useState(user.displayName)


    const handleEdit = () => {

        return setEdit(!edit)

    }

    const updateProfile = () => {

        if(displayname !== ''){
            fire.auth().currentUser.updateProfile({
                displayName: displayname,
            })
            .then(()=>{
                window.location.reload()
            });
            
        }
        else {
            window.alert('Preencha todos os campos')
        }
    }


            if (edit) {
                return (
                    <div className="config-form">
                    <h1>Nome do estabelecimento*</h1>
                    <input
                    className="profile-input"
                    placeholder="Ex: Hamburgueria do Zé"
                    type="text"
                    autoFocus
                    required
                    value={displayname}
                    onChange={(event) => setDisplayName(event.target.value)}
                    />
                     <h1>CEP*</h1>
                    <input
                    className="profile-input"
                    placeholder="00.0000-000"
                    type="text"
                    autoFocus
                    required
                    />
                     <h1>Endereço*</h1>
                    <input
                    className="profile-input"
                    placeholder="Rua"
                    type="text"
                    autoFocus
                    required
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
                    <div className="config-row">
                        <div className="config-form">
                            <h1>Dias de funcionamento*</h1>
                            <input
                            className="profile-input"
                            placeholder="Ex: Segunda à sexta"
                            type="text"
                            autoFocus
                            required
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
                    <button onClick={()=>{updateProfile()}}>Salvar</button>
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