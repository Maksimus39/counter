import styles from './Counter.module.css'
import {UniversalButton} from "../universalNumber/UniversalButton.tsx";

type Props = {
    increment: () => void,
    reset: () => void,
    counter: number
    stopNumber: number
}
export const Counter = (props: Props) => {

    const CounterIncrementHandler = () => {
        props.increment()
    }

    const CounterResetHandler = () => {
        props.reset()
    }

    return (
        <div className={styles.counter}>
            <h1>{"Counter on React"}</h1>
            <span className={props.counter === props.stopNumber ? styles.alert : undefined}>{props.counter}</span>
            <div className={styles.buttonBlock}>
                <UniversalButton nameButton={"Increment"}
                                 callBack={CounterIncrementHandler}
                                 disabled={props.counter >= props.stopNumber}
                />

                <UniversalButton nameButton={"Reset"}
                                 callBack={CounterResetHandler}
                                 disabled={props.counter === 0}
                />
            </div>
        </div>
    );
};