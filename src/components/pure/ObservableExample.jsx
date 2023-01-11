import React, { useState } from 'react'
import getNumbers from '../../services/ObservableService'

const ObservableExample = () => {

    const [number, setNumber] = useState(0)

    console.log('Subscrition to observable')

    const obtainNewNumbers = () => {
        getNumbers.subscribe({
            next(newNumber) {
                console.log(`New number ${newNumber}`)
                setNumber(newNumber)
            },
            error(error) {
                alert(`Something went wrong: ${error}`)
                console.log('Error!')
            },
            complete() {
                alert(`Finised with: ${number}`)
                console.log('Done )')
            }
        })
    }
    return (
        <div>
            <h1>Observable example 👀</h1>
            <h2>Number: {number}</h2>

            <button onClick={obtainNewNumbers}>Get new numbers</button>

        </div>
    )
}

export default ObservableExample
