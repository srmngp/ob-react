import React, { useState } from 'react';

const loggedStyle = {
    color: 'yellow'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            <h1>Hola, {props.name}</h1>
            <button onClick={() => {
                console.log('Log button pressed')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
