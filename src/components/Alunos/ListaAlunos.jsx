import { useEffect, useState } from "react";
import styles from "@/styles/Alunos.module.css";

export default function ListaAlunos() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5241/api/Aluno")
      .then((resp) => resp.json())
      .then((alunos) => setLista(alunos));

    console.log(lista);
  }, []);

  return (
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>RA</th>
            <th className={styles.th}>Nome</th>
            <th className={styles.th}>Curso</th>
          </tr>
        </thead>
        {lista.map((aluno) => {
          return (
            <tbody>
              <tr>
                <td className={styles.td}>{aluno.ra}</td>
                <td className={styles.td}>{aluno.nome}</td>
                <td className={styles.td}>{aluno.codCurso}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
  );
}
