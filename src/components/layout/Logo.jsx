import styles from "@/styles/Escola.module.css" 

export default function Logo(){
    return(
        <aside className={styles.logo}>
            <img src="/logo_escola.png" />
        </aside>
    )
}