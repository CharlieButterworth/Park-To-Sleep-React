import React from "react"
import { Link } from "react-router-dom"
import "./RentalPost.css"


export const RentalPost = ({ rentalpost, props }) => {
    if (localStorage.getItem("pts_token")) {

        return (
            <section className="rentalpostCard">
                <Link to={{ pathname: `/rentalposts/${rentalpost.id}`, state: { chosenPost: rentalpost } }}>
                        Title: {rentalpost.description}
                    </Link>
               <p>Description: {rentalpost.description} </p>
                <p>Max Length: {rentalpost.max_length} ft</p>
                <p>City: {rentalpost.city}</p>
                <p>State: {rentalpost.state}</p>
                <p>Address: {rentalpost.address}</p>
                {/* <p>Phone Number: {rentalpost.phone}</p> */}
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