import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ComponentB = ({contact}) => {

    const [online, setOnline] = useState(contact.online);

    const changeAvaliability = () => {
        setOnline(!online)
    }

    return (
        <div>
            <h2>Name: {contact.name} Surname: {contact.surname}</h2>
            <h4>email: {contact.email}</h4>
            <h5>This contact is: {online ? 'Online 👍' : 'Unavaliable 🙄'}</h5>

            <div>
                <button onClick={changeAvaliability}>
                    Change Avaliability
                </button>
            </div>
        </div>

    );
};


ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ComponentB;