/**
 * useState, useContext example
 */

import React, {useState} from 'react';

const myContext = React.createContext(null)

const Component1 = () => {

    const state = React.useContext(myContext)

    return (
        <div>
            <h1>Token: {state.token}</h1>
            <Component2></Component2>
        </div>
    );
}

const Component2 = () => {

    const state = React.useContext(myContext)

    return (
        <div>
            <h2>Session id: {state.session}</h2>
        </div>
    );
}


const ContextComponent = () => {

    const initState = {
        token: '12345',
        session: 1
    }

    const [sessionData, setSessionData] = useState(initState)

    function updateSession() {
        setSessionData(
            {
                token: '67890',
                session: sessionData.session +1
            }
        )
    }

    return (
        <myContext.Provider value={sessionData}>
            <h1>Hooks useState and useContext example</h1>
            <Component1></Component1>

            <button onClick={updateSession}>Update session</button>
        </myContext.Provider>
    );
}

export default ContextComponent;

//export default Example3;

