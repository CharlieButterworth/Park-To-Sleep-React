import React, { useState, useEffect, useContext } from "react"


export const RentalPostContext = React.createContext()

export const RentalPostProvider = (props) => {

  const [posts, setRentalPosts] = useState([])



 const getRentalPosts = () => {
    return fetch("http://localhost:8000/rentalposts", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setRentalPosts)
  }


   return (
    <RentalPostContext.Provider
      value={{
        getRentalPosts, posts
      }}
    >
      {props.children}
    </RentalPostContext.Provider>
  )
}