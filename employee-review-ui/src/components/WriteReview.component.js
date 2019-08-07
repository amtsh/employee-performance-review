import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

const WriteReviewComponent = props => {
  const { onReviewSubmit } = props;
  const { reviewId, revieweeName } = props.review;
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onReviewSubmit(reviewId, values.reviewText);
      }
    });
  };

  return (
    <div>
      <Title type="secondary" level={3}>
        {`Write review for ${revieweeName}`}
      </Title>
      <br />

      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("reviewText", {
            rules: [
              {
                required: true,
                message: "Please write review"
              }
            ]
          })(<TextArea rows={10} placeholder="Write here ..." />)}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Review
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: "register" })(WriteReviewComponent);
