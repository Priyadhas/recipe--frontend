import React, { useState } from 'react';
import "../../App.css"
import { Form, Input, Button, message, Layout } from 'antd';
import { login } from '../../api';
import { useNavigate} from 'react-router-dom';
 const { Content} = Layout;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await login(values);
      message.success('Login successful');
      localStorage.setItem('user', JSON.stringify(response.data));
      const userId = response.data.id; // Adjust according to the structure of your response
     console.log('User ID:', userId);
     navigate('/profile');
    } catch (error) {
      message.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={{height:'100px',width:'800px',marginLeft:'200px'}}>
    <Content style={{ padding: '70px',marginLeft:'120px' }}>
    <div id='image1' className='style'>
    <Form name="login" onFinish={onFinish} layout="vertical" style={{marginRight:'200px'}}  >
    <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
    <Input/>
    </Form.Item>
    <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
    <Input.Password />
    </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
    </Content>
    </Layout>
  );
};

export default Login;
