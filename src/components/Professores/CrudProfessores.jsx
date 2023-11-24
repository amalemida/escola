import { useEffect, useState } from "react";
import styles from "@/styles/CrudProfessores.module.css"
import axios from "axios";
import AuthService from "@/services/AuthService";

export default function CrudProfessores(props) {
  const urlAPI = AuthService.API_URL + "api/Professor/";
  const [professor, setProfessor] = useState(props.professorForm);
  const initialState = { id: 0, nome: "", email: "", codCurso: 0 };
  const limpar = () => {
    setProfessor(initialState);
  };
  const salvar = () => {
    const dadosProfessor = props.professorForm;
    dadosProfessor.c = Number(dadosProfessor.codCurso);
    const metodo = dadosProfessor.id ? "put" : "post";
    const url = dadosProfessor.id ? `${urlAPI}${dadosProfessor.id}` : urlAPI;
    console.log("metodo do salvar: " + metodo + url);
    axios[metodo](url, dadosProfessor).then((resp) => {
      limpar();
    });
  };
  const atualizaCampo = (evento) => {
    //clonar usuário a partir do state, para não alterar o state diretamente
    const professorAtual = { ...props.professorForm };
    //usar o atributo NAME do input para identificar o campo a ser atualizado
    professorAtual[evento.target.name] = evento.target.value;
    //atualizar o state
    props.professorSet(professorAtual);
  };
  return (
    <div className={styles.incluiContainer}>
      <label className={styles.labelForm}> Nome: </label>
      <input
        type="text"
        id="nome"
        placeholder="Nome do professor"
        className={styles.formInput}
        name="nome"
        value={props.professorForm.nome}
        onChange={(e) => atualizaCampo(e)}
      />
      <label> Email: </label>
      <input
        type="text"
        id="email"
        placeholder="email do professor"
        className={styles.formInput}
        name="email"
        value={props.professorForm.email}
        onChange={(e) => atualizaCampo(e)}
      />
      <label> Código do Curso: </label>
      <input
        type="number"
        id="codCurso"
        placeholder="0"
        className={styles.formInput}
        name="codCurso"
        value={props.professorForm.codCurso}
        onChange={(e) => atualizaCampo(e)}
      />
      <button className={styles.btnSalvar} onClick={(e) => salvar(e)}>
        Salvar
      </button>
      <button className={styles.btnCancelar} onClick={(e) => limpar(e)}>
        Cancelar
      </button>
    </div>
  );
}
