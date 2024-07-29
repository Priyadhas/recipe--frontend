import React, { useState } from 'react';
import "../../App.css"
import { Form, Input, Button, message, Layout } from 'antd';
import { register } from '../../api';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await register(values);
      message.success('Registration successful');
      navigate('/login');
    } catch (error) {
      message.error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={{height:'100px',width:'800px',marginLeft:'200px'}}>
      <Content style={{ padding: '70px',marginLeft:'120px' }}>
   <div id="image1" className="style">
    <Form name="register"
     onFinish={onFinish} 
     layout="vertical" style={{marginRight:'200px'}} >
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    </Content>
    </Layout>
  );
};

export default Register;
