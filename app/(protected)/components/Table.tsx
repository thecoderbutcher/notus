type TableProps<T> = {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: T) => React.ReactNode;
  data: T[];
};

const Table = <T,>({ columns, renderRow, data }: TableProps<T>) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-content text-sm">
          {columns.map(col => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map(item => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
