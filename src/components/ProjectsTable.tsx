import React, { useMemo } from "react";
import { useTable } from "react-table";
import { IProject } from "../models/IProject";

type Props = {
  data: IProject[];
};

const columns = [
  {
    Header: "Course",
    accessor: "Course" as const,
  },
  {
    Header: "OpenedLessons",
    accessor: "OpenedLessonsCount" as const,
  },
];

function ProjectsTable(props: Props) {
  const data = useMemo(() => props.data, [props.data]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead className="table-dark">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} scope="col">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default ProjectsTable;
