import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodoList } from './action'
class ToDoAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newItem: ""
        }
    }

    // const item = this.props.item;
    updateInput(key, value) {
        this.setState({ [key]: value });

    }


    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='오늘 할일을 적으세요'
                    value={this.state.newItem}
                    onChange={e => this.updateInput('newItem', e.target.value)}
                />
                <button onClick={() => {this.props.addTodoList({id :  Math.random(), value : this.state.newItem})}}><i>추가</i></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
        list : state.todo.list,
        
    } 
  } 
const mapDispatchToProps = (dispatch) =>{ 
    return { 
      addTodoList: (value => dispatch(addTodoList(value))),
        
    }; 
  } 

  ToDoAdd = connect(mapStateToProps, mapDispatchToProps)(ToDoAdd); 
export default ToDoAdd;