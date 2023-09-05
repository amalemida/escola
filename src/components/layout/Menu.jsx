import styles from "../../styles/Escola.module.css";
import Link from "next/link"

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/escola?id=alunos">Alunos</Link>
      <Link href="/escola?id=cursos">Cursos</Link>
      <Link href="/escola?id=carometro">Carômetro</Link>
    </nav>
  );
}
