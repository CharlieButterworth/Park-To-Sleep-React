import React, { useContext, useEffect } from "react"
import { RentalPostContext } from "./RentalPostProvider"
import { BookingContext } from "../listings/BookingProvider"
import {UsersRentalPost} from "./UsersRentalPost"
import { useLocation, useHistory} from "react-router-dom"
import { Booking } from "../listings/Booking"



export const ListingList = (props, rentalpost) => {

    const {posts, setRentalPosts, getRentalPostsByUserId, deleteRentalPost} = useContext(RentalPostContext)
    // const {bookedspots, getBookingsByRentee} = useContext(BookingContext)


    const location = useLocation()
    const history = useHistory()

    

    useEffect(() => {
        getRentalPostsByUserId();
        
    }, [])

// console.log("BOOKINGS", bookedspots)

    return (
        <>
        
        <h3>My Listings</h3>
            <div className="listinglist">

                {
                    posts.map(p => {
                       return <UsersRentalPost key={p.id} rentalpost={p} props={props}/>
                        
                    }) 
                    
                }
        
            </div>

        </>
    )

}
