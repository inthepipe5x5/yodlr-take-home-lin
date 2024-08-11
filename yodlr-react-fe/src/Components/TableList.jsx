import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { uniqueId } from "lodash";
/*
This component will render a table listing the users with their details.

Component Definition: TableList is a functional component that takes content as a prop. 
The `content` prop is expected to be an array of user objects.

Table Structure: The table is created using the Table component from Reactstrap. It includes a header (thead) and a body (tbody).
Mapping Content: The content array is mapped to generate table rows (<tr>) for each user object. Each row contains cells (<td>) for the user's ID, username, email, first name, last name, and state.
PropTypes: The propTypes property is used to define the expected shape of the content prop, ensuring that each user object contains the specified fields.
*/

const TableList = ({ content }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>ID</th>
          {/* <th>Username</th> */}
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {content.map((user) => (
          <Link key={uniqueId()} to={`/users/${user.id}`}>
            <tr
              key={user.id}
              className={
                user.state === "pending" ? "row-secondary" : "row-success"
              }
            >
              <td>{user.id}</td>
              {/* <td>{user.username}</td> */}
              <td>{user.email}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.state}</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </Table>
  );
};

TableList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      //   username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      state: PropTypes.oneOf(["pending", "active"]).isRequired,
    })
  ).isRequired,
};

export default TableList;
