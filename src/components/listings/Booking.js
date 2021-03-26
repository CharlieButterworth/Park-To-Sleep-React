import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useLocation } from "react"
import { BookingContext } from "./BookingProvider"


export const Booking = ({booking, props}) => {
    if (localStorage.getItem("pts_token")) {




        return (
<div class="card text-white bg-success mb-3" style="max-width: 20rem;">
  <div class="card-header">Rental Spot Details</div>
  <div class="card-body">
    <h4 class="card-title">Success card title</h4>
            <p class="card-text">Spot Owner: {booking.rental_spot.rentee} </p>
            <p class="card-text">Address: {booking.rental_spot.address} </p>
            <p class="card-text">City: {booking.rental_spot.city} </p>
            <p class="card-text">State: {booking.rental_spot.state} </p>
            <p class="card-text">Max Length: {booking.rental_spot.max_length} ft.</p>
            <p class="card-text">Start Date: {booking.rental_spot.start_time} </p>
            <p class="card-text">End Date: {booking.rental_spot.end_time} </p>
            
            <p class="card-text">Date Booked For: {booking.date} </p>
            <p class="card-text">Booked By: {booking.renter.pts_user} </p>

          

  </div>
</div>

        )





        }
}
