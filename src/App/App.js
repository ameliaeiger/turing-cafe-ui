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
      console.log(prevState)
      let object = {
        id: prevState.data.length+1,
        name: prevState.name,
        date: prevState.date,
        time: prevState.time,
        number: prevState.number
      }
      console.log(object)

    }))
  }
  getResCards(array) {
   let test = array.map(res => 
      <Reservation 
      key={res.id}
      date={res.date}
      name={res.name}
      number={res.number}
      time={res.time}/>
    )
    return test
  };
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <form>
            <label>
              Name:
              <input onChange={event => this.handleChange(event)} type="text" name="name" value={this.state.name}></input>
            </label>
            <label>
              Date:
              <input onChange={event => this.handleChange(event)} type="date" name="date" value={this.state.date}></input>
            </label>
            <label>
              People:
              <input onChange={event => this.handleChange(event)} type="number" name="number" value={this.state.number}></input>
            </label>
            <button onClick={event => this.handleClick(event)}>Make a Reservation</button>
          </form>
        </div>
        <div className='resy-container'>
          {this.state.data && this.getResCards(this.state.data)}
        </div>
      </div>
    )
  }
}

export default App;
