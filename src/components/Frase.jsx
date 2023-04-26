import styles from './Frase.module.css'

export default function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Esta é uma frase</p>
        </div>
    )
}