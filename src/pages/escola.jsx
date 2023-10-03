import Corpo from "@/components/layout/Corpo";
import Menu from "@/components/template/Menu";
import styles from "../styles/Escola.module.css";
import Rodape from "@/components/layout/Rodape";
import Logo from "@/components/layout/Logo";
import { useRouter } from "next/router";
import ListaAlunos from "@/components/Alunos/ListaAlunos";
import Login from "@/components/Login/Login";
import { useEffect, useState } from "react";
import Logout from "@/components/Logout/Logout"
import AuthService from "@/services/AuthService";
export default function escola() {
  const router = useRouter();
  const id = router.query.id;
  //console.log(id)
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const renderiza = () => {
    if (!id) {
      return (
        <Corpo titulo="Bem vindo!">
          <div>Cadastro de alunos, cursos e carômetro</div>
        </Corpo>
      );
    }
    if (id === "login") {
      return <Login />;
    }
    if (id === "logout") {
      return <Logout />;
    }
    if (currentUser) {
      if (id === "alunos") {
        return (
          <Corpo titulo="Cadastro de Alunos">
            <ListaAlunos />
          </Corpo>
        );
      }
      if (id === "cursos") {
        return (
          <Corpo titulo="Cadastro de Cursos">
            <div>Cadastro de Cursos</div>
          </Corpo>
        );
      }
      if (id === "carometro") {
        return (
          <Corpo titulo="Carômetro">
            <div>Carômetro</div>
          </Corpo>
        );
      }
    } else {
      return (
        <Corpo titulo="Não autorizado">
          <div>Verifique suas credenciais para usar esse recurso.</div>
        </Corpo>
      );
    }
  };
  return (
    <div className={styles.escola}>
      <Logo />
      <Menu />
      {renderiza()}
      <Rodape />
    </div>
  );
}
