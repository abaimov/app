import React from "react";
import axios from "axios";

import { Form, Input, Button, DatePicker } from "antd";

const RegistrationUser = () => {
  const onFinish = (values) => {
    axios.post("http://localhost:5000/register", JSON.stringify(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <div className="form_container">
      <div>
        <h2>Sign up</h2>
      </div>
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            values: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={"lastname"}
            label="Lastname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="date-picker" label="DatePicker" {...config}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 13,
              span: 10,
            }}
          >
            <Button type="primary" shape="round" htmlType="submit">
              Create Account
            </Button>
            <Button type="link" href="/">
              Main page
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationUser;
