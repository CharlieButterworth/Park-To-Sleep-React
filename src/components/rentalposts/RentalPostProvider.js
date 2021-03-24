import React, { useState, useEffect, useContext } from "react"


export const RentalPostContext = React.createContext()

export const RentalPostProvider = (props) => {

  const [posts, setRentalPosts] = useState([])
  const [post, setRentalPost] = useState({})
  const [editpost, setEditPost] = useState([])



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
        return fetch(`http://localhost:8000/rentalposts/${id}`, {
            headers: {
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
        })
            .then(res => res.json())
            .then(setRentalPost)
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
        return fetch(`http://localhost:8000/rentalposts/${id}`, {
            method: "DELETE",
            headers: {
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
        })
            .then(getRentalPosts)
    }

const getRentalPostsByUserId = (userId) => {
    userId = localStorage.getItem("pts_token")
    return fetch(`http://localhost:8000/rentalposts?sortby=user`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setRentalPosts)
  }


 const updatePost = (post) => {
    return fetch(`http://localhost:8000/rentalposts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("pts_token")}`,
      },
      body: JSON.stringify(post),
    }).then(getRentalPosts)
  } 

const bookSpot = (date, post) => {
   
        return fetch(`http://localhost:8000/rentalposts/${ post }/book`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("pts_token")}`
            },
            body: JSON.stringify(date)
        
        })
            .then(response => response.json())
            
    }



   return (
    <RentalPostContext.Provider
      value={{
        getRentalPosts, posts, setRentalPost, getRentalPostById, updatePost, post, addRentalPost, deleteRentalPost, getRentalPostsByUserId, bookSpot
      }}
    >
      {props.children}
    </RentalPostContext.Provider>
  )
}