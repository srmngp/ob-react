import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Evento antes de añadirlo al dom')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Evento antes de añadirlo al dom')
    }, []);

    return (
        <div>

        </div>
    );
}