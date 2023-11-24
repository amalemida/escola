import { useState } from "react";
import CrudCursos from "@/components/Cursos/CrudCursos";
import ListaCursos from "./ListaCursos";
import AuthService from "@/services/AuthService";
import axios from "axios";
export default function Cursos() {
  const urlAPI = AuthService.API_URL + "api/Curso/";
  const cursoIni = {
    id: 0,
    codigo: "",
    nome: "",
    periodo: 0,
  };
  const [curso, setCurso] = useState(cursoIni);
  function carregar(cursoForm) {
    console.log("carregar: cursoForm" + cursoForm.nome);
    setCurso(cursoForm);
    console.log("curso do carregar: " + curso.nome);
  }
  const remover = (cursoForm) => {
    const url = urlAPI + cursoForm.id;
    console.log(url);
    if (window.confirm("Confirma remoção do curso: " + cursoForm.codigo)) {
      console.log("entrou no confirm");
      axios["delete"](url, cursoForm).then((resp) => {
        console.log(resp.data);
      });
    }
  };
  return (
    <>
      <CrudCursos cursoForm={curso} cursoSet={setCurso} />
      <ListaCursos carregar={setCurso} remover={remover} />
    </>
  );
}
