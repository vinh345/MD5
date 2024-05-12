import { Component } from "react";


export default class Childrents extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const { name, age, address ,increaseAge} = this.props;

    return (
       <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Address: {address}</p>
        <button onClick={increaseAge}>Increase Age</button>
      </div>
    )
  }
}
