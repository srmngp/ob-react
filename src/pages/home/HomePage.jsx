import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const HomePage = () => {

    const location = useLocation()
    const navigation = useNavigate()
    
    const navigateProps = (path) => {
        navigation({
            pathname: path,
            search: '?online=true',
            state: {
                online: true
            }
        })
    }

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
            <h1>Home</h1>
            <h2>Dashboard</h2>

            <div>
                <button onClick={() => goTo('/profile')}>Profile</button>
                <button onClick={() => goBack()}>Back</button>
                <button onClick={() => goForward()}>Forward</button>
                <button onClick={() => navigateProps('/statePage')}>State page with params</button>

            </div>
        </div>
    );
}

export default HomePage;
