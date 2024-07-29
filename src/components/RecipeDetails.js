import React, { useState, useEffect } from 'react';
import { Layout, Button, Input, message } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

const { Content } = Layout;

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        message.error('Failed to fetch recipe details');
      });
  }, [id]);

  const handleSendEmail = async () => {
    try {
      
      await axios.post('http://localhost:5000/recipes/send-recipe', { email, recipeId: id });
      message.success('Recipe sent to email!');
    } catch (error) {
      message.error('Failed to send email');
    }
  };

  return (
    <Layout style={{height:'100px',width:'1050px',marginLeft:'50px'}}>
      <Content style={{ padding: '70px',marginLeft:'200px' }}>
        {recipe && (
          <>
            <h1 className='App'>{recipe.title}</h1>
            <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '100%', height: 'auto' }} />
            <h2>Ingredients</h2>
            <p>{recipe.ingredients}</p>
            <h2>Preparation</h2>
            <p>{recipe.preparation}</p>
            <h2>Review</h2>
            <p>{recipe.review}</p>
            <h3>Watchout, how to prepare your favorite recipe</h3>
            <p>{'https://youtu.be/RKNogWbAivY?si=6XS3WQNO6MvVm5G0'}</p>
            <h3>Send the recipe of your favorite dish to your friend! Enjoy Sharing! </h3>
            <Input 
              placeholder="Enter your email" 
              value={email}
              onChange={e => setEmail(e.target.value)} 
            />
            <br></br>
            <br></br>
            <Button type="primary" onClick={handleSendEmail}>
              Send Recipe to Email
            </Button>
            <br></br>
      <br></br>
          </>
        )}
      </Content>
      <br></br>
      <br></br>

    </Layout>
  );
};

export default RecipeDetails;
