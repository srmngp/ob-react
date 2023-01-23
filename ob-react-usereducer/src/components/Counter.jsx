import React, { useReducer, useContext, useState } from 'react';

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const myContext = React.createContext(null)

const Points = () => {
    const state = useContext(myContext)

    return (
        <p>Points: {state.count}</p>
    )
}

const Counter = () => {

    

    const initState = {
        count: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT:
                return {
                    //... state, redundate pq solo tenemos count en el state
                    count: state.count + action.payload
                }
            case DECREMENT:
                return {
                    count: state.count - action.payload
                }
            case RESET:
                return {
                    count: 0
                }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <myContext.Provider value={state}>
            <div>
                <Points />

                <button onClick={() => dispatch({ type: INCREMENT, payload: 2 })}>
                    INCREMENT
                </button>

                <button onClick={() => dispatch({ type: DECREMENT, payload: 1 })}>
                    DECREMENT
                </button>

                <button onClick={() => dispatch({ type: RESET })}>
                    RESET
                </button>

            </div>
        </myContext.Provider>
    );
}

export default Counter;
