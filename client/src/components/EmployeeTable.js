import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// hooks
import useSortableData from "../hooks/useSortableData";

// custom css
import "../assets/css/EmployeeTable.css";

const CustomTable = ({ headers = [], data = [] }) => {
  const { items, requestSort, sortConfig } = useSortableData(data);
  console.log(items, sortConfig);
  return (
    <Table striped responsive="sm">
      <thead className="text-center">
        <tr>
          <th className="cursor-pointer" onClick={() => requestSort("id")}>
            <span>Id</span>
            <>
              {sortConfig.key !== "id" && (
                <FontAwesomeIcon
                  icon="sort"
                  className="ml-1-fixed cursor-pointer"
                  size="xs"
                />
              )}
              {sortConfig?.key === "id" &&
                sortConfig?.direction === "descending" && (
                  <FontAwesomeIcon
                    icon="sort-up"
                    className="ml-1-fixed cursor-pointer"
                    size="xs"
                  />
                )}
              {sortConfig?.key === "id" &&
                sortConfig?.direction === "ascending" && (
                  <FontAwesomeIcon
                    icon="sort-down"
                    className="ml-1-fixed cursor-pointer"
                    size="xs"
                  />
                )}
            </>
          </th>
          <th
            className="cursor-pointer"
            onClick={() => requestSort("fullName")}
          >
            <span>Name</span>
            <>
              {sortConfig?.key !== "fullName" && (
                <FontAwesomeIcon
                  icon="sort"
                  className="ml-1-fixed cursor-pointer"
                  size="xs"
                />
              )}
              {sortConfig?.key === "fullName" &&
                sortConfig?.direction === "descending" && (
                  <FontAwesomeIcon
                    icon="sort-up"
                    className="ml-1-fixed cursor-pointer"
                    size="xs"
                  />
                )}
              {sortConfig?.key === "fullName" &&
                sortConfig?.direction === "ascending" && (
                  <FontAwesomeIcon
                    icon="sort-down"
                    className="ml-1-fixed cursor-pointer"
                    size="xs"
                  />
                )}
            </>
          </th>
          <th
            className="cursor-pointer"
            onClick={() => requestSort("userName")}
          >
            <span>Login</span>
            <>
              {sortConfig?.key !== "userName" && (
                <FontAwesomeIcon
                  icon="sort"
                  className="ml-1-fixed cursor-pointer"
                  size="xs"
                />
              )}
              {sortConfig?.key === "userName" &&
                sortConfig?.direction === "descending" && (
                  <FontAwesomeIcon
                    icon="sort-up"
                    className="ml-1-fixed cursor-pointer"
                    size="xs"
                  />
                )}
              {sortConfig?.key === "userName" &&
                sortConfig?.direction === "ascending" && (
                  <FontAwesomeIcon
                    icon="sort-down"
                    className="ml-1-fixed cursor-pointer"
                    size="xs"
                  />
                )}
            </>
          </th>
          <th className="cursor-pointer" onClick={() => requestSort("salary")}>
            <span>Salary</span>
            <>
              {sortConfig?.key !== "salary" && (
                <FontAwesomeIcon
                  icon="sort"
                  className="ml-1-fixed cursor-pointer"
                  size="xs"
                />
              )}
              {sortConfig?.key === "salary" &&
                sortConfig?.direction === "descending" && (
                  <FontAwesomeIcon
                    icon="sort-up"
                    className="ml-1-fixed cursor-pointer"
                    size="xs"
                  />
                )}
              {sortConfig?.key === "salary" &&
                sortConfig?.direction === "ascending" && (
                  <FontAwesomeIcon
                    icon="sort-down"
                    className="ml-1-fixed cursor-pointer"
                    size="xs"
                  />
                )}
            </>
          </th>
          <th>Action </th>
        </tr>
      </thead>
      <tbody className="text-center">
        {items?.map((item, key) => {
          return (
            <tr key={key}>
              <td>
                <FontAwesomeIcon icon="image" />
                <span className="ml-1">{item.id}</span>
              </td>
              <td>{item.fullName || "-"}</td>
              <td>{item.userName || "-"}</td>
              <td>{item.salary || "-"}</td>
              <td>
                <FontAwesomeIcon icon="pencil" />
                <FontAwesomeIcon icon="trash" className="ml-1" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomTable;
