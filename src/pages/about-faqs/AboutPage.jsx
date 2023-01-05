import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation()
    const navigation = useNavigate()

    console.log('We are in route:', location.pathname);

    const goTo = (path) => {
        navigation(path)
    }

    const goBack = () => {
        navigation(-1)
    }

    const goForward = () => {
        navigation(1)
    }

    return (
        <div>
            <h2>About & FAQs</h2>

            <div>
                <button onClick={() => goTo('/')}>Go Home</button>
                <button onClick={() => goBack()}>Back</button>
                <button onClick={() => goForward()}>Forward</button>
            </div>
        </div>
    )
}

export default AboutPage
