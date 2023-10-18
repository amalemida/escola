import Link from "next/link";
import styles from "../../styles/Escola.module.css";
import { useLocalStorage } from "@/data/context/LocalStorageContext";

export default function Menu(props) {
  const localStorageData = useLocalStorage();
  return (
    <nav className={styles.menu}>
      <Link href="/escola?id=alunos">Alunos</Link>
      <Link href="/escola?id=cursos">Cursos</Link>
      <Link href="/escola?id=carometro">Carômetro</Link>
      {!localStorage.getItem("user") ? (
        <Link href="/escola?id=login">Login</Link>
      ) : (
        <Link href="/escola?id=logout">Logout</Link>
      )}
    </nav>
  );
}
