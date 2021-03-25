import React, { useContext, useEffect } from "react"
import { BookingContext } from "./BookingProvider"
import {Booking} from "./Booking"
import "./Booking.css"


export const BookingList = (props) => {

    const {bookedspots, getBookedSpots} = useContext(BookingContext)


    useEffect(() => {
        getBookedSpots()
    }, [])

console.log(bookedspots)

    return (
        
        <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
  <div class="card-header">My Bookings</div>
  <div class="card-body">
                {
                    bookedspots.map(b => {
                       return <Booking key={b.id} booking={b} props={props}/>
                        
                    }) 
                }
    
  </div>
</div>
    
    )

}