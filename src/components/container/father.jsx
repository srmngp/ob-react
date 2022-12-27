import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Manwel');

    function showMessage(text) {
        alert(`Message recieved ${text}`)
    }

    function unpdateName(newName) {
        setName(newName)
    }

    return (
        <div style={{ background: 'tomato', padding: '10px' }}>
            <Child name={name} send={showMessage} update={unpdateName}></Child>
        </div>
    );
}

export default Father;
