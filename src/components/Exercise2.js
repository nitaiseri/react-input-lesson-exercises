import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

alertChoise = () => {
    alert(`${this.state.name} selected ${this.state.fruit}`)
}

handleNameChange = (event) => {
    this.setState({ name: event.target.value });
}

handleFruitChange = (event) => {
    this.setState({ fruit: event.target.value }, this.alertChoise);
}

render() {

    const options = [
        {
          label: "Apple",
          value: "apple",
        },
        {
          label: "Mango",
          value: "mango",
        },
        {
          label: "Banana",
          value: "banana",
        },
        {
          label: "Pineapple",
          value: "pineapple",
        },
      ];

    return (
        <div>
            <input id="name-input" onChange={this.handleNameChange}/>
            <select id="select-input" onChange={this.handleFruitChange}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>))}
            </select>
        </div>
    );
}
}

export default Exercise2;