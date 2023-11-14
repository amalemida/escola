import { useEffect, useState } from "react";
import styles from "@/styles/CrudCurso.module.css";
import axios from "axios";
import AuthService from "@/services/AuthService";

export default function CrudCursos(props) {
  const urlAPI = AuthService.API_URL + "api/Curso/";
  const [curso, setCurso] = useState(props.cursoForm);
  const initialState = { id: 0, ra: "", nome: "", codCurso: 0 };
  const limpar = () => {
    setCurso(initialState);
  };
  const salvar = () => {
    const dadosCurso = props.cursoForm;
    dadosCurso.c = Number(dadosCurso.codcurso);
    const metodo = dadosCurso.id ? "put" : "post";
    const url = dadosCurso.id ? `${urlAPI}${dadosCurso.id}` : urlAPI;
    console.log("metodo do salvar: " + metodo + url);
    axios[metodo](url, dadosCurso).then((resp) => {
      limpar();
    });
  };
  const atualizaCampo = (evento) => {
    //clonar usuário a partir do state, para não alterar o state diretamente
    const cursoAtual = { ...props.cursoForm };
    //usar o atributo NAME do input para identificar o campo a ser atualizado
    cursoAtual[evento.target.name] = evento.target.value;
    //atualizar o state
    props.cursoSet(cursoAtual);
  };
  return (
    <div className={styles.incluiContainer}>
      <label className={styles.labelForm}> Código: </label>
      <input
        type="number"
        id="codigo"
        placeholder="0"
        className={styles.formInput}
        name="codigo"
        value={props.cursoForm.codigo}
        onChange={(e) => atualizaCampo(e)}
      />
      <label> Nome: </label>
      <input
        type="text"
        id="nome"
        placeholder="nome"
        className={styles.formInput}
        name="nome"
        value={props.cursoForm.nome}
        onChange={(e) => atualizaCampo(e)}
      />
      <label> Período: </label>
      <input
        type="text"
        id="periodo"
        placeholder="período"
        className={styles.formInput}
        name="periodo"
        value={props.cursoForm.periodo}
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
