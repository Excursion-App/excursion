import React from 'react';
import '../views/Home.css';

class Home extends React.Component {
  render() {
    return (
     <div className="home">
       <h1> Excursions </h1>
       <p> Group travel made easy. </p>
       <button type="button" className="user-flow">
        <a href="/destination"> Plan A New Trip </a>
       </button>
     </div>
    )
  }
}

export default Home;
