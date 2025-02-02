import styles from "./InputInfoGerais.module.css";

export const InputInfoGerais = ({props}) => {
    return (
        <input
            className={styles.input} 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            id={props.id}
            onChange={props.onChange}
        />
    )
}