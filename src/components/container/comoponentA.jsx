import React from 'react'
import { Contact } from '../../models/contact.class'
import ComponentB from '../pure/ComponentB'

const ComponentA = () => {

    const defaultContact = new Contact('Jhon', 'Lopes', 'email@mail.com', false)

    return (
        <div>
            <h1>Contact:</h1>
            <ComponentB contact={defaultContact}></ComponentB>
        </div>
    )
}

export default ComponentA