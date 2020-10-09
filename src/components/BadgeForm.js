import React, { Component } from 'react';

class BadgeForm extends Component {
    state ={}
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClick = (e) => {
        console.log("Button Was Clicked")
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Was Submited")
        console.log(this.state)
    }

    render() {
        return (
            <div>

                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName} />
                        <label>Last Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName} />
                        <label>Email</label>
                        <input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email} />
                        <label>Job Title</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle} />
                        <label>Twitter</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="twitter" value={this.state.twitter} />
                        <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </div>
                </form>

                
            </div>
        );
    }
}

export default BadgeForm;