import React from "react";
import { Form, Input, Button } from "antd";
import { ROUTE_HOME_VIEW } from "../Routes";

const LoginFormComponent = props => {
  const { setSession } = props;
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const session = {
          email: values.email
        };
        setSession(session);
        props.history.push(ROUTE_HOME_VIEW, session);
      }
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 10 }}
    >
      <Form.Item
        label="Employee email"
        extra="Contact your administrator to receive your employee email."
      >
        {getFieldDecorator("email", {
          rules: [
            {
              type: "email",
              message: "The input is not valid email."
            },
            {
              required: true,
              message: "Please input your employee email address."
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item wrapperCol={{ span: 10, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Log me in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "register" })(LoginFormComponent);
