import React, { useContext, useState, useEffect } from "react"
import { RentalPostContext } from "./RentalPostProvider.js"
import { useHistory } from "react-router-dom"

export const RentalPostForm = (props) => {
  const history = useHistory()
  const { addPost, getSinglePost, Posts, updatePost } = useContext(RentalPostContext)


  const [currentPost, setCurrentPost] = useState({
    title: "",
    postImage: "",
    content: "",
    category: 0,
  })

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

  useEffect(() => {
    if ("postId" in props.match.params) {
      getSinglePost(props.match.params.postId).then((post) => {
        setCurrentPost({
          title: post.title,
          postImage: post.postImage,
          content: post.content,
          category: post.category,
        })
      })
    }
  }, [props.match.params.postId])

 



  /*
  Update the `currentGame` state variable every time
  the state of one of the input fields changes.
  */
  const changePostState = (domEvent) => {
    const newPostState = Object.assign({}, currentPost)
    newPostState[domEvent.target.name] = domEvent.target.value
    setCurrentPost(newPostState)
  }

  return (
    <form className="PostForm">
      <h2 className="PostForm__title">Post</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentPost.title}
            onChange={changePostState}
          />
        </div>
      </fieldset>


      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Post Body: </label>
          <input
            type="text"
            name="content"
            required
            className="form-control"
            value={currentPost.content}
            onChange={changePostState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Image URL: </label>
          <input
            type="text"
            name="postImage"
            required
            className="form-control"
            value={currentPost.postImage}
            onChange={changePostState}
          />
        </div>
      </fieldset>

      {/* You create the rest of the input fields for each game property */}
      {"rare_user_id" in props.match.params ? (
        <button
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault()

            // Send POST request to your API
            updatePost({
              id: parseInt(props.match.params.postId),
              title: currentPost.title,
              postImage: currentPost.postImage,
              content: currentPost.content,
              category: parseInt(currentPost.category),
            }).then(() => history.push("/posts"))
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
            addPost({
              title: currentPost.title,
              postImage: currentPost.postImage,
              content: currentPost.content,
              category: currentPost.category,
            }).then(() => history.push("/posts"))
          }}
          className="btn btn-primary"
        >
          Create
        </button>
      )}
    </form>
  )
}