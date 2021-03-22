import React, { useContext, useEffect, useState,} from "react"
import { useLocation, useHistory} from "react-router-dom"
import { RentalPostContext } from "./RentalPostProvider"


export const RentalPostDetails = (rentalpost, props) => {
    const { post, setRentalPost, getRentalPostById, deleteRentalPost, posts } = useContext(RentalPostContext)
 
    
    const location = useLocation()
    const history = useHistory()
    
   console.log(location)

    
    
    useEffect(() => {
        
        getRentalPostById(location.state.chosenPost.id)
            
            
            

    }, [])



    
    return (
        <>
            <section className="post">
                <h3>Post Detail</h3>
                <h3 className="post__title">Description: {post.description}</h3>
                <h3 className="post__title">Max Length: {post.max_length}</h3>
                <h3 className="post__title">City: {post.city}</h3>
                <h3 className="post__title">State: {post.state}</h3>
                <h3 className="post__title">Address: {post.address}</h3>
                <h3 className="post__title">Date/Time Available: {post.start_time}</h3>
                <h3 className="post__title">Date/Time Closing: {post.end_time}</h3>
                <h3 className="post__title">First Name: {location.state.chosenPost.rentee.pts_user.first_name}</h3>
                <h3 className="post__title">Last Name: {location.state.chosenPost.rentee.pts_user.last_name}</h3>

                <button onClick={() => {
                    history.push(`/bookingform/${location.state.chosenPost.id}/book`)
                }}>Book!</button>

                <button className="btn--release"
                    onClick={() => {

                        deleteRentalPost(location.state.chosenPost.id)
                            .then(() => {
                                history.push("/rentalposts")
                            })
                    }}
                >Delete Rental Post</button>

            </section>


        </>
    )
}