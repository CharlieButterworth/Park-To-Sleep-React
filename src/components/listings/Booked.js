import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useLocation } from "react"
import { BookingContext } from "./BookingProvider"


export const Booked = ({booked, props}) => {
    if (localStorage.getItem("pts_token")) {


console.log(booked)

        return (
            <>
            <p>Description: {booked.rental_spot.description} </p>
            <p>Date Booked For: {booked.date} </p>
            <p>Address: {booked.rental_spot.address} </p>
            <p>City: {booked.rental_spot.city} </p>
            <p>State: {booked.rental_spot.state} </p>
            <p>First Name: {booked.rental_spot.rentee.pts_user.first_name} </p>
            <p>First Last: {booked.rental_spot.rentee.pts_user.last_name} </p>
           


</>
        )





        }
}