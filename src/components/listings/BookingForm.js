import React, { useContext, useState, useEffect, response } from "react"
import { useLocation, useHistory, useParams} from "react-router-dom"
import { RentalPostContext } from "../rentalposts/RentalPostProvider"


export const BookingForm = (rentalpost, props, date) => {
  const { post, bookSpot, getRentalPostById, posts} = useContext(RentalPostContext)
    
   const history = useHistory()
  const location = useParams()

  console.log(location)

        const [currentBooking, setCurrentBooking] = useState({
            date: ""
        })
    

    useEffect(() => {
        
        getRentalPostById(location.id)
    }, [])

    const changeBookingState = (domEvent) => {
    const newBookingState = Object.assign({}, currentBooking)
    newBookingState[domEvent.target.name] = domEvent.target.value
    setCurrentBooking(newBookingState)
  }
  
  return (
    <div className="BookingForm">
      <h2 className="RentalPostForm__title">Book Spot</h2>
      <fieldset>
        <p>Start Date: {post.start_time}</p>
        <p>End Date: {post.end_time}</p>
        <div className="form-group">
          <label htmlFor="description">Date: </label>
          <input
            type="date"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentBooking.date}
            onChange={changeBookingState}
          />
        </div>
      </fieldset>
      <button
          type="submit"
          onClick={(evt) => {
           
            // Prevent form from being submitted
            evt.preventDefault()
 
            // Send POST request to your API
            bookSpot({  
              date: currentBooking.date
              
            }, location.id) 
            
            
          }}
          className="btn btn-primary"
        >
          Confirm Booking
        </button>







      {/* <button className="btn btn-2"
                                onClick={() => bookSpot
                                  (parseInt(location.id)).then(() => history.push("./rentalposts"))}
                                >Confirm Booking</button> */}
      </div>

)
    }
