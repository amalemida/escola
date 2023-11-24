import { useState } from "react";
import CrudProfessores from "@/components/Professores/CrudProfessores";
import ListaProfessores from "@/components/Professores/ListaProfessores";
import AuthService from "@/services/AuthService";
import axios from "axios";
export default function Professores() {
  const urlAPI = AuthService.API_URL + "api/Aluno/";
  const professorIni = {
    id: 0,
    ra: "",
    nome: "",
    codCurso: 0,
  };
  const [professor, setAluno] = useState(professorIni);
  function carregar(professorForm) {
    console.log("carregar: professorForm" + professorForm.nome);
    setAluno(professorForm);
    console.log("professor do carregar: " + professor.nome);
  }
  const remover = (professorForm) => {
    const url = urlAPI + professorForm.id;
    console.log(url);
    if (window.confirm("Confirma remoção do professor: " + professorForm.ra)) {
      console.log("entrou no confirm");
      axios["delete"](url, professorForm).then((resp) => {
        console.log(resp.data);
      });
    }
  };
  return (
    <>
      <CrudProfessores professorForm={professor} professorSet={setAluno} />
      <ListaProfessores carregar={setAluno} remover={remover} />
    </>
  );
}
