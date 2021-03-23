import React from "react"
import { Route } from "react-router-dom"
import { ListingList } from "./components/rentalposts/UsersListings"
import { RentalPostDetails } from "./components/rentalposts/RentalPostDetail"
import { RentalPostForm } from "./components/rentalposts/RentalPostForm"
import { RentalPostProvider } from "./components/rentalposts/RentalPostProvider"
import { RentalSpotsAvailable} from "./components/rentalposts/RentalSpotsAvailable"
import { BookingForm } from "./components/listings/BookingForm"
import { UsersBookingList } from "./components/listings/UsersBookings"
import { BookingProvider } from "./components/listings/BookingProvider"
import { NewlyBooked } from "./components/listings/NewBookings"



export const ApplicationViews = (props) => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
           </main>


           <RentalPostProvider>
               <Route exact path="/availablespots">
                   <RentalSpotsAvailable {...props} />
               </Route>
           </RentalPostProvider>

           <RentalPostProvider>
               <Route exact path="/createspot">
                   <RentalPostForm {...props} />
               </Route>
           </RentalPostProvider>

           <RentalPostProvider>
               <Route exact path="/rentalposts/:id(\d+)">
                   <RentalPostDetails {...props} />
               </Route>
           </RentalPostProvider>


            <BookingProvider>

           <RentalPostProvider>
               <Route exact path="/listings">
                   <ListingList {...props} />
               </Route>
           </RentalPostProvider>
            </BookingProvider>

           <RentalPostProvider>
               <Route exact path="/bookingform/:id(\d+)/book">
                   <BookingForm {...props} />
               </Route>
           </RentalPostProvider>

           <BookingProvider>
               <Route exact path="/bookings">
                   <UsersBookingList {...props} />
               </Route>
           </BookingProvider>

           <BookingProvider>
               <Route exact path="/newbookings">
                   <NewlyBooked {...props} />
               </Route>
           </BookingProvider>

           

           

           
           
    </>
}
