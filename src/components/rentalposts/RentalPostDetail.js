import React, { useContext, useEffect, useState,} from "react"
import { useLocation, useHistory, useParams} from "react-router-dom"
import { RentalPostContext } from "./RentalPostProvider"


export const RentalPostDetails = ({rentalpost, props}) => {
    const { post, setRentalPost, getRentalPostById, deleteRentalPost, posts } = useContext(RentalPostContext)
 
    const params = useParams()
    const location = useLocation()
    const history = useHistory()
    // const rentee = location.state.chosenPost.rentee.id
   console.log("PARAMS", useParams())

    
    
    useEffect(() => {
        
        getRentalPostById(location.state.chosenPost.id)
    }, [])

   
    const confirmDeleteRentalPost = () => {
    const prompt = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (prompt === true) {
      deleteRentalPost(rentalpost.id).then(() => {
        window.location.href = `/rentalposts/${location.state.chosenPost.id}`;
      });
    }
  };

    console.log("PROPS", props)
  
    return  (
        <>
        <div class="card text-white bg-dark mb-3" style={{maxwidth: '20rem;'}}>
  <div class="card-header">Post Detail</div>
  <div class="card-body">            
                <p class="card-text">Description: {post.description}</p>
                <p cclass="card-text">Max Length: {post.max_length}</p>
                <p class="card-text">City: {post.city}</p>
                <p class="card-text">State: {post.state}</p>
                <p class="card-text">Address: {post.address}</p>
                <p class="card-text">Date/Time Available: {post.start_time}</p>
                <p class="card-text">Date/Time Closing: {post.end_time}</p>
                <p class="card-text">First Name: {location.state.chosenPost.rentee.pts_user.first_name}</p>
                <p class="card-text">Last Name: {location.state.chosenPost.rentee.pts_user.last_name}</p>

        <button type="button" class="btn btn-success disabled" onClick={() => {
            history.push(`/bookingform/${location.state.chosenPost.id}/book`)
        }}>Book!</button>

        
        </div>
      </div>
       
        </>

    )
}