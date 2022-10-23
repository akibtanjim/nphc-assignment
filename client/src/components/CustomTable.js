import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// custom css
import "../assets/css/CustomTable.css";

const CustomTable = () => {
  return (
    <Table striped responsive="sm">
      <thead className="text-center">
        <tr>
          <th>
            <span>Id</span>
            <FontAwesomeIcon
              icon="arrow-down"
              className="ml-1-fixed cursor-pointer"
              size="xs"
            />
            <FontAwesomeIcon
              icon="arrow-up"
              className="ml-1-fixed cursor-pointer"
              size="xs"
            />
          </th>
          <th>
            <span>Name</span>
            <FontAwesomeIcon
              icon="arrow-down"
              className="ml-1-fixed cursor-pointer"
              size="xs"
            />
            <FontAwesomeIcon
              icon="arrow-up"
              className="ml-1-fixed cursor-pointer"
              size="xs"
            />
          </th>
          <th>
            <span>Login</span>
            <FontAwesomeIcon
              icon="arrow-down"
              className="ml-1-fixed cursor-pointer"
              size="xs"
            />
            <FontAwesomeIcon
              icon="arrow-up"
              className="ml-1-fixed cursor-pointer"
              size="xs"
            />
          </th>
          <th>
            <span>Salary</span>
            <FontAwesomeIcon
              icon="arrow-down"
              className="ml-1-fixed cursor-pointer"
              size="xs"
            />
            <FontAwesomeIcon
              icon="arrow-up"
              className="ml-1-fixed cursor-pointer"
              size="xs"
            />
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon="image" />
            <span className="ml-1">Lorem Ipsum</span>
          </td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>Lorem Ipsum</td>
          <td>
            <FontAwesomeIcon icon="pencil" />
            <FontAwesomeIcon icon="trash" className="ml-1" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomTable;
