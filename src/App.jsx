import "./App.css";
import {Header} from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";

// Updated Syntax
// Use Router To Change Component
// https://dev.to/rebeccapeltz/react-18-react-router-v6-sidebar-navigation-and-a-sandpack-component-5c02
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  let initTodo;
  // If Local Storage Is Empty Pass An Empty Array,
  if (localStorage.getItem("todoList") === null) {
    initTodo = [];
  } 
  // Save Value In "initTodo"
  else {
    initTodo = JSON.parse(localStorage.getItem("todoList"));
  }

  const[todoList, setTodoList] = useState(initTodo);
  let onDelete = (todo) => {
    setTodoList(
      todoList.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todoList", JSON.stringify(todoList));

  }
  let addTodo = (title,desc) => {
    let newTodo = {
      title : title,
      desc : desc
    }
    setTodoList([...todoList,newTodo]);
  }
  useEffect(() => {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <>
              <Header title={"MyTodosList"} searchBar={true}/>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todoList} onDelete={onDelete}/>
              <Footer/>
            </>
          }></Route>
          <Route exact path="/about" element={
            <>
              <Header title={"MyTodosList"} searchBar={true}/>
              <About/>
              {/* <Footer/> */}
            </>
          }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
