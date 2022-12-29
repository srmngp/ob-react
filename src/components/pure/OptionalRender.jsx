import { Button } from 'bootstrap';
import React, { useState } from 'react';

const OptionalRender = () => {

    const [access, setAccess] = useState(false)
    const [messages, setMessages] = useState(0);

    const loggedStyle = {
        color: 'tomato'
    }

    const unloggedStyle = {
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold'
    }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton

    if (access) {
        optionalButton = <LogoutButton logoutAction={logoutAction} propStyle={loggedStyle} />
    } else {
        optionalButton = <LoginButton loginAction={loginAction} propStyle={unloggedStyle} />
    }

    let addMessages = () => {
        setMessages(messages + 1)
    }

    return (
        <div>
            {optionalButton}

            {access ? (<div>
                {messages > 0 && messages === 1 && <p>You have {messages} new message</p>}
                {messages > 1 && <p>You have {messages} new messages</p>}
                {messages === 0 && <p>There are no messages</p>}

                {messages > 0 ?
                    <p>You have {messages} new message{messages > 1 ? 's' : ''}</p> :
                    <p>There are no messages</p>
                }

                <button onClick={addMessages}>{messages === 0 ? 'Add your first message' : 'Add new message'}</button>
            </div>) : null}
        </div>
    );

}

const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button onClick={loginAction} style={propStyle}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button onClick={logoutAction} style={propStyle}>Logout</button>
    )
}

export default OptionalRender;
