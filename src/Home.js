import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1> The Excursion App </h1>
                <p> Group Vacations made easy. </p>
                <button>  
                    <a href="/new-trip"> Plan A New Trip </a> 
                </button>
                {/* <button>
                    <a href="/existing"> Edit An Exisiting Trip </a>
                </button> */}
            </div>
        )
    }
}

export default Home