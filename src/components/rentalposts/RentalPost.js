import React from "react"
import { Link } from "react-router-dom"

export const RentalPost = ({ rentalpost, rentee, props }) => {
    if (localStorage.getItem("pts_token")) {

        return (
            <section className="rentalpostCard">
               <p>Description: {rentalpost.description} </p>
                <p>Max Length: {rentalpost.max_length} ft</p>
                <p>City: {rentalpost.city}</p>
                <p>State: {rentalpost.state}</p>
                <p>Address: {rentalpost.address}</p>
                <p>Start Time: {rentalpost.start_time}</p>
                <p>End Time: {rentalpost.end_time}</p>
                <p>First Name: {rentalpost.rentee.pts_user.first_name}</p>
                <p>Last Name: {rentalpost.rentee.pts_user.last_name}</p>
            </section>
        )
    } else {
        return (
            <section>
                <p>No post available. </p>
            </section>
        )
    }
}