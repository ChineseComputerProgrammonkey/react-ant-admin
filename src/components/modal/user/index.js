import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Select } from "antd";
import { getPower } from "@/api";

const { Option } = Select;
const unRule = [{ required: true, message: "请填写用户名" }];
const accountRule = [{ required: true, message: "请填写登录账号" }];
const paswdRule = [{ required: true, message: "请填写登录密码" }];
const menuRule = [{ required: true, message: "请选择菜单权限" }];

export default function UserModal({ user_id, isShow, onCancel }) {
  const [form] = Form.useForm();
  const [powers, setPowers] = useState([]);
  useEffect(() => {
    getPower().then((res) => {
      if (res.status === 0) {
        setPowers(res.data);
      }
    });
  }, []);
  const submit = () => {
    form.validateFields().then(values => {
      console.log(values);
    })
  };
  return (
    <Modal
      maskClosable={false}
      title={user_id ? "修改信息" : "添加账户"}
      visible={isShow}
      okText="确认"
      cancelText="取消"
      onCancel={() => onCancel(null, false)}
      onOk={submit}
    >
      <Form form={form}>
        <Form.Item name="username" rules={unRule} required label="用户名">
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item name="account" rules={accountRule} required label="登录账号">
          <Input placeholder="登录账号" />
        </Form.Item>
        <Form.Item name="pswd" rules={paswdRule} required label="登录密码">
          <Input type="password" placeholder="登录密码" />
        </Form.Item>

        <Form.Item rules={menuRule} name="type" required label="菜单权限">
          <Select placeholder="菜单权限">
            {powers.map((power) => (
              <Option value={power.type} key={power.type}>
                {power.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}