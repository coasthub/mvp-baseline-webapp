import React, { useEffect, useState } from 'react'

function UpdateCard(props) {

    const {edit, setEdit} = props
    const [obj,setObj] = useState([])
    
    const handleEdit = () => {

        return setEdit(!edit)

    }

    useEffect(() => {
        fetchProfile(setObj)
    },[]);

    function fetchProfile(setObj){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"_id":'5fcf7631a96ab82bca71e516'})
        };
        fetch('http://localhost:3030/sellerCheck', requestOptions)
            .then(response => response.json())
            .then(jsonData => {
                setObj([jsonData])
            })
    }


    const mapProfile = (obj, index) => {
        return (
            <div key={index}>
            <div  className="user-profile">
                <h2>Nome do estabelecimento</h2>
                <h1>{obj.sellerName}</h1>
                <h2>Endereço</h2>
                <h1>{obj.sellerAdress} {obj.sellerAdressNumber}, {obj.sellerAdress2}</h1>
                <h1>CEP {obj.sellerCEP}</h1>
                <h2>Horário de funcionamento</h2>
                <h1>{obj.openTime} às {obj.closeTime}</h1>
                <h2>CNPJ</h2>
                <h1>{obj.sellerDoc}</h1>
                <div className="user-profile">
                <h2>Formas de Pagamento</h2>
                <h1>Cartão de Crédito / Débito / Dinheiro</h1>
                <h2>Entrega</h2>
                <h1>Habilitado</h1>
                <button onClick={()=>{handleEdit()}}>Editar</button>
            </div>
            </div> 
        </div>
        )
    }

    return (
        <div>
            {obj.map(mapProfile)}
        </div>
    )

}

export default UpdateCard
