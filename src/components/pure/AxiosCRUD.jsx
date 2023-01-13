import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { createUser, getAllUsers, getAllUsersPaged, getUserById, login, updateUserById } from '../../services/AxiosCRUDService'

const AxiosCRUD = () => {

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                alert(JSON.stringify(response.data))
                sessionStorage.setItem('token', response.data.token)
            })
            .catch((error) => alert(`Something went wrong: `, error))
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Not a valid email')
                .required('Required'),
            password: Yup.string()
                .required('Required')
        }
    )

    const initalCredentials = {
        email: '',
        password: ''
    }

    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
    }

    const obtainAllUsersPaged = (page) => {
        getAllUsersPaged(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
    }

    const obtainUserById = (id) => {
        getUserById(id)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not created')
                }
            })
    }

    const updateUser = (name, job) => {
        updateUserById(name, job)
            .then((response) => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not created')
                }
            })
    }

    const deleteUserById = (id) => {
        deleteUserById(id)
        .then((response) => {
            if (response.data && response.status === 204) {
                alert(JSON.stringify(response.data))
            } else {
                throw new Error('User not deleted')
            }
        })
    }

    return (
        <div>
            <Formik
                initialValues={initalCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >

                {({ errors }) => (
                    <Form>
                        <label htmlFor='email'>Email</label>
                        <Field id='email' type='email' name='email' placeholder='example@email.com' />
                        {errors.email && (
                            <ErrorMessage name='email' component='div' />
                        )}

                        <label htmlFor='password'>Password</label>
                        <Field id='password' type='password' name='password' />
                        {errors.password && (
                            <ErrorMessage name='password' component='div' />
                        )}

                    </Form>
                )}

            </Formik>
            <button onClick={authUser}>
                Login
            </button>
            <div>
                <button onClick={obtainAllUsers}>
                    Get all users with axios
                </button>

                <button onClick={() => obtainAllUsersPaged(1)}>
                    Get all users with axios paged(1)
                </button>

                <button onClick={() => obtainUserById(1)}>
                    Get user by id (1)
                </button>

                <button onClick={() => createNewUser('Manweel', 'programmer')}>
                    Create Manweel programmer
                </button>

                <button onClick={() => updateUser('1', 'Manweel', 'programmer')}>
                    Update user 1
                </button>

                <button onClick={() => deleteUserById('1')}>
                    Delete user 1
                </button>
            </div>
        </div>
    )
}

export default AxiosCRUD
