import styles from "./../counter/Counter.module.css"

type UniversalButtonProps = {
    callBack: () => void
    nameButton: string
    disabled: boolean;
}
export const UniversalButton = (props: UniversalButtonProps) => {
    return (
        <button onClick={props.callBack}
                disabled={props.disabled}
                className={styles.buttonNative}
        >
            {props.nameButton}
        </button>
    )
}