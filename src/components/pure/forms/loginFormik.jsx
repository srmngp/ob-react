import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Not a valid email')
            .required('Required'),
        password: Yup.string()
            .required('Required')
    }
)

const LoginFormik = () => {

    const initalCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Form</h4>
            <Formik
                initialValues={initalCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500))
                    alert(JSON.stringify(values, null, 2))
                    localStorage.setItem('credential', values)
                }}
            >

            {({errors, touched, isSubmiting}) => (
                <Form>
                    <label htmlFor='email'>Email</label>
                    <Field id='email' type='email' name='email' placeholder='example@email.com' />
                    {errors.email && (
                        <ErrorMessage name='email' component='div'/>
                    )}

                    <label htmlFor='password'>Password</label>
                    <Field id='password' type='password' name='password' />
                    {errors.password && (
                        <ErrorMessage name='password' component='div'/>
                    )}

                    <button type='submit'>Login</button>
                </Form>
            )}

            </Formik>
        </div>
    )
}

export default LoginFormik
