import React, { Component } from 'react';
import './App.css';
import { existingReservations, makeNewReservation, deleteReservation } from '../apiCalls';
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
        data: data,
      })
    });    
  };
  handleChange(e) {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleClick(e) {
    e.preventDefault()
    this.setState((prevState => {
      let newReservation = {
        id: prevState.data.length+1,
        name: prevState.name,
        date: prevState.date,
        time: prevState.time,
        number: prevState.number
      };
      this.createPostObject(newReservation);
      makeNewReservation(newReservation);
      return {
        data: [...prevState.data, newReservation]
      };
    }));
  };
  handleDeleteClick(e) {
    deleteReservation(e.target.parentElement.id)
  }
  getResCards(array) {
   let test = array.map(res => 
      <Reservation 
      key={res.id}
      id={res.id}
      date={res.date}
      name={res.name}
      number={res.number}
      time={res.time}
      deleteClick={this.handleDeleteClick}/>
    )
    return test
  };
  createPostObject(newReservation) {
    let object = {
      id: newReservation.key,
      name: newReservation.name,
      date: newReservation.date,
      time: newReservation.time,
      number: newReservation.number,
    }
  return object
}
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <form className="form">
            <label>
              Name:
              <input onChange={event => this.handleChange(event)} type="text" name="name" value={this.state.name} id="name"></input>
            </label>
            <label>
              Date:
              <input onChange={event => this.handleChange(event)} type="date" name="date" value={this.state.date} id="date"></input>
            </label>
            <label>
              Time:
              <input onChange={event => this.handleChange(event)} type="time" name="time" value={this.state.time} id="time"></input>
            </label>
            <label>
              People:
              <input onChange={event => this.handleChange(event)} type="number" name="number" value={this.state.number} id="number"></input>
            </label>
            <button onClick={event => this.handleClick(event)} id="submit-reservation">Make a Reservation</button>
          </form>
        </div>
        <section className='resy-container'>
          {this.state.data && this.getResCards(this.state.data)}
        </section>
      </div>
    )
  }
}

export default App;
