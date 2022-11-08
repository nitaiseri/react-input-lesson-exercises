import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    alertButton = () => {
        alert(`You are ${this.state.name} and, ${this.state.age} years old.`)
    }

    hundleInput = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id === 'name-input' ? 'name' : 'age';
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                <input id="name-input" value={this.state.name} onChange={this.hundleInput}/>
                <input id="age-input" value={this.state.age} onChange={this.hundleInput}/>
                <button onClick={this.alertButton}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;