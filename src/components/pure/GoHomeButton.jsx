import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoHomeButton = () => {

    const navigation = useNavigate()

    return (
        <div>
            <button onClick={() => navigation('/')}>Go home</button>
        </div>
    )
}

export default GoHomeButton
