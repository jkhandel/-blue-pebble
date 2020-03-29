import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'react-uuid';
import "bootstrap/dist/css/bootstrap.min.css";


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      id:uuid(),
      item:'',
      editItem:false,
      isEmpty:true
      
    }
  }

  handleChange=(e)=>{
    this.setState({item:e.target.value});
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={id:this.state.id,item:this.state.item}
    const updatedItem=[...this.state.items,newItem]
    this.setState({items:updatedItem,id:uuid(),item:'',editItem:false,isEmpty:false});
  }

  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id !== id);
    this.setState({items:filteredItems});
    
  }

  handleEdit=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id !== id);
    const selectedItem=this.state.items.find(item=>item.id === id);

    this.setState({items:filteredItems,
    item:selectedItem.item,
    editItem:true,
    id:id
    });


  }

  handleClear=(e)=>{
    this.setState({items:[],isEmpty:true})
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Things To Do</h3>
          <TodoInput 
          item={this.state.item} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          editItem={this.state.editItem}/>
          <br/>
        <TodoList 
          items={this.state.items} 
          handleClear={this.handleClear} 
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          editItem={this.state.editItem}
          isEmpty={this.state.isEmpty}
        />
          </div>
        </div>
      </div>
    )
  }
}

