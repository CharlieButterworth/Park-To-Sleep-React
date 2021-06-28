
import { Link } from "react-router-dom"
import { useLocation, useHistory, useParams } from "react-router-dom"
import React, { useContext, useEffect, useState,} from "react"
import { RentalPostContext } from "./RentalPostProvider"
import "./RentalPost.css"


export const UsersRentalPost = ({ rentalpost, props }) => {

    const { post, setRentalPost, getRentalPostById, deleteRentalPost,} = useContext(RentalPostContext)
    const location = useLocation()
    const history = useHistory()

    const confirmDeleteRentalPost = () => {
    const prompt = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (prompt === true) {
      deleteRentalPost(rentalpost.id).then(() => {
        window.location.href = `/availablespots`;
      });
    }
  };

 

  

    if (localStorage.getItem("pts_token")) {

        return (
          <div class="card text-white bg-dark mb-3" style={{maxwidth: '20rem;'}}>
  <div class="card-header">Rental Spot</div>
  <div class="card-body">
               
               <p class="card-text">Description: {rentalpost.description} </p>
                <p class="card-text">Max Length: {rentalpost.max_length} ft</p>
                <p class="card-text">City: {rentalpost.city}</p>
                <p class="card-text">State: {rentalpost.state}</p>
                <p class="card-text">Address: {rentalpost.address}</p>
                <p class="card-text">Start Time: {rentalpost.start_time}</p>
                <p class="card-text">End Time: {rentalpost.end_time}</p>
                <button type="button" class="btn btn-danger disabled"
                    onClick={() => {
                      
                      confirmDeleteRentalPost()
                      .then(() => {
                        props.history.push("/availablespots")
                      })
                    }}
                    >Delete Rental Post</button>

                <button type="button" class="btn btn-outline-secondary" onClick = {evt => {
                  evt.preventDefault()
                  setRentalPost({})
                }}>
                <Link 
              to={{
                pathname: `/rentalposts/${rentalpost.id}/edit`,
                state: {chosenPost: rentalpost}
              }}
              >
        Edit Post
        </Link>
      </button>
           
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