import React from 'react'

const AsyncExample = () => {

    async function generateNumber() {
        return 1
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Somethin went wrong: ${error}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Somethin went wrong: ${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function storeName() {
        saveSessionStorage('name', 'Manwel')
            .then((response) => { alert(`Saved name: ${response}`) })
            .catch((error) => alert(`Somethin went wrong: ${error}`))
            .finally(() => console.log('Finally! Name saved??'))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello syncting')
            }, 2000);
        })

        let message = await promise

        await alert(`Message recievd: ${message}`)
    }

    const returnError = async () => {
        await Promise.reject(new Error('WoOOops'))
    }

    const obtainError = () => {
        returnError()
            .then((response) => { alert(`Everything is OK: ${response}`) })
            .catch((error) => alert(`Somethin went wrong: ${error}`))
            .finally(() => console.log('Finally! Error obtained'))
    }

    const urlNotFoundError = async () => {
        try {
            let response = await fetch('http://invalidUrl.com')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Somethin went wrong: ${error} check console log`)
        }
    }

    const multiplePromises = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Somethin went wrong: ${error} check console log`))
    }


    return (
        <div>
            <h1>AsyncExamples ⇶</h1>

            <button onClick={obtainNumber}>Obtain number</button>

            <button onClick={obtainPromiseNumber}>Obtain Promise number</button>

            <button onClick={storeName}>Save name and show it</button>

            <button onClick={obtainMessage}>Show message with delay</button>

            <button onClick={obtainError}>Obtain error</button>
        
            <button onClick={urlNotFoundError}>urlNotFound error</button>

            <button onClick={multiplePromises}>Multiple promises</button>
        </div>
    )
}

export default AsyncExample
