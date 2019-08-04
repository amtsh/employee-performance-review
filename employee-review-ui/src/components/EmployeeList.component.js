import React from "react";
import { Table, Divider } from "antd";

const EmployeeListComponent = props => {
  const onDeleteHandler = id => {
    props.onDelete(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "fullname",
      key: "fullname"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Action",
      key: "action",
      render: record => (
        <span>
          <a
            onClick={() => {
              onDeleteHandler(`${record.id}`);
            }}
          >
            Delete
          </a>
          <Divider type="vertical" />
          <a href={`${record.id}`}>View</a>
        </span>
      )
    }
  ];

  return (
    <div>
      <h1>Employees</h1>
      <Table dataSource={props.employees} columns={columns} />
    </div>
  );
};

export default EmployeeListComponent;
