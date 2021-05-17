import React, { useContext, useEffect } from "react"
import { BookingContext } from "./BookingProvider"
import {Booked} from "./Booked"



export const NewlyBooked = (props) => {

    const {bookedspots, getBookedSpots, getBookingsByRentee, setNewlyBooked, newlybooked} = useContext(BookingContext)


    useEffect(() => {
        getBookingsByRentee()
        
    }, [])

console.log(bookedspots)

return (
<>
<h3>Booked Bookings</h3> 
                {
                    bookedspots.map(b => {
                       return <Booked key={b.id} booked={b} props={props}/>
                        
                    }) 
                }
 </>
)


}