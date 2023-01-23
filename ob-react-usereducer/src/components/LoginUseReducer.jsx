import React, { useReducer } from 'react'

const FIELD = 'FIELD'
const LOGIN = 'LOGIN'
const ERROR = 'ERROR'
const SUCCESS = 'SUCCESS'
const LOGOUT = 'LOGOUT'

const initialState = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
    isLogged: false
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }

        case LOGIN:
            return {
                ...state,
                error: '',
                isLoading: true,
                isLogged: false
            }

        case SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                isLogged: true
            }

        case ERROR:
            return {
                ...state,
                error: 'Incorrect username or password',
                isLoading: false,
                isLogged: false,
                username: '',
                password: ''
            }

        case LOGOUT:
            return {
                ...state,
                isLogged: false,
                username: '',
                password: ''
            }

        default:
            return state
    }
}

export const LoginUseReducer = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState)

    const { username, password, error, isLoading, isLogged } = state

    const submit = async (e) => {
        e.preventDefault()
        dispatch({ type: LOGIN })
        try {
            await function login({ username, password }) {
                new Promise((resolve, reject) => {

                    setTimeout(() => {
                        if (username === 'admin' && password === 'admin') {
                            resolve()
                        } else {
                            reject()
                        }
                    }, 1500);

                })
            }
            dispatch({ type: SUCCESS })
        } catch (error) {
            dispatch({ type: ERROR })
        }
    }

    const logout = () => {
        dispatch({type: LOGOUT})
    }

    return (
        <>
            <div>LoginUseReducer</div>
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
                                    onChange={(e) => dispatch({type: FIELD, fieldName: 'username', payload: e.currentTarget.value})}>
                                </input>


                                <input type='text' placeholder='Password' value={password}
                                    onChange={(e) => dispatch({type: FIELD, fieldName: 'password', payload: e.currentTarget.value})}>
                                </input>

                                <button type='submit'>
                                    {isLoading ? 'Loading...' : 'Login'}
                                </button>
                            </form>
                        )
                }
            </div>
        </>
    )
}
