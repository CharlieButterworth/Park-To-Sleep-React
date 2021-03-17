import React from "react"
import { Route } from "react-router-dom"
import { RentalPostDetails } from "./components/rentalposts/RentalPostDetail"
import { RentalPostForm } from "./components/rentalposts/RentalPostForm"
import { RentalPostProvider } from "./components/rentalposts/RentalPostProvider"
import { RentalSpotsAvailable} from "./components/rentalposts/RentalSpotsAvailable"



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

           
           
    </>
}
