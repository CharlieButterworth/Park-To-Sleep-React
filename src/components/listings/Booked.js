import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useLocation } from "react"
import { BookingContext } from "./BookingProvider"


export const Booked = ({booked, props}) => {
    if (localStorage.getItem("pts_token")) {

// this is the single instance of a booked spot
// console.log(booked)

        return (
            <div class="card text-white bg-success mb-3" style={{maxwidth: '20rem;'}}>
  <div class="card-header">Spot Booked</div>
  <div class="card-body">
    
            <p class="card-text">Date Booked For: {booked.date} </p>
            <p class="card-text">Booked By: {booked.renter.pts_user.first_name} {booked.renter.pts_user.last_name} </p>
            <p class="card-text">Description: {booked.rental_spot.description} </p>
            <p class="card-text">Address: {booked.rental_spot.address} </p>
            <p class="card-text">City: {booked.rental_spot.city} </p>
            <p class="card-text">State: {booked.rental_spot.state} </p>
            <p class="card-text">First Name: {booked.rental_spot.rentee.pts_user.first_name} </p>
            <p class="card-text">First Last: {booked.rental_spot.rentee.pts_user.last_name} </p>
            <p class="card-text">Email: {booked.rental_spot.rentee.pts_user.username} </p>

            
  </div>
</div>

            
           



         
        )





        }
}