import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        return (
            <div className=" card card-body my-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                    
                <input type="text" className="form-control text-capitalize" onChange={this.props.handleChange} value={this.props.item}></input></div>
                <button type="button"  className={this.props.editItem? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"} onClick={this.props.handleSubmit}>{this.props.editItem? "Edit Item": "Add item"}</button>
                </form>
                
            </div>
        )
    }
}
