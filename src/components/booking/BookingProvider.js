import React, { useState, useEffect, useContext } from "react"


export const BookingContext = React.createContext()

export const BookingProvider = (props) => {

  const [bookedspots, setBookedSpots] = useState([])
  const [post, setRentalPost] = useState({})



const getBookedSpots = () => {
    return fetch("http://localhost:8000/bookedspots", {
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
        getBookedSpots, bookedspots
      }}
    >
      {props.children}
    </BookingContext.Provider>
  )

}

