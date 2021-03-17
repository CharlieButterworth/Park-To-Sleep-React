import React, { useContext, useEffect, useState, useHistory } from "react"
import { useLocation } from "react-router-dom"
import { RentalPostContext } from "./RentalPostProvider"


export const RentalPostDetails = (rentalpost, history, props) => {
    const { post, setRentalPost, getRentalPostById, deleteRentalPost, posts } = useContext(RentalPostContext)
 
    
    const location = useLocation()
    console.log(location)

    
    
    useEffect(() => {
        getRentalPostById(location.state.chosenPost.id)
            .then(setRentalPost)
            

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
                <h3 className="post__title">{post.first_name}</h3>
                <h3 className="post__title">{post.last_name}</h3>

                <button onClick={() => {
                    history.push(`/rentalposts/edit/${rentalpost.id}`)
                }}>Edit Rental Post</button>

                <button className="btn--release"
                    onClick={() => {

                        deleteRentalPost(rentalpost.id)
                            .then(() => {
                                history.push("/rentalposts")
                            })
                    }}
                >Delete Rental Post</button>

            </section>


        </>
    )
}