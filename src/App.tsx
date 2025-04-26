import './App.css'
import {useState} from "react";
import {Counter} from "./components/counter/Counter.tsx";

export const App = () => {
    const [counter, setCounter] = useState<number>(0)

    function increment() {
        setCounter(counter + 1)
    }

    function reset() {
        setCounter(0)
    }


    return (
        <>
            <Counter increment={increment}
                     reset={reset}
                     counter={counter}
            />
        </>
    )
}


