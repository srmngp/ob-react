/**
 * useState example
 * 
 * Create a function componente and modify its private state
 */

import React, { useState } from 'react';

const Example1 = () => {

    const initValue = 0

    const initPersonValue = {
        name: 'Manu',
        email: 'email@email.com'
    }

    const [counter, setContador] = useState(initValue);
    const [person, setPerson] = useState(initPersonValue);

    function incresaseCounter() {
        setContador(counter + 1)
    }

    function updatePerson() {
        setPerson(
            {
                name: 'Manwel',
                email: 'newemail@email.com'
            }
        )        
    }

    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            
            <h2>Contador: {counter}</h2>

            <h2>Peson:</h2>
            <h3>Name: {person.name}</h3>
            <h3>Email: {person.email}</h3>

            <button onClick={incresaseCounter}>Increase counter</button>
            <button onClick={updatePerson}>Update person</button>
                
        </div>
    );
}

export default Example1;
