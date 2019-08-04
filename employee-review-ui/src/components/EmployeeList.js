import React from "react";
import { Table, Divider } from "antd";

function EmployeeList() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      email: "mike@john.com"
    },
    {
      key: "2",
      name: "John",
      email: "mike@john.com"
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a href="javascript:;">Delete</a>
          <Divider type="vertical" />
          <a href="javascript:;">View</a>
        </span>
      )
    }
  ];

  return (
    <div>
      <h1>Employees</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default EmployeeList;
