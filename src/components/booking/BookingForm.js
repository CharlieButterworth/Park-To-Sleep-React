import React, { useContext, useState, useEffect } from "react"
import { useLocation, useHistory, useParams} from "react-router-dom"
import { RentalPostContext } from "../rentalposts/RentalPostProvider"


export const BookingForm = (rentalpost, props) => {
  const { post, bookSpot, getRentalPostById, posts} = useContext(RentalPostContext)
    
   const history = useHistory()
  const location = useParams()

  console.log(location)

        const [currentBooking, setCurrentBooking] = useState({
            date: ""
        })


      // useEffect(() => {
      //   getRentalPostById()
      // }, [])

    const changeBookingState = (domEvent) => {
    const newBookingState = Object.assign({}, currentBooking)
    newBookingState[domEvent.target.name] = domEvent.target.value
    setCurrentBooking(newBookingState)
  }

  console.log(post)
return (
    <form className="BookingForm">
      <h2 className="RentalPostForm__title">Book Spot</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Date: </label>
          <input
            type="datetime-local"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentBooking.date}
            onChange={changeBookingState}
          />
        </div>
      </fieldset>
      <button className="btn btn-2"
                                onClick={() => bookSpot(parseInt(location.id)).then(() => history.push("./rentalposts"))}
                                >Confirm Booking</button>
      </form>

)
    }
