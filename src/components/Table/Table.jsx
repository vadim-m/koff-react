import style from './Table.module.scss';

export const Table = ({ data }) => {
  return (
    <table className={style.table}>
      <tbody>
        {data?.length &&
          data.map(([key, value]) => (
            <tr className={style.row} key={key}>
              <th className={style.key}>{key}</th>
              <td className={style.value}>{value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
