import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

const { Header } = Layout;

const App = () => {
  return (
    <Layout style={{height:'100px',width:'100%'}}>
      <Header className='fixed-header'>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/register">Register</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/profile">Profile</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/recipes">Recipes</Link></Menu.Item>
         </Menu>
      </Header>
      
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/recipes" exact element={<RecipeList/>} />
          <Route path="/recipes/:id" element={<RecipeDetails/>} />
          
        </Routes>
    </Layout>
  );
};

export default App;



