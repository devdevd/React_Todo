import React, { Component } from 'react';
import ToDoAdd from './ToDoAdd';
import ToDoItem from './ToDoItem';

import { connect } from 'react-redux';
import { addTodoList } from './action'
class ToDo extends React.Component {

    state = {
        newItem: "",
        //list: []
      };
    
  
    updateInput(key,value){
      this.setState({[key]:value});
  
    }
  
    deleteItem = (id) => {
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({list: updatedList});
    }
  
    addItem = (value) => {
      const newItem = {
        id: 1 + Math.random(),
        value: value //.slice()
      };
  
      const list = [...this.state.list];
      list.push(newItem);
  
      this.setState({
        list
      });
    }

    render() {

        return (
            <div className='App'>
                <h1 className='title'>Todo List</h1>
                Add a task!
                <br></br>
                <ToDoAdd />
                <ul>
                    {this.props.list.map((item, i) => {
                        return <ToDoItem item={item} key={i} deleteFn={this.deleteItem}></ToDoItem>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
  return { 
      list : state.todo.list,
      
  } 
} 

ToDo = connect(mapStateToProps)(ToDo); 
export default ToDo;