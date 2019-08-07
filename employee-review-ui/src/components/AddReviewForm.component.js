import React from "react";
import { Form, Input, Icon, Button, Typography } from "antd";

const { Title } = Typography;
let id = 0;

class AddReviewFormComponent extends React.Component {
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
        const reviewers = keys.map(key => names[key]);
        if (reviewers.length > 0) {
          this.props.onReviewersSubmit(this.props.forEmail, reviewers);
        }
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { title } = this.props;
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
        <Title level={4}>{title}</Title>

        <Form onSubmit={this.handleSubmit}>
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

export default Form.create({ name: "review_form" })(AddReviewFormComponent);
