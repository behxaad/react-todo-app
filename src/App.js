import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css"


class App extends Component {
    render() {

        return (
            <div className="container">
                <header>
                    <h1>React Todo App</h1>
                </header>
                <TodoForm />
            </div>
        )
    }


}

export default App