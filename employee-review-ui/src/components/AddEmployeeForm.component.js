import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8, offset: 4 }
};

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddEmployeeFormComponent extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { addEmployee } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        addEmployee(values);
        this.handleReset();
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { employee, error } = this.props;

    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const nameError = isFieldTouched("fullname") && getFieldError("fullname");
    const emailError = isFieldTouched("email") && getFieldError("email");
    return (
      <div className="employee-add-wrapper">
        {error && <span className="employee-list-error red">{error}</span>}

        <Title type="secondary" level={2}>
          New Employee
        </Title>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            {...formItemLayout}
            label="Full Name"
            validateStatus={nameError ? "error" : ""}
            help={nameError || ""}
          >
            {getFieldDecorator("fullname", {
              rules: [
                {
                  required: true,
                  message: "Please input your name"
                }
              ]
            })(<Input placeholder="Haruki Murakami" />)}
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            label="Email"
            validateStatus={emailError ? "error" : ""}
            help={emailError || ""}
          >
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Please enter valid email address"
                },
                {
                  required: true,
                  message: "Please enter email address"
                }
              ]
            })(<Input placeholder="haruki.murakami@gmail.com" />)}
          </Form.Item>

          <Form.Item {...formTailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Add Employee
            </Button>
            <br />
            {!!Object.keys(employee).length && (
              <span className="employee-add-success green">
                {employee["fullname"]} ADDED
              </span>
            )}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: "employee_form" })(AddEmployeeFormComponent);
