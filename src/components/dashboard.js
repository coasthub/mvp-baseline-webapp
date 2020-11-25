import React from 'react'
import Dashbody from './dashbody'


function Dashboard(props) {

    const {index, user} = props

    return (
            <section className="dashboard">
                <Dashbody user={user} index={index}/>
            </section>
    )
}

export default Dashboard