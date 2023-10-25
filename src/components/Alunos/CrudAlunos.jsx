import { useState } from "react";
import styles from "@/styles/CrudAluno.module.css";
import axios from "axios";
import AuthService from "@/services/AuthService";

export default function CrudAlunos(props) {
  const urlAPI = AuthService.API_URL + "api/Aluno/";
  const [aluno, setAluno] = useState(props.alunoForm);
  const [lista, setLista] = useState([]);
  const initialState = { id: 0, ra: "", nome: "", codCurso: 0 };
  const limpar = () => {
    setAluno(initialState);
  };

  const salvar = () => {
    const dadosAluno = props.alunoForm;
    dadosAluno.c = Number(dadosAluno.codcurso);
    const metodo = "post";
    const url = urlAPI;
    console.log("metodo do salvar: " + url);

    axios[metodo](url, dadosAluno).then((resp) => {
      const dadosLista = getListaAtualizada(resp.data);
      setLista(dadosLista);
      limpar();
    });
  };

  const getListaAtualizada = () => {
    const listaAtual = lista.filter((a) => a.id !== aluno.id);
    listaAtual.unshift(aluno);
    return listaAtual;
  };

  const atualizaCampo = (evento) => {
    //clonar usuário a partir do state, para não alterar o state diretamente;
    const alunoAtual = { ...props.alunoForm };
    //usar o atributo NAME do input para identificar o campo a ser atualizado;
    alunoAtual[evento.target.name] = evento.target.value;
    //atualizar o state
    props.alunoSet(alunoAtual);
  };
  return (
    <div className={styles.incluiContainer}>
      <label className={styles.labelForm}> RA: </label>
      <input
        type="text"
        id="ra"
        placeholder="RA do aluno"
        className={styles.formInput}
        name="ra"
        value={props.alunoForm.ra}
        onChange={(e) => atualizaCampo(e)}
      />
      <label> Nome: </label>
      <input
        type="text"
        id="nome"
        placeholder="Nome do aluno"
        className={styles.formInput}
        name="nome"
        value={props.alunoForm.nome}
        onChange={(e) => atualizaCampo(e)}
      />
      <label> Código do Curso: </label>
      <input
        type="number"
        id="codCurso"
        placeholder="0"
        className={styles.formInput}
        name="codCurso"
        value={props.alunoForm.codcurso}
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
