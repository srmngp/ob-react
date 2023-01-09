import React from 'react'
import {useLocation} from 'react-router-dom'

const StatePage = () => {

    const location = useLocation()

    console.log(location);
    // console.log(location.state.online) no está bien hecho :/
    // console.log(location.search)

    return (
        <div>
            <h1>State: </h1>
        </div>
    )
}

export default StatePage
