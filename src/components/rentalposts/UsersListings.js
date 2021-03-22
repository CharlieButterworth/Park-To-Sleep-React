import React, { useContext, useEffect } from "react"
import { RentalPostContext } from "./RentalPostProvider"
import {RentalPost} from "./RentalPost"



export const ListingList = (props) => {

    const {posts, setRentalPosts, getRentalPostsByUserId} = useContext(RentalPostContext)


    useEffect(() => {
        getRentalPostsByUserId()
    }, [])



    return (
        <>
        <h3>My Listings</h3>
            <div className="listinglist">

                {
                    posts.map(p => {
                       return <RentalPost key={p.id} rentalpost={p} props={props}/>
                        
                    }) 
                }

            </div>

        </>
    )

}
