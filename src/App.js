import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css"


class App extends Component {
    render() {

        return (
            <div>
                <header>
                    <h1>React Todo App</h1>
                </header>
                <TodoForm />
                <TodoList />
            </div>
        )
    }


}

export default App