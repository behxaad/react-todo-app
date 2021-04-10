import React, { Component } from "react";
import TodoList from "./TodoList"


class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  // delTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };


  render() {

    return (
      <>
        <form onSubmit={this.addItem}>
          <input type="text" className="todo-input" placeHolder="Enter Text"
            ref={(a) => this._inputElement = a} value={this.text}
          />
          <button>Add Todo</button>
        </form>
        <TodoList entries={this.state.items} />
      </>
    )

  }


}




export default TodoForm