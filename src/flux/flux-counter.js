import counterStore from "./stores/counter-store";
import * as counterActions from './actions/counterAction';
import { useEffect, useState } from 'react';

export default function FluxCounter() {
    const [counter, setCounter] = useState(counterStore.getCounter());

    useEffect(() => {
        counterStore.addChangeListener(onChange);
        return () => counterStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setCounter(counterStore.getCounter());
    }
    const handlerClick = () => {
        counterActions.incrementCounter();
    };

    return (
        <div className="App">
            <h3>{counter}</h3>
            <button onClick={handlerClick}>+1</button>
        </div>
    );
}