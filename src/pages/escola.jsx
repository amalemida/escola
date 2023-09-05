import Corpo from "@/components/layout/Corpo";
import Menu from "@/components/layout/Menu";
import styles from "../styles/Escola.module.css";
import Rodape from "@/components/layout/Rodape";
import Logo from "@/components/layout/Logo";
import ListaAlunos from "@/components/Alunos/ListaAlunos";
import { useRouter } from "next/router";
import ListaCursos from "@/components/Cusros/ListaCursos";
import ListaCarometro from "@/components/Carometro/ListaCarometro";

export default function escola() {
  const router = useRouter();
  const id = router.query.id;
  console.log(router);

  const renderiza = () => {
    if (!id) {
      return (
        <Corpo titulo="Bem vindo!">
          <div>Cadastro de alunos, cursos e carômetro</div>
        </Corpo>
      );
    }
    if (id === "alunos") {
      return (
        <Corpo titulo="Cadastro de Alunos">
          <div>
            <ListaAlunos />
          </div>
        </Corpo>
      );
    }
    if (id === "cursos") {
      return (
        <Corpo titulo="Cadastro de Cursos">
          <div><ListaCursos/></div>
        </Corpo>
      );
    }
    if (id === "carometro") {
      return (
        <Corpo titulo="Carômetro">
          <div><ListaCarometro/></div>
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
