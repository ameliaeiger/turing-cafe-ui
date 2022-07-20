import React, { Component } from "react"
import "./Reservation.css"

const Reservation = ({id, date, name, number, time, deleteClick}) => {

    return (
        <div className="reservation-card" id={id}>
            <div>{name}</div>
            <div>{date}</div>
            <div>{time}</div>
            <div>{number}</div>
            <button onClick={event => deleteClick(event)}>Cancel</button>
        </div>
    )
}

export default Reservation;