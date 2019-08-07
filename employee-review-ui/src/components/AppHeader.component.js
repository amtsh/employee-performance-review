import React from "react";
import "./../App.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_ROOT_VIEW } from "./../Routes";

const { Title, Text } = Typography;

function AppHeaderComponent() {
  return (
    <div className="App-header">
      <Link to={ROUTE_ROOT_VIEW}>
        <Title>
          <span role="img" aria-label="claps">
            👏
          </span>{" "}
          <span className="red">Applause</span>{" "}
          <span role="img" aria-label="claps">
            👏
          </span>
        </Title>
      </Link>

      <Text strong>Performance review for your team</Text>
      <br />
    </div>
  );
}

export default AppHeaderComponent;
