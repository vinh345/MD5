import { Component } from "react";
import Childrents from "./Childrents";


export default class Parents extends Component {
    constructor(props) {
      super(props);
     
      this.state = {
        name: "Vinh",
        age: "20",
        address: "123 Cầu Diễn",
      };

    this.increaseAge = this.increaseAge.bind(this);
}

// Phương thức để tăng tuổi
   increaseAge() {
  this.setState(prevState => ({
    age: prevState.age + 1
  }));
}
  
    render() {
   
      const { name, age, address } = this.state;
  
      return (
        <div>
            <Childrents name={name} age={age} address={address}  increaseAge={this.increaseAge} />
        </div>
      );
    }
  }