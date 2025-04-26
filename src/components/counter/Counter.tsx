type Props = {
    increment:()=>void,
    reset:()=>void,
    counter:number
}
export const Counter = (props:Props) => {
    return (
        <div>
            <span>{props.counter}</span>

            <div>
                <button onClick={()=>props.increment()}>Increment</button>
                <button onClick={()=>props.reset()}>Reset</button>
            </div>
        </div>
    );
};