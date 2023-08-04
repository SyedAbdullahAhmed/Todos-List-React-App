import React from 'react'

export const TodoItem = (props) => {
     let itemStyle = {
          "width": "80vw",
          "margin" : "10px 0px",
     }
     return (
          <>
               {/* <h2>{props.todo.title}</h2>
               <p>{props.todo.desc}</p> */}
               <div className="card" style={itemStyle}>
                         <div className="card-body">
                              <h5 className="card-title">{props.todo.title}</h5>
                              <p className="card-text">{props.todo.desc}</p>
                              <a href="#" className="btn btn-sm btn-danger" onClick={()=>props.onDelete(props.todo)}>Delete</a>
                         </div>
               </div>
          </>
     )
}
