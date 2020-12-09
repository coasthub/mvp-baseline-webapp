import React from 'react'

import UpdateCard from './profilemap'

function ProfileCard (props) {

    const {edit, setEdit} = props

    return (
        <div>
            <UpdateCard edit={edit} setEdit={setEdit}/>
        </div>
    )
}

export default ProfileCard