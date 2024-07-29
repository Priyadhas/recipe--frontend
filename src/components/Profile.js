import '../App.css';

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Layout} from 'antd';
import { getUser, updateUser, deleteUser } from '../api';
const {Content}= Layout;
const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  let userId = null;
  const storedUser = localStorage.getItem('user');
  
  if (storedUser) {
    try {
      userId = JSON.parse(storedUser).id;
    } catch (e) {
      setError('Failed to parse user data');
    }
  }

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          
          const response = await getUser(userId
 );
          setUser(response.data);
        } catch (error) {
          message.error('Failed to load user data');
        }
      };
      fetchUser();
    } else {
      setError('No user data found. Please log in again.');
    }
  }, [userId]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
    
      await updateUser(userId, values);
      message.success('Profile updated');
    } catch (error) {
      message.error('Update failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
     
      await deleteUser(userId);
      message.success('Profile deleted');
      localStorage.removeItem('user');
      window.location.href = '/';
    } catch (error) {
      message.error('Delete failed');
    }
  };

  if (error) return <div>{error}</div>;

  if (!user) return <div>Loading...</div>;

  return (
    <Layout style={{height:'100px',width:'800px',marginLeft:'200px'}}>
      <Content style={{ padding: '70px',marginLeft:'120px' }}>
    <div id='image1'className='style' style={{boxshadow: '12px -7px 28px 1px rgba(56,99,143,1)'}}>
    <Form name="profile" onFinish={onFinish} layout="vertical" initialValues={user} style={{marginRight:'200px'}}>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="danger" onClick={handleDelete}>
          Logout
        </Button>
      </Form.Item>
    </Form>
    </div>
    </Content>
    </Layout>
  );
};

export default Profile;

// import React, { useEffect, useState } from 'react';
// import { Form, Input, Button, message, Layout } from 'antd';
// import { getUser, updateUser, deleteUser } from '../api';
// const { Content } = Layout;

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
  
//       const storedUser = localStorage.getItem('user');
//       if (storedUser) {
//         try {
//           const userId = JSON.parse(storedUser).id;
//           const response = await getUser(userId);
//           setUser(response.data);
//         } catch (error) {
//           message.error('Failed to load user data');
//         }
//       } else {
//         setError('No user data found. Please log in again.');
//       }
//     };
//     fetchUser();
//   }, []);

//   const onFinish = async (values) => {
//     const token = localStorage.getItem('token');
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       const userId = JSON.parse(storedUser).id;
//       setLoading(true);
//       try {
//         await updateUser(userId, values, token);
//         message.success('Profile updated');
//       } catch (error) {
//         message.error('Update failed');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleDelete = async () => {
//     const token = localStorage.getItem('token');
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       const userId = JSON.parse(storedUser).id;
//       try {
//         await deleteUser(userId, token);
//         message.success('Profile deleted');
//         localStorage.removeItem('user');
//         localStorage.removeItem('token');
//         window.location.href = '/';
//       } catch (error) {
//         message.error('Delete failed');
//       }
//     }
//   };

//   if (error) return <div>{error}</div>;

//   if (!user) return <div>Loading...</div>;

//   return (
//     <Layout style={{ height: '100px', width: '800px', marginLeft: '200px' }}>
//       <Content style={{ padding: '70px', marginLeft: '120px' }}>
//         <div id='image1' className='style' style={{ boxShadow: '12px -7px 28px 1px rgba(56,99,143,1)' }}>
//           <Form name="profile" onFinish={onFinish} layout="vertical" initialValues={user} style={{ marginRight: '200px' }}>
//             <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
//               <Input />
//             </Form.Item>
//             <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
//               <Input />
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit" loading={loading}>
//                 Update
//               </Button>
//             </Form.Item>
//             <Form.Item>
//               <Button type="danger" onClick={handleDelete}>
//                 Logout
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default Profile;
