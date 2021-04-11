import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoList extends Component {

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(item => <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>);

    return (
      <ul className="todoList">
        <FlipMove duration={350} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoList