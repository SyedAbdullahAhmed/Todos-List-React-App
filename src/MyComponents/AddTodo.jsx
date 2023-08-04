import React from 'react'
import { useState } from "react";

export const AddTodo = (props) => {
     const[title, setTitle] = useState("");
     const[desc, setDesc] = useState("");
     let submit = (e) => {
          e.preventDefault();
          if(!title || !desc) {
               alert("Add Title & Description!")
          }
          else {
               props.addTodo(title,desc);
               setTitle("");
               setDesc("");
          }
     }
  return (
       <form className='container' onSubmit={submit}>
          <h1 className='mt-2'>Add Todo List</h1>
     <div className="form-group">
       <label for="title">Title</label>
       <input type="text" className="form-control"  value={title} onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
     </div>
     <div className="form-group">
       <label for="desc">Description</label>
       <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="exampleInputPassword1"/>
     </div>
     <button type="submit" className="btn btn-primary">Add Todo</button>
   </form>
  )
}
