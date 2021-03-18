import React, { useState, useEffect, useContext } from "react"

export const BookingContext = React.createContext()


export const BookingProvider = (props) => {

    
    const joinEvent = eventId => {
        return fetch(`http://localhost:8000/events/${ eventId }/signup`, {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
    }



}

