import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoHomeButton from '../../components/pure/GoHomeButton'

const ProfilePage = ({ user }) => {

    const navigation = useNavigate()

    const goBack = () => {
        navigation(-1)
    }

    return (
        <div>
            <h2>Your profile</h2>

            <div>
                <GoHomeButton />
                <button onClick={() => navigation('/tasks')}>Your tasks</button>
                <button onClick={() => goBack()}>Back</button>
            </div>
        </div>
    )
}

export default ProfilePage
