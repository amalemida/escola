import Link from "next/link";
import styles from "../../styles/Escola.module.css";
import { useEffect, useState } from "react";


export default function Menu(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <nav className={styles.menu}>
        <Link href="/escola?id=login">Login</Link>
      </nav>
    );
    
  }
  return (
    <nav className={styles.menu}>
      <Link href="/escola?id=alunos">Alunos</Link>
      <Link href="/escola?id=cursos">Cursos</Link>
      <Link href="/escola?id=carometro">Carômetro</Link>
      <Link href="/escola?id=logout" onClick={handleLogout}>Logout</Link>
    </nav>
  );
}