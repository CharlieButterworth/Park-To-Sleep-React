import React from "react"
import { Link } from "react-router-dom"
import "./RentalPost.css"


export const RentalPost = ({ rentalpost, props }) => {
    if (localStorage.getItem("pts_token")) {

        return (
            <div class="card text-white bg-dark mb-3" style={{maxwidth: '20rem;'}}>
  <div class="card-header">Rental Post</div>
  <div class="card-body">
                <Link to={{ pathname: `/rentalposts/${rentalpost.id}`, state: { chosenPost: rentalpost } }}>
                        Title: {rentalpost.description}
                    </Link>
    
    
            
               {/* <p>Description: {rentalpost.description} </p> */}
                <p class="card-text">Max Length: {rentalpost.max_length} ft</p>
                <p class="card-text">City: {rentalpost.city}</p>
                <p class="card-text">State: {rentalpost.state}</p>
                <p class="card-text">Address: {rentalpost.address}</p>
                {/* <p>Phone Number: {rentalpost.phone}</p> */}
                <p class="card-text">Start Time: {rentalpost.start_time}</p>
                <p class="card-text">End Time: {rentalpost.end_time}</p>
                <p class="card-text">First Name: {rentalpost.rentee.pts_user.first_name}</p>
                <p class="card-text">Last Name: {rentalpost.rentee.pts_user.last_name}</p>
                
  </div>
</div>
           
        )
    } else {
        return (
            <section>
                <p>No post available. </p>
            </section>
        )
    }
}