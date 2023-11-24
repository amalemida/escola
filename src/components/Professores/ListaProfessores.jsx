import { useEffect, useState } from "react";
import styles from "@/styles/ListaProfessores.module.css";
import { IconeEdicao, IconeLixo } from "@/components/Icones";
import AuthService from "@/services/AuthService";
import axios from "axios";

export default function ListaProfessores(props) {
  const urlAPI = AuthService.API_URL + "api/Professor/";
  const [lista, setLista] = useState([]);
  const user = AuthService.getCurrentUser();
  //console.log("USER: " + user)
  if (user) {
    useEffect(() => {
      /*fetch('http://localhost:5176/api/professor')
.then(resp => resp.json())
.then(professores => setLista(professores))
.catch(error => console.log("ERRO FETCH"));*/
      axios(urlAPI).then((resp) => {
        setLista(resp.data);
      });
    }, []);
    const renderTable = () => {
      return (
        <table className={styles.tabProfessores}>
          <thead>
            <tr className={styles.cabecTabela}>
              <th className={styles.tabTituloNome}>Nome</th>
              <th className={styles.tabTituloEmail}>Email</th>
              <th>Curso</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lista.map((professor, i) => {
              return (
                <tr key={professor.id}>
                  <td> {professor.nome} </td>
                  <td> {professor.email} </td>
                  <td> {professor.codCurso} </td>
                  <td>
                    <button
                      className={styles.linhaButton}
                      style={{ color: "blue" }}
                      onClick={() => props.carregar(professor)}
                    >
                      {IconeEdicao}
                    </button>
                    <button
                      className={styles.linhaButton}
                      style={{ color: "red" }}
                      onClick={() => props.remover(professor)}
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
