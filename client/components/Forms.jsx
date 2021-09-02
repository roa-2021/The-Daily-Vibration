import React, { useState, useEffect } from 'react'

const Form = () => {

    const [formObj,setDetails] = useState({id: 0,name: '' , comment: ''})

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formObj)
    }

    const onChange = (e) => {
        //e.preventDefault()
        //console.log(e.target.value)
        setDetails({...formObj,[e.target.name]: e.target.value }) //the square part is saying get the name field value and put it here based on event trigger values from nam
    }

const {id, name, comment} = formObj//this is destructuring

    return(
        <>
            <form onSubmit={onSubmit} key={id}>
                <div>
                    <label for="name">name: </label>
                    <input name="name" id="name" type="text" value={name} placeholder="eg Michael" onChange={onChange}></input>
                </div>
                <div>
                    <label for="comment">comment: </label>
                    <input name="comment" id="comment" size="50"type="text" value={comment} placeholder="eg I don't like that news update" onChange={onChange}></input>
                </div>
                <div>
                    <button>submit me</button>
                </div>
            </form>
        </>

    )

}


export default Form