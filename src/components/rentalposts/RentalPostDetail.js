import React, { useContext, useEffect, useState, useHistory } from "react"
import { RentalPostContext } from "./RentalPostProvider"


export const RentalPostDetails = (rentalpost, history) => {
    const { post, setPost, getRentalPostById, deleteRentalPost } = useContext(RentalPostContext)
    // const history = useHistory()
    
    

    useEffect(() => {
        // const postId = parseInt(props.match.params.id)

        getRentalPostById(rentalpost.id)
            

    }, [])
    return (
        <>
            <section className="post">
                <h3>Post Detail</h3>
                <h3 className="post__title">{rentalpost.description}</h3>
                <h3 className="post__title">{rentalpost.max_length}</h3>
                <h3 className="post__title">{post.city}</h3>
                <h3 className="post__title">{post.state}</h3>
                <h3 className="post__title">{post.address}</h3>
                <h3 className="post__title">{post.start_time}</h3>
                <h3 className="post__title">{post.end_time}</h3>
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