import React from "react";
import { Form, Input, Icon, Button } from "antd";

// const formItemLayout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 8 }
// };
// const formTailLayout = {
//   labelCol: { span: 3 },
//   wrapperCol: { span: 8, offset: 4 }
// };

let id = 0;

class ReviewForm extends React.Component {
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log("Received values of form: ", values);
        console.log("Merged values:", keys.map(key => names[key]));
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 }
      }
    };
    getFieldDecorator("keys", { initialValue: [] });
    const keys = getFieldValue("keys");
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? "Reviewer Email:" : ""}
        required={true}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ["onChange", "onBlur"],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input Employee's email or delete this field."
            }
          ]
        })(
          <Input
            placeholder="Enter email address"
            style={{ width: "60%", marginRight: 8 }}
          />
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));

    return (
      <div>
        <h1>New Review</h1>
        <br />

        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="Review for employee: ">
            {getFieldDecorator("email", {
              rules: [
                {
                  required: true,
                  message: "Please enter email address"
                }
              ]
            })(<Input placeholder="haruki.murakami@gmail.com" />)}
          </Form.Item>

          {formItems}
          <Form.Item {...formItemLayoutWithOutLabel}>
            <Button type="dashed" onClick={this.add} style={{ width: "60%" }}>
              <Icon type="plus" /> Add Reviewer
            </Button>
          </Form.Item>
          <Form.Item {...formItemLayoutWithOutLabel}>
            <Button type="primary" htmlType="submit">
              Request Review
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: "review_form" })(ReviewForm);
