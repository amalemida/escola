import Link from "next/link";
import styles from "../../styles/Escola.module.css";
import { useEffect, useState } from "react";
import AuthService from "@/services/AuthService";
import { useLocalStorage } from "@/data/context/LocalStorageContext";

export default function Menu(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const localStorageData = useLocalStorage()

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true);
    }
  });

  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
  };

  console.log("LocalStorageData " + localStorageData.nome)
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
      <Link href="/escola?id=logout" onClick={handleLogout}>
        Logout
      </Link>
    </nav>
  );
}
