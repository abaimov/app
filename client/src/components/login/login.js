import React from "react";
import axios from "axios";
import "./login.css";

import { Form, Input, Button } from "antd";

const LoginUser = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios.post("http://localhost:5000/login", JSON.stringify(values));

    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form_container">
      <div>
        <h2>Sign in</h2>
      </div>
      <div>
        <Form
          form={form}
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
              login
            </Button>
            <Button type="link" href="/">
              Main page
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div></div>
    </div>
  );
};

export default LoginUser;
