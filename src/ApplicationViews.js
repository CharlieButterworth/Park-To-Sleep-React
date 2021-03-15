import React from "react"
import { Route } from "react-router-dom"
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
    </>
}
