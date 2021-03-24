import React, { useContext, useState, useEffect } from "react"
import { RentalPostContext } from "./RentalPostProvider.js"
import { useHistory, useParams } from "react-router-dom"

export const RentalPostForm = (props, rentalpost) => {
  const history = useHistory()
  const params = useParams()
  const { addRentalPost, getSingleRentalPost, Posts, updatePost, getRentalPosts, setRentalPost, post } = useContext(RentalPostContext)

  
  const [currentRentalPost, setCurrentRentalPost] = useState({
    description: "",
    maxLength: "",
    city: "",
    state: "",
    address: "",
    start_time: "",
    end_time: ""
  })
  console.log("PROPS", props)
  /*
  Since the input fields are bound to the values of
  the properties of this state variable, you need to
  provide some default values.
  */
 
//  const editMode = true
 
//  const getRentalPostInEditMode = () => {
//    if (editMode) {
//      const rentalpostId = parseInt(props.match.params.rentalpostId);
//      const selectedRentalPost = rentalpost.find((rp) => rp.id === rentalpostId) || {};
//      setRentalPost(selectedRentalPost);
//     }
//   };


// console.log(editMode)

  useEffect(() => {
    if ("post" in props.match.params) {
      getSingleRentalPost(props.match.params.postId).then((post) => {
        setCurrentRentalPost({
        description: "",
        maxLength: "",
        city: "",
        state: "",
        address: "",
        start_time: "",
        end_time: ""
        })
      })
    }
  }, [props.match.params.postId])


  useEffect(() => {
    getRentalPosts();
  }, []);

  // useEffect(() => {
  //   getRentalPostInEditMode();
  // }, [rentalpost]);


  /*
  Update the `currentRentalPost` state variable every time
  the state of one of the input fields changes.
  */
  const changeRentalPostState = (domEvent) => {
    const newRentalPostState = Object.assign({}, currentRentalPost)
    newRentalPostState[domEvent.target.name] = domEvent.target.value
    setCurrentRentalPost(newRentalPostState)
  }

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

      {/* You create the rest of the input fields for each rental property */}
      {"pts_token" in props.match.params ? (
        <button
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault()

            // Send POST request to your API
            updatePost({
              description: currentRentalPost.description,
              maxLength: currentRentalPost.max_length,
              city: currentRentalPost.city,
              state: currentRentalPost.state,
              address: currentRentalPost.address,
              start_time: currentRentalPost.start_time,
              end_time: currentRentalPost.end_time
            }).then(() => history.push("/availablespots"))
          }}
          className="btn btn-primary"
        >
          Edit
        </button>
      ) : (
        <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault()

            // Send POST request to your API
            addRentalPost({  
              pts_user: currentRentalPost.pts_user,
              description: currentRentalPost.description,
              maxLength: currentRentalPost.max_length,
              city: currentRentalPost.city,
              state: currentRentalPost.state,
              address: currentRentalPost.address,
              start_time: currentRentalPost.start_time,
              end_time: currentRentalPost.end_time
            }).then(() => history.push("/availablespots"))
          }}
          className="btn btn-primary"
        >
          Save
        </button>
      )}
    </form>
  )
}