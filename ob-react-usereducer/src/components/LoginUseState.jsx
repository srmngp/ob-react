import React, { useState } from 'react'

export const LoginUseState = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    const submit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)
        try {
            await function login({ username, password }) {
                new Promise((resolve, reject) => {

                    setTimeout(() => {
                        if (username === 'amind' && password === 'admin') {
                            resolve()
                        } else {
                            reject()
                        }
                    }, 1500);

                })
            }
            setIsLogged(true)
            setIsLoading(false)
        } catch (error) {
            setError(`Incorrect username or password: ${error}`)
            setIsLoading(false)
            setUsername('')
            setPassword('')
        }
    }

    const logout = () => {
        setIsLoading(false)
        setIsLogged(false)
    }

    return (
        <div className='App'>
            <div>
                {
                    isLogged ? (
                        <div>
                            <h1>
                                Welcome, {username}
                            </h1>

                            <button onClick={logout}>
                                Logout
                            </button>
                        </div>
                    )
                        :
                        (
                            <form onSubmit={submit}>
                                {error && <p style={{ color: 'tomato' }}>{error}</p>}

                                <input type='text' placeholder='Username' value={username}
                                    onChange={(e) => setUsername(e.currentTarget.value)}>
                                </input>


                                <input type='text' placeholder='Password' value={password}
                                    onChange={(e) => setPassword(e.currentTarget.value)}>
                                </input>

                                <button type='submit'>
                                    {isLoading ? 'Loading...' : 'Login'}
                                </button>
                            </form>
                        )
                }
            </div>
        </div>
    )
}
