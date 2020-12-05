import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''

    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value.trim()
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        // This clears the input field after submission
        this.setState({
            content: ''
        })
    }
    render(){
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label className="Label white-text">What do you need to pack? :</label>
                    <input className="white-text" type="text" onChange={this.handleChange} value={this.state.content} required/>
                    <button className="btn waves-effect waves-light z-depth-5" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo
