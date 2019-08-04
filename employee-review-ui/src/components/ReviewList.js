import React from "react";
import { Table } from "antd";

function ReviewList() {
  const dataSource = [
    {
      key: "1",
      title: "Mike - Performance Review",
      status: "PENDING"
    },
    {
      key: "2",
      title: "John - Performance Review",
      status: "COMPLETED"
    }
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a href="javascript:;">View</a>
        </span>
      )
    }
  ];

  return (
    <div>
      <h1>Reviews</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default ReviewList;
