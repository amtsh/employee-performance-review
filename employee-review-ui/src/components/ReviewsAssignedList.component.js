import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const ReviewsAssignedListComponent = props => {
  const onWriteClickHandler = (id, revieweeName) => {
    props.onWrite(id, revieweeName);
  };

  const dataSource = props.reviews
    .filter(review => review.is_complete === "false")
    .map(review => ({
      ...review,
      key: review.id,
      revieweeName: review.reviewee.fullname,
      title: `You are requested to write review for - ${
        review.reviewee.fullname
      }`
    }));

  const columns = [
    {
      title: "Review requests",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Action",
      key: "action",
      render: record => (
        <span>
          <a
            onClick={() => {
              onWriteClickHandler(record.key, record.revieweeName);
            }}
          >
            Write
          </a>
        </span>
      )
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

export default ReviewsAssignedListComponent;
