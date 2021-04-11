// Axios is promise based
import axios from "axios";
import React from "react";


export default class PersonInput extends React.Component {
    state = {
        name: '',
    };

    // For post request
    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        // Stops browser from reloading the page
        event.preventDefault();

        // Making new object
        const user = {
            name: this.state.name
        }

        // Using axios to post the link to our api. Passing along the object "user" as a payload
        axios.post('https://jsonplaceholder.typicode.com/users', { user }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    // render method
    render() {
        // returning an unorder list that contains the state of persons mapped to each individual persons
        // Then each individual persons will be displayed as a list of items
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Person Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }
}
