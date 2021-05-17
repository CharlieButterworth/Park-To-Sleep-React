import React, { useContext, useEffect } from "react"
import { BookingContext } from "./BookingProvider"
import {Booked} from "./Booked"



export const UsersBookingList = (props) => {

    const {booking, bookedspots, setRentalPosts, getBookingsByUserId} = useContext(BookingContext)


    useEffect(() => {
        getBookingsByUserId()
    }, [])



    return (
        <>
        
       
            <div className="bookinglist">

                {
                    bookedspots.map(b => {
                       return <Booked key={b.id} booked={b} props={props}/>
                        
                    }) 
                }
                

            </div>

        </>
    )

}