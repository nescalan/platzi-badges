import React, { Component } from 'react';

class BadgeForm extends Component {
    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        })
    }

    handleClick = (e) => {
        console.log("Button Was Clicked")
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Was Submited")
    }

    render() {
        return (
            <div>

                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nombre Completo</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
                        <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BadgeForm;