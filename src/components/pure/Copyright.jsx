import React from 'react'
import { Link } from '@mui/material'
import {Typography} from '@mui/material'

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyright ©'}
            <Link color='inherit' href='https://open-bootcamp.com/'>Open Bootcamp Learning</Link>
            <br/>
            {new Date().getFullYear()}
        </Typography>
    )
}

export default Copyright
