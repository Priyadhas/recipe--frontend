// import React, { useState, useEffect } from 'react';
// import { Layout, Input, List, Button, message } from 'antd';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const { Content } = Layout;
// const { Search } = Input;

// const Recipe = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [filteredRecipes, setFilteredRecipes] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/recipes')
//       .then(response => {
//         setRecipes(response.data);
//         setFilteredRecipes(response.data);
//       })
//       .catch(error => {
//         message.error('Failed to fetch recipes');
//       });
//   }, []);
//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   axios.get('http://localhost:5000/recipes', {
//   //     headers: {
//   //       'Authorization': `Bearer ${token}`
//   //     }
//   //   })
//   //   .then(response => {
//   //     setRecipes(response.data);
//   //     setFilteredRecipes(response.data);
//   //   })
//   //   .catch(error => {
//   //     message.error('Failed to fetch recipes');
//   //   });
//   // }, []);
  

//   const handleSearch = (value) => {
//     const filtered = recipes.filter(recipe => 
//       recipe.title.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredRecipes(filtered);
//   };

//   return (
//     <Layout>
//       <Content style={{ padding: '50px' }}>
//         <Search placeholder="Search recipes" onSearch={handleSearch} enterButton />
//         <List
//           itemLayout="horizontal"
//           dataSource={filteredRecipes}
//           renderItem={recipe => (
//             <List.Item>
//               <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
//             </List.Item>
//           )}
//         />
//       </Content>
//     </Layout>
//   );
// };

// export default Recipe;
