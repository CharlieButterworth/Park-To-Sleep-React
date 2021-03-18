import React, { useContext, useState, useEffect } from "react"
import { useLocation, useHistory} from "react-router-dom"
import { RentalPostContext } from "../rentalposts/RentalPostProvider"


export const BookingForm = (props) => {
  const { post, bookSpot} = useContext(RentalPostContext)
    
   const history = useHistory()


        const [currentBooking, setCurrentBooking] = useState({
            date: ""
        })


return (
    <form className="RentalPostForm">
      <h2 className="RentalPostForm__title">Book Spot</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Date: </label>
          <input
            type="datetime-local"
            name="description"
            required
            autoFocus
            className="form-control"
            value={currentBooking.date}
            
          />
        </div>
      </fieldset>
      <button className="btn btn-2"
                                onClick={() => bookSpot(post.id)}
                        >Confirm Booking</button>
      </form>

)
    }
