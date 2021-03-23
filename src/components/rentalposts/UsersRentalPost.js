
import { Link } from "react-router-dom"
import { useLocation, useHistory,} from "react-router-dom"
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
            <section className="rentalpostCard">
                
                <h3>
                    Title: {rentalpost.description}
                    </h3>
                    
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
                <button className="btn--release"
                    onClick={() => {

                        confirmDeleteRentalPost()
                        .then(() => {
                                props.history.push("/availablespots")
                            })
                    }}
                >Delete Rental Post</button>

                <button
        onClick={() => {
          props.history.push({
            pathname: `/rentalpost/edit/${rentalpost.id}`,
          });
        }}
      >
        Edit Post
      </button>
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