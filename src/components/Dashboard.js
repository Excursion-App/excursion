import React from 'react';
import '../views/Dashboard.css';

class Dashboard extends React.Component {
    render() {
        return (
            <div class="dashboard">
                <h1> Dashboard </h1>
                <div>
                <button>
                    <a href="/guests"> Back </a>
                </button>
                </div>
                <p> This is where things will go. </p>
            </div>
        )
    }
}

export default Dashboard