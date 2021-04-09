import React, { Component } from "react";


class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if(this.input !== "")
        {
            newItem = {
               text: this.input.target.value,
               key: Date.now()
            }
        }

    }



    render() {

        return (
            <form onSubmit={this.addItem}>
                <input type="text" className="todo-input" placeHolder="Enter Text"
                    ref = {function(e1) { 
                        this.input = e1
                    } //IMPORTANT
                    } />
                <button>Add Todo</button>
            </form>
        )

    }


}




export default TodoForm