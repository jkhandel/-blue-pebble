import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const items=this.props.items;
        return (
            <div>
                <ul className="list-group my-5">
                    {
                        items.map(item=>{
                        return <li className="list-group-item text-capitalize d-flex justify-content-between my-2" key={item.id}>{item.item}<div className="todo icon"><span className="mx-2 text-success"><i className="fas fa-pen" onClick={()=>this.props.handleEdit(item.id)}></i></span><span className="mx-2 text-danger" onClick={()=>this.props.handleDelete(item.id)}><i className="fas fa-trash"></i></span></div></li>;
                        })
                    }
                    
                    
                </ul>
            </div>
        )
    }
}
