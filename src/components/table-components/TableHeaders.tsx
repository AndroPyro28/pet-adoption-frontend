import { TableHead,TableContainer } from "./components";
type TableHeadProps = {
  arrayOfTitles: string[];
};

function TableHeaders({ arrayOfTitles }: TableHeadProps): JSX.Element {
  const TableHeaders = arrayOfTitles.map((title, index) => (
    <TableHead key={index}>{title}</TableHead>
  ));

  return <TableContainer>{TableHeaders}</TableContainer>;
}

export default TableHeaders;
