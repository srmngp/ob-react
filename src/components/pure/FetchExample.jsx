import React, { useEffect, useState } from 'react'
import { getAllUsers, getAllUsersPaged, getUserDetails, logUser } from '../../services/FetchService'

const FetchExample = () => {

    const [users, setUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState(12)
    const [pages, setPages] = useState(2)
    const [usersPerPage, setUsersPerPage] = useState(6)
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(() => {
        return () => {
            obtainUsers()
        };
    }, [])

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users obtained', response.data)
                setUsers(response.data)
            })
            .catch((error) => {
                alert(`Errorr while retriving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users')
                console.table(users)
            })
    }

    const obtainUsersPaged = (page) => {
        getAllUsersPaged(page)
            .then((response) => {
                console.log('All users paged obtained', response.data)
                setUsers(response.data)
            })
            .catch((error) => {
                alert(`Errorr while retriving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users')
                console.table(users)
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('User details obtained', response.data)
                setSelectedUser(response.data)
            })
            .catch((error) => {
                alert(`Errorr while retriving the user detail: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining user details')
                console.table(selectedUser)
            })
    }

    const authUser = () => {
        logUser('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('TOKEN', response.token)
                sessionStorage.setItem('token', response.token)
            })
            .catch((error) => {
                alert(`Errorr while login user: ${error}`)
            })
            .finally(() => {
                console.log('Login ended')
            })
    }


    return (
        <div>
            <button onClick={() => authUser()}>Do login</button>

            <h2>Users</h2>
            {users.map(
                (user, index) =>
                (<p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>)
            )}
            <p>Showing {usersPerPage} users of {totalUsers}</p>
            <button onClick={() => obtainUsersPaged(1)}>
                1
            </button>
            <button onClick={() => obtainUsersPaged(2)}>
                2
            </button>

            <div>
                <h2>User details</h2>
                {selectedUser && (
                    <div>
                        <p>{selectedUser.first_name}</p>
                        <p>{selectedUser.last_name}</p>
                        <img src={selectedUser.avatar} style={{ height: '150px' }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FetchExample
