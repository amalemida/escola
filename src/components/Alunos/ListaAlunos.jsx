import { useEffect, useState } from "react";
import styles from "@/styles/ListaAlunos.module.css";
import { IconeEdicao, IconeLixo } from "@/components/Icones";
import AuthService from "@/services/AuthService";
import axios from "axios";

export default function ListaAlunos(props) {
  const urlAPI = AuthService.API_URL + "api/Aluno/";
  const [lista, setLista] = useState([]);
  const user = AuthService.getCurrentUser();
  //console.log("USER: " + user)
  if (user) {
    useEffect(() => {
      /*fetch('http://localhost:5176/api/aluno')
.then(resp => resp.json())
.then(alunos => setLista(alunos))
.catch(error => console.log("ERRO FETCH"));*/
      axios(urlAPI).then((resp) => {
        setLista(resp.data);
      });
    }, []);
    const renderTable = () => {
      return (
        <table className={styles.tabAlunos}>
          <thead>
            <tr className={styles.cabecTabela}>
              <th className={styles.tabTituloRa}>RA</th>
              <th className={styles.tabTituloNome}>Nome</th>
              <th>Curso</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lista.map((aluno, i) => {
              return (
                <tr key={aluno.id}>
                  <td> {aluno.ra} </td>
                  <td> {aluno.nome} </td>
                  <td> {aluno.codCurso} </td>
                  <td>
                    <button
                      className={styles.linhaButton}
                      style={{ color: "blue" }}
                      onClick={() => props.carregar(aluno)}
                    >
                      {IconeEdicao}
                    </button>
                    <button
                      className={styles.linhaButton}
                      style={{ color: "red" }}
                      onClick={() => props.remover(aluno)}
                    >
                      {IconeLixo}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    };
    return <div>{renderTable()}</div>;
  } else {
    return <div>Não autorizado</div>;
  }
}
