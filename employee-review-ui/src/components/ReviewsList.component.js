import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const ReviewsListComponent = props => {
  const dataSource = props.reviews.map(review => ({
    ...review,
    key: review.id,
    reviewer_name: review.reviewer.fullname,
    review_text:
      review.is_complete === "false" ? "NOT SUBMITTED YET" : review.review_text
  }));

  const columns = [
    {
      title: "Reviewer",
      dataIndex: "reviewer_name",
      key: "reviewer_name",
      align: "center",
      width: 100
    },
    {
      title: "Review",
      dataIndex: "review_text",
      key: "review_text",
      width: 200
    }
  ];

  return (
    <div>
      <Title level={4} type="secondary">
        {props.title}
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

export default ReviewsListComponent;
