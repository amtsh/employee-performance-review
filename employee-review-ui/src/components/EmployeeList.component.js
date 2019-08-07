import React from "react";
import { Table, Divider, Typography } from "antd";

const { Title } = Typography;

const EmployeeListComponent = props => {
  const onDeleteHandler = id => {
    props.onDelete(id);
  };

  const onViewHandler = id => {
    props.onView({ employeeId: id });
  };

  const dataSource = props.employees.map(employee => ({
    ...employee,
    key: employee.id
  }));

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
          <a
            onClick={() => {
              onViewHandler(`${record.id}`);
            }}
          >
            View
          </a>
        </span>
      )
    }
  ];

  return (
    <div>
      <Title level={2} type="secondary">
        Employees
      </Title>
      <br />
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default EmployeeListComponent;
