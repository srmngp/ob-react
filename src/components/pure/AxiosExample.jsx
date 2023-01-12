import React, { useEffect, useState } from 'react'
import { getRandomUser } from '../../services/AxiosService'


const AxiosExample = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
       obtainUser()
    }, [])

    const obtainUser = () => {
        getRandomUser()
        .then((response) => {
            console.log(response)
            setUser(response.data.results[0])
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
    }

    return (
        <div>
            <h1>AxiosExample</h1>

            <h2>{user != null ?
                (<div>
                    <h2>{user.name.title} {user.name.first}</h2>
                    <img alt='avatar' src={user.picture.large} />
                </div>)
                :
                (<div>
                    <p>Generate random user</p>
                    <button onClick={obtainUser}>Randomizee</button>
                </div>
                )
            }</h2>
        </div>
    )
}

export default AxiosExample
