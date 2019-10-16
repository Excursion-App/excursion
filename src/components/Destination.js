import React from 'react';
import '../views/Destination.css';
// import Calendar from 'react-calendar';

class NewTrip extends React.Component {
  render() {
    return (
      <div class="destination">
        <h1> Where are you going? </h1>
        <div>
          <span> img of paris </span>
          <span> img of hawaii </span>
          <span> img of sydney </span>
        </div>
        <div class="destination">
          From: <input type="text"/> To: <input type="text"/>
        </div>

        <div>
          <button>
            <a href="/"> Back </a>  
          </button>
          
          <button>
            <a href="/travel-dates"> Next </a>  
          </button>
        </div>
        
      </div>
    )
  }
}
// class NewTrip extends React.Component {
//     constructor(props) {
//         super()
//         this.state = {
//           guestCount: 0,
//           date: new Date(),
//           destination: '',
//           // value: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }
//     addGuest = (e) => {
//       e.preventDefault()  
//       this.setState({
//         guestCount: this.state.guestCount + 1
//       })
//     }
//     removeGuest = (e) => {
//         e.preventDefault()
//       this.setState({
//         guestCount: this.state.guestCount - 1
//       })
//     }
//     onChange = (date) => {
//       this.setState({ date })
//     }

//     handleChange(e) {
//       this.setState({destination: e.target.value});
//     }

//     onSubmit(e) {
//       e.preventDefault()

//       // handle submit stuff here...
//       console.log("Hi Step")
//       console.log(this.state)
//     }

//     render() {
//         return (
//            <div>
//                 Plan A New Trip 
//                 <form>
//                     Where are you going?
//                     <input placeholder="destination" value={this.state.destination} onChange={this.handleChange}/>
//                     <br />

//                     When are you planning on going?
//                     <Calendar
//                       onChange={this.onChange}
//                       value={this.state.date}
//                     />
//                     {/* <input placeholder="dates" /> */}
//                     <br />

//                     {/* Where are you starting?
//                     <input placeholder="Starting" />
//                     <br /> */}

//                     How many people are going? {this.state.guestCount}
//                     <button onClick={this.addGuest}>Add Guest</button>
//                     <button onClick={this.removeGuest}>Remove Guest</button>
//                     <br />

//                     {/* How are y'all getting there?
//                     <input placeholder="" />
//                     <br /> */}
//                 </form>
//                 <input type="submit" onClick={(e) => {
//                   this.onSubmit(e)
//                 }} />
//            </div> 
//         )
//     }
// }

export default NewTrip