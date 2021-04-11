import React, { Component } from "react";
import TodoList from "./TodoList"


class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this.texted.value !== "") {
      var newItem = {
        text: this.texted.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this.texted.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {

    return (
      <>
        <form onSubmit={this.addItem}>
          <input type="text" className="todo-input" placeHolder="Enter Text"
            ref={(a) => this.texted = a} value={this.text}
          />
          <button>Add Todo</button>
        </form>
        <TodoList entries={this.state.items} delete={this.deleteItem}/>
        <footer>
          Developed By: Behzad Bhat
          <p>
            Source Code:<a href="https://github.com/behxaad/react-todo-app"> GitHub</a>
          </p>
        </footer>
      </>
    )

  }


}




export default TodoForm