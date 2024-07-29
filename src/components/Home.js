import React from 'react';
import '../App.css';
import { Layout} from 'antd';
const { Footer, Content } = Layout;


const Home = () => {
  return (
    <div >
    <Layout >
    {/* <marquee behavior="scroll" direction="up" scrollamount="1" id='size'>Enjoy the flavors of different recipes!</marquee>
     */}
      <Content id="image" >
            {/* <img id='move' src='images.jpg'></img> */}
            <br></br>
            <br></br>
            <h1 id='size1'>Enjoy the flavors of different recipes!</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 id='size'>-----------------RECIPES-----------------</h1>
      </Content>

    <Footer style={{ textAlign: 'center' }}>Recipe Management ©2024</Footer>
    </Layout>
    </div>
  );
};

export default Home;
