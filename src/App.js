import React, {useState} from "react";
import './App.css';

//importing components
import Form from "./components/form";
import ToDoList from "./components/todolist";

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, settodos] = useState([]);
  return (
    <div className="App">
      <header>Akshit's To-Do List </header>
      <Form setInputText = {setInputText}/>
      <ToDoList />
    </div>
  );
}

export default App;
