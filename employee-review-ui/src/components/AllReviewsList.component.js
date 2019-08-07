import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const AllReviewsListComponent = props => {
  const { reviews } = props;

  const dataSource = reviews.map(review => ({
    key: review.id,
    reviewee: review.reviewee.fullname,
    reviewer: review.reviewer.fullname,
    status: review.is_complete
  }));

  const columns = [
    {
      title: "Reviewer",
      dataIndex: "reviewer",
      key: "reviewer"
    },
    {
      title: "Review For",
      dataIndex: "reviewee",
      key: "reviewee"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: status => (
        <span className={status === "false" ? "red" : "green"}>
          {status === "false" ? "PENDING" : "COMPLETE"}
        </span>
      )
    }
  ];

  return (
    <div>
      <Title level={2} type="secondary">
        Reviews
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

export default AllReviewsListComponent;
