import React from 'react'
import Dashbody from './dashbody'
import { useState , useEffect } from 'react'

function Dashboard(props) {

    const {index} = props

    return (
            <section className="dashboard">
                <Dashbody index={index}/>
            </section>
    )
}

export default Dashboard