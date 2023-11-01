import Corpo from "@/components/layout/Corpo";
import Menu from "@/components/template/Menu";
import styles from "../styles/Escola.module.css";
import Rodape from "@/components/layout/Rodape";
import Logo from "@/components/layout/Logo";
import { useRouter } from "next/router";
import Login from "@/components/Login/Login";
import { useEffect, useState } from "react";
import Logout from "@/components/Logout/Logout";
import AuthService from "@/services/AuthService";
import { useAppContext } from "@/data/context/AppContext";
import Alunos from "@/components/Alunos/Alunos";

export default function escola() {
  const router = useRouter();
  const id = router.query.id;

  const dados = useAppContext();

  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setCurrentUser(true);
    }
  });
  const renderiza = () => {
    if (!id) {
      return (
        <Corpo titulo="Bem vindo!">
          <div>Cadastro de alunos, cursos e carômetro</div>
          <h2>{dados.nome}</h2>
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
            <Alunos />
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
