// Axios is promise based
import axios from "axios";
import React from "react";


export default class PersonList extends React.Component {
    state = {
        persons: [],
    }

    componentDidMount() {
        // Perform HTTP get request on a  particular URL
        // JSON placeholders here
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        })
    }
    // render method
    render() {
        // returning an unorder list that contains the state of persons mapped to each individual persons
        // Then each individual persons will be displayed as a list of items
        return (
            <ul>
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        )
    }
}
