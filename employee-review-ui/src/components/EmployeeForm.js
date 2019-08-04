import React from "react";
import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8, offset: 4 }
};
class EmployeeForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h1>New Employee</h1>
        <br />
        <Form.Item {...formItemLayout} label="Full Name">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your name"
              }
            ]
          })(<Input placeholder="Haruki Murakami" />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "Please enter email address"
              }
            ]
          })(<Input placeholder="haruki.murakami@gmail.com" />)}
        </Form.Item>

        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Add Employee
          </Button>
        </Form.Item>
      </div>
    );
  }
}

export default Form.create({ name: "employee_form" })(EmployeeForm);
