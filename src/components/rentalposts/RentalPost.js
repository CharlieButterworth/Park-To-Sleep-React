import React from "react"
import { Link } from "react-router-dom"

export const RentalPost = ({ rentalpost, props }) => {
    if (localStorage.getItem("pts_token")) {

        return (
            <section className="postCard">
               <p>Description: {rentalpost.description} </p>
                <p>Max Length: {rentalpost.maxLenght}</p>
                <p>City: {rentalpost.city}</p>
                <p>State: {rentalpost.state}</p>
                <p>Address: {rentalpost.address}</p>
                <p>Start Time: {rentalpost.start_time}</p>
                <p>End Time: {rentalpost.end_time}</p>
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