import React, { useContext, useState, useEffect } from "react"
import { RentalPostContext } from "./RentalPostProvider.js"
import { useHistory, useLocation, useParams } from "react-router-dom"

export const EditRentalPostForm = ({props, rentalpost}) => {
  const history = useHistory()
  const location = useLocation()
  const { addRentalPost, getRentalPosts, getRentalPostById, post, updatePost} = useContext(RentalPostContext)


   const [currentRentalPost, setCurrentRentalPost] = useState({
    description: "",
    maxLength: "",
    city: "",
    state: "",
    address: "",
    start_time: "",
    end_time: ""
  })

  console.log("POST", post)

  useEffect(() => {
   
    getRentalPostById(location.state.chosenPost.id)
    
}, []);

useEffect(() => {
    
    setCurrentRentalPost(post)
  }, [post]);


const changeRentalPostState = (domEvent) => {
        const newRentalPostState = Object.assign({}, currentRentalPost)
        newRentalPostState[domEvent.target.name] = domEvent.target.value
        setCurrentRentalPost(newRentalPostState)
    }

    
console.log("currentrentalpost", currentRentalPost)

    // if(currentRentalPost.pts_user.key !== localStorage.getItem("pts_token")){
    //     return(<h2>Cant do that go back</h2>)
    // }else {
    if(post.id === currentRentalPost.id) {

        
        return (
            <form className="RentalPostForm">
            <h2 className="RentalPostForm__title">Rental Post</h2>
            <fieldset>
            <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
          type="text"
            name="description"
            required
            autoFocus
            className="form-control"
            value={currentRentalPost.description}
            onChange={changeRentalPostState}
            />
            </div>
            </fieldset>
            
            
            <fieldset>
            <div className="form-group">
            <label htmlFor="content">Max Length (ft): </label>
            <input
            type="number"
            name="max_length"
            required
            className="form-control"
            value={currentRentalPost.max_length}
            onChange={changeRentalPostState}
            />
            </div>
            </fieldset>
            
            <fieldset>
            <div className="form-group">
            <label htmlFor="content">City: </label>
            <input
            type="text"
            name="city"
            required
            className="form-control"
            value={currentRentalPost.city}
            onChange={changeRentalPostState}
            />
            </div>
            </fieldset>
            
            <fieldset>
            <div className="form-group">
            <label htmlFor="content">State: </label>
            <input
            type="text"
            name="state"
            required
            className="form-control"
            value={currentRentalPost.state}
            onChange={changeRentalPostState}
            />
            </div>
            </fieldset>
            
            <fieldset>
            <div className="form-group">
            <label htmlFor="content">Address: </label>
            <input
            type="text"
            name="address"
            required
            className="form-control"
            value={currentRentalPost.address}
            onChange={changeRentalPostState}
            />
            </div>
            </fieldset>
            
            <fieldset>
            <div className="form-group">
            <label htmlFor="content">Start Time: </label>
            <input
            type="datetime-local"
            name="start_time"
            required
            className="form-control"
            value={currentRentalPost.start_time}
            onChange={changeRentalPostState}
            />
            </div>
            </fieldset>
            
            <fieldset>
            <div className="form-group">
            <label htmlFor="content">End Time: </label>
            <input
            type="datetime-local"
            name="end_time"
            required
            className="form-control"
            value={currentRentalPost.end_time}
            onChange={changeRentalPostState}
            />
            </div>
            </fieldset>
            <button type = "submit"
            onClick = {evt => {
                evt.preventDefault()
                
                updatePost(currentRentalPost)
                .then(() => history.push("/listings"))
            }}
            className = "rentalEdit">Save Edit</button>
            
            </form>
            
            )
        } else {
            return <>
            </>
        }
            
        }
        
        
        