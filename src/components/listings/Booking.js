import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useLocation } from "react"
import { BookingContext } from "./BookingProvider"
import "./Booking.css"

export const Booking = ({booking, props}) => {
    if (localStorage.getItem("pts_token")) {




        return (

            
            <section className="bookingCard">

            <h3>Rental Spot Details</h3>
            <p>Spot Owner: {booking.rental_spot.rentee} </p>
            <p>Address: {booking.rental_spot.address} </p>
            <p>City: {booking.rental_spot.city} </p>
            <p>State: {booking.rental_spot.state} </p>
            <p>Max Length: {booking.rental_spot.max_length} ft.</p>
            <p>Start Date: {booking.rental_spot.start_time} </p>
            <p>End Date: {booking.rental_spot.end_time} </p>
            
            <p>Date Booked For: {booking.date} </p>
            <p>Booked By: {booking.renter.pts_user} </p>

            </section>


        )





        }
}
