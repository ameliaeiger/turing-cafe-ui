import React, { Component } from "react"
import { existingReservations } from "../../apiCalls"
import "./Reservation.css"

const Reservation = ({date, name, number, time}) => {

    return (
        <div className="reservation-card">
            <div>{name}</div>
            <div>{date}</div>
            <div>{time}</div>
            <div>{number}</div>
            <button>Cancel</button>
        </div>
    )
}

export default Reservation;