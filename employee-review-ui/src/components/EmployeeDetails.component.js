import React from "react";
import { Descriptions, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_ADMIN_VIEW } from "./../Routes";

const { Title } = Typography;

const EmployeeDetailsComponent = props => {
  const { employee } = props;

  return (
    <div>
      <div className="Actions-bar">
        <Link to={`${ROUTE_ADMIN_VIEW}`}>
          <Button type="secondary" style={{ marginLeft: 10 }}>
            Employees List
          </Button>
        </Link>
      </div>

      <Title level={3} type="secondary">
        {props.title}
      </Title>
      <br />
      <Descriptions title={`${employee.fullname}`}>
        <Descriptions.Item label="Email">{employee.email}</Descriptions.Item>
        <Descriptions.Item label="Joined Date">
          {new Date(employee.createdAt).toDateString()}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default EmployeeDetailsComponent;
