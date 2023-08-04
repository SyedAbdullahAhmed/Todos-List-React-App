import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
     let style = {
          "marginBottom" : "50px",
     }
     let message = <h3>No Element to display</h3>;
     return (
          <div className='container' style={style}>
               <h1 className='mt-2'>Todo List</h1>
               {props.todos.length===0?message:props.todos.map((value) => {
                    return (<TodoItem todo={value} key={props.sno}  onDelete={props.onDelete} addTodo={props.addTodo} />)
               })} 
          </div>
     )
}
