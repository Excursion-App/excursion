import React from 'react';
import '../views/Home.css';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import Navbar from './Navbar';

<<<<<<< HEAD
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
=======
const Home = () => (
  <>
    <Navbar />
    <div className="home">
      <Breadcrumb />
      <div className="home2">
        <h1 className="title"> EXCURSION </h1>
        <p> Group Travel Made Easy. </p>
        <button type="button" className="user-flow">
          <Link to="/destination"> Plan A New Trip </Link>
        </button>
      </div>
    </div>
  </ >
);
>>>>>>> e2cc96b5aa5757137dd287443b322daaee6009e3

export default Home;
