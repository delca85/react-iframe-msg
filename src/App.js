import React, {useState, useEffect} from 'react';
import Iframe from './Iframe.js';
import { addListener, removeListener, sendEvent } from './billy-features/index.ts';

const App = () => {
    const [value, setValue] = useState('');

    const handler = number => setValue(number)

    useEffect(() => {
        addListener('randomNumber', handler)
        return () => {
            removeListener('randomNumber', handler)
        }
    }, []);

    const onButtonClick = () => {
        sendEvent('randomNumberFromParent', Math.random());
    }

    return <div>
            <h1>Parent Window</h1>
            <p>Got Message:</p><input value={value}></input>
        <p>Send Message<button onClick={ onButtonClick } >Hi iFrame!</button></p>
                <iframe src="http://localhost:3000/iframe.html"></iframe>
            </div>
    
}


export default App;