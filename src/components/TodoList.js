import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {items}=this.props.items;
        return (
            <div>
                {/* <h3 className="text-capitalize text-center">To do List</h3> */}
               <TodoItem items={this.props.items} handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit}/>  
               <button className={this.props.isEmpty?"d-none": "btn btn-danger btn-block text-capitalize mt-5"}type="button" onClick={this.props.handleClear}>Clear List</button>
            </div>
        )
    }
}
