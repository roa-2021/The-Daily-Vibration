import React, { useState, useEffect } from 'react'
import request from 'superagent'
import { addComment } from '../apis/comments'

const Form = () => {
  const [formObj, setDetails] = useState({ id: 0, name: '', comment: '' })
  var count = formObj.id
  const onSubmit = (e) => {
    e.preventDefault()
    setDetails({ ...formObj, id: formObj.id + 1 })
    addComment(formObj)
  }

  const onChange = (e) => {
    console.log(e.target.value)
    setDetails({ ...formObj, [e.target.name]: e.target.value }) // the square part is saying get the name field value and put it here based on event trigger values from nam
  }

  const { id, name, comment } = formObj // this is destructuring

  return (
    <div className="container-comment-form">
      <form onSubmit={onSubmit} key={id}>
        <div>
          <label htmlFor="name">name: </label>
          <input
            name="name"
            id="name"
            type="text"
            value={name}
            placeholder="eg Michael"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="comment">comment: </label>
          <input
            name="comment"
            id="comment"
            size="50"
            type="text"
            value={comment}
            placeholder="eg I don't like that news update"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <button>submit me</button>
        </div>
      </form>
    </div>
  )
}

export default Form
