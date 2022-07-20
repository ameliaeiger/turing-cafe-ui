import React, { Component } from 'react';
import './App.css';
import { existingReservations } from '../apiCalls';
import Reservation from './components/Reservation';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        data: "",
        id: "",
        name: "",
        date: "",
        time: "",
        number: 0

      }
  }
  componentDidMount() {
    existingReservations().then(data => {
      this.setState({
        data: data
      })
    });
    this.getResCards()
    
  }
  getResCards() {
   let array = this.state.data.map((res) => {
      return (
      <Reservation 
      key={res.id}
      date={res.date}
      name={res.name}
      number={res.number}
      time={res.time}/>
    )});
    console.log(array)
  };
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservation 
          curRes={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;
