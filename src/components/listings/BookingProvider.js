import React, { useState, useEffect, useContext } from "react"


export const BookingContext = React.createContext()

export const BookingProvider = (props) => {

  const [bookedspots, setBookedSpots] = useState([])
  const [booking, setBookings] = useState({})
  const [newlybooked, setNewlyBooked] = useState([])
  const [renteebooked, setRenteeBooked] = useState([])



const getBookedSpots = () => {
    return fetch("http://localhost:8000/bookedspots", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setBookedSpots)
  }

  const getBookingsByUserId = (userId) => {
    userId = localStorage.getItem("pts_token")
    return fetch(`http://localhost:8000/bookedspots?sortby=user`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setBookedSpots)
  }

  const getBookingsByRentee = (userId) => {
    userId = localStorage.getItem("pts_token")
    return fetch(`http://localhost:8000/newbookings?sortby=user`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setBookedSpots)
  }


  return (
    <BookingContext.Provider
      value={{
        getBookedSpots, setRenteeBooked, renteebooked, setNewlyBooked, newlybooked, bookedspots, getBookingsByUserId, booking, getBookingsByRentee
      }}
    >
      {props.children}
    </BookingContext.Provider>
  )

}

