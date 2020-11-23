import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''

    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
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
                    <input className="white-text" type="text" onChange={this.handleChange} value={this.state.content}/>
                    <button className="btn waves-effect waves-light" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo