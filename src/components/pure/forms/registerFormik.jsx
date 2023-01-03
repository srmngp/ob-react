import React from 'react';
import { User } from '../../../models/user.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { ROLE } from '../../../models/role.enum';

const RegisterFormik = () => {

    let user = new User()

    const initialValues = {
        name: '',
        email: '',
        password: '',
        role: ROLE.USER,
        confirm: ''
    }

    const resgisterScherma = Yup.object().shape(
        {
            name: Yup.string()
                .min(4, 'Min 4 characters')
                .max(15, 'Max 15 characters')
                .required('Required'),
            email: Yup.string()
                .email('Not a valid email')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Min 6 characters')
                .max(16, 'Max 16 characters')
                .required('Required'),
            role: Yup.string()
                .oneOf([ROLE.USER, ROLE.ADMIN], 'Select user/admin role')
                .required('Required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf([Yup.ref('password')], 'Passwords should match')
                }).required('Required')
        }
    )

    const submit = () => {
        alert('Register user');
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={resgisterScherma}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500))
                    alert(JSON.stringify(values, null, 2))
                    localStorage.setItem('credential', values)
                }}
            >

                {({ values, errors }) => (
                    <Form>

                        <label htmlFor='name'>Name</label>
                        <Field id='name' type='name' name='name' placeholder='Username...' />
                        {errors.name && (
                            <ErrorMessage name='name' component='div' />
                        )}

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

                        <label htmlFor='confirm'>Conrim password</label>
                        <Field id='confirm' type='password' name='confirm' />
                        {errors.confirm && (
                            <ErrorMessage name='confirm' component='div' />
                        )}

                        <button type='submit'>Register</button>
                    </Form>
                )}

            </Formik>

        </div>
    );
}

export default RegisterFormik;
