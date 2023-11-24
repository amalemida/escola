import { useEffect, useState } from "react";
import styles from "@/styles/ListaCursos.module.css";
import { IconeEdicao, IconeLixo } from "@/components/Icones";
import AuthService from "@/services/AuthService";
import axios from "axios";

export default function ListaCursos(props) {
  const urlAPI = AuthService.API_URL + "api/Curso/";
  const [lista, setLista] = useState([]);
  const user = AuthService.getCurrentUser();
  if (user) {
    useEffect(() => {
      axios(urlAPI).then((resp) => {
        setLista(resp.data);
      });
    }, []);
    const renderTable = () => {
      return (
        <table className={styles.tabCursos}>
          <thead>
            <tr className={styles.cabecTabela}>
              <th className={styles.tabTituloCodigo}>Código</th>
              <th className={styles.tabTituloNome}>Nome</th>
              <th>Período</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lista.map((curso, i) => {
              return (
                <tr key={curso.id}>
                  <td> {curso.codigo} </td>
                  <td> {curso.nome} </td>
                  <td> {curso.periodo} </td>
                  <td>
                    <button
                      className={styles.linhaButton}
                      style={{ color: "blue" }}
                      onClick={() => props.carregar(curso)}
                    >
                      {IconeEdicao}
                    </button>
                    <button
                      className={styles.linhaButton}
                      style={{ color: "red" }}
                      onClick={() => props.remover(curso)}
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
