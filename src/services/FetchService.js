export const getAllUsers = async () => {

    let response = await fetch('https://reqres.in/api/users')
    logResponse(response)

    return response.json()
}

export const getAllUsersPaged = async (page) => {

    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    logResponse(response)


    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    logResponse(response)

    return response.json()
}

export const logUser = async (email, password) => {

    let body = {
        email: email,
        password: password
    }

    let response = await fetch('https://reqres.in/api/login', {
        method:'POST',
        // cache:"no-cache",
        // mode: "cors",
        // credentials:"omit", 
        // headers: {'Content-type': 'application/json'},
        body
    })

    logResponse(response)

    return response.json()
}

function logResponse(response) {
    console.log('Response: ', response)
    console.log('Status:', response.status)
    console.log('OK?', response.ok)
}