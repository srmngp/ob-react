/**
 * useState, useRef, useEffect example
 */

import React, { useState, useRef, useEffect } from 'react';

const Example2 = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const myRef = useRef()

    function increase1() {
        setCount1(count1 + 1)
    }

    function increase2() {
        setCount2(count2 + 1)
    }

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente')
    //     console.log(myRef);
    // });

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log(myRef);
    }, [count1, count2]);


    return (
        <div>
            <h1>Hooks: useState, useRef and useEffect examples</h1>
            <h2>Counter 1: {count1}</h2>
            <h2>Counter 2: {count2}</h2>

            <h4 ref={myRef}>Element reffered example</h4>

            <div>
                <button onClick={increase1}>Increase counter 1</button>
                <button onClick={increase2}>Increase counter 2</button>
            </div>
        </div>
    );
}

export default Example2;
