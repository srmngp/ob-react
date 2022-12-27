/**
 * Props.children example
 */

import React from 'react';

const Example4 = (props) => {
    return (
        <div>
            <h1>Props.children example</h1>
            <h2>Nombre: {props.name}</h2>
            <h2>{props.children}</h2>
        </div>
    );
}

export default Example4;
