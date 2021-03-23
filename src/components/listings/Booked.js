import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useLocation } from "react"
import { BookingContext } from "./BookingProvider"
import "./Booking.css"

export const Booked = ({booked, props}) => {
    if (localStorage.getItem("pts_token")) {


console.log(booked)

        return (
            <div className="bookingList">

            <>
            
            <h2>Spot Booked</h2>
            <p>Date Booked For: {booked.date} </p>
            <p>Booked By: {booked.renter.pts_user.first_name} {booked.renter.pts_user.last_name} </p>
            <p>Description: {booked.rental_spot.description} </p>
            <p>Address: {booked.rental_spot.address} </p>
            <p>City: {booked.rental_spot.city} </p>
            <p>State: {booked.rental_spot.state} </p>
            <p>First Name: {booked.rental_spot.rentee.pts_user.first_name} </p>
            <p>First Last: {booked.rental_spot.rentee.pts_user.last_name} </p>

            

            
           


</>
            </div>
        )





        }
}