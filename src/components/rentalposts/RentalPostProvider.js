import React, { useState, useEffect, useContext } from "react"


export const RentalPostContext = React.createContext()

export const RentalPostProvider = (props) => {

  const [posts, setRentalPosts] = useState([])
  const [post, setPost] = useState({})



const getRentalPosts = () => {
    return fetch("http://localhost:8000/rentalposts", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setRentalPosts)
  }

const getRentalPostById = (id) => {
        return fetch(`http://localhost:8000/rentalposts/${id}`)
            .then(res => res.json())
            .then(setPost)
    }

const addRentalPost = post => {

        return fetch("http://localhost:8000/rentalposts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("pts_token")}`,
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())

    }

const deleteRentalPost = (id) => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            method: "DELETE"
        })
            .then(getRentalPosts)
    }



   return (
    <RentalPostContext.Provider
      value={{
        getRentalPosts, posts, getRentalPostById, post, addRentalPost, deleteRentalPost
      }}
    >
      {props.children}
    </RentalPostContext.Provider>
  )
}