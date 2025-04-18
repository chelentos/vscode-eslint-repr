import * as React from 'react';

import {Button} from '@gravity-ui/uikit';
import {testFunction} from '@my-test-package/core/test';

import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

import './App.css';

function App() {
    const [count, setCount] = React.useState(testFunction());

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <Button>Vite + React</Button>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
