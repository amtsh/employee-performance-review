import React from "react";
import { Table } from "antd";

function ReviewRequestList() {
  const dataSource = [
    {
      key: "1",
      title: "Performance review requested for - Mike"
    },
    {
      key: "2",
      title: "Performance review requested for - John"
    }
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Action",
      key: "action",
      render: record => (
        <span>
          <a href={`${record.id}`}>Write review</a>
        </span>
      )
    }
  ];

  return (
    <div>
      <h1>Reviews requested</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default ReviewRequestList;
