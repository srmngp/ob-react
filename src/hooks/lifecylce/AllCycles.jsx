import React, {useEffect} from 'react';

export const AllCycles = () => {

    useEffect(() => {
        console.log('Component updated');

        const intervalId = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Updating');
        }, 1000)

        return () => {
            console.log('Closing component');
            document.title = 'Time stopped'
            clearInterval(intervalId)

        };
        
    }, []);

    return (
        <div>
            
        </div>
    );
}