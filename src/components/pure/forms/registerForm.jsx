import React, {useState} from 'react';

export const RegisterForm = () => {

    const initData = [
        {
            user: '',
            name: '',
            password: '',
            email: ''
        }
    ]

    const [data, setData] = useState(initData)
 
    return (
        <div>
            
        </div>
    );
}