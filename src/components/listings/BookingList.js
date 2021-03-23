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
        <>
        <h3>My Bookings</h3>
            <div className="bookinglist">

                {
                    bookedspots.map(b => {
                       return <Booking key={b.id} booking={b} props={props}/>
                        
                    }) 
                }

            </div>

        </>
    )

}