import React, { Component } from 'react'
import Header from './components/Header';
import './App.css'
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductList from './components/ProductList';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          img: "https://i.imgur.com/9QtYXwu.jpg",
          name: "AirPods Pro",
          price: 249,
          count: 0
        },
        {
          img: "https://i.imgur.com/NjB1B10.jpg",
          name: "Nintendo Switch",
          price: 299,
          count: 0
        },
        {
          img: "https://i.imgur.com/0GPFIYa.jpg",
          name: "PS5",
          price: 499,
          count: 0
        },
        {
          img: "https://i.imgur.com/B9ePUN9.jpg",
          name: "Xbox Series X",
          price: 499,
          count: 0
        },
        {
          img: "https://i.imgur.com/VmU4KDK.jpg",
          name: "Iphone 14 Pro Max - 1TB",
          price: 1599,
          count: 0
        },
        {
          img: "https://i.imgur.com/Dfnlv06.png",
          name: "Samsung S22 Ultra - 1TB",
          price: 1399,
          count: 0
        },
        {
          img: "https://i.imgur.com/6QjVUZV.jpg",
          name: "MacBook Pro 14' M1 Max (64GB RAM | 4TB)",
          price: 4699,
          count: 0
        },
        {
          img: "https://i.imgur.com/fminWBH.jpg",
          name: "2022 Mac Studio M1 Ultra (128GB RAM | 8TB)",
          price: 6999,
          count: 0
        },
        {
          img: "https://i.imgur.com/diqWGS7.jpg",
          name: "Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)",
          price: 4950,
          count: 1
        }
      ], 
      total: 217000000000,
      totalBuy: 0,
      totalSell: 0,
      percent : 0,
    }
  }


  handleSell = (index) => {
    const newData = [...this.state.items];
    console.log(newData);
    const itemPrice = newData[index].price;
    console.log(itemPrice);
    if (newData[index].count > 0) {
      newData[index].count -= 1;
      const totalSell = this.state.totalSell + itemPrice;
      const total = this.state.total + itemPrice;
      const totalBuy = this.state.totalBuy - itemPrice; 
      const percent = (totalBuy / 217000000000);
      this.setState({ items: newData, totalSell, total, percent, totalBuy });
    }
  }


  handleBuy = (index) => {
    const newData = [...this.state.items]; // clone về item
    const itemPrice = newData[index].price; // lấy price
    const totalBuy = this.state.totalBuy + itemPrice;
    const total = this.state.total - itemPrice; // lấy total price - giá sp 
    if(this.state.total -itemPrice > 0) { // nếu còn tiền
      newData[index].count += 1;     // lấy count +1
      const percent = (totalBuy / 217000000000);   // %
      this.setState({ items: newData, totalBuy, total, percent });  // set lại state
    }
  }



  render() {
    return (
      <div>
     <Header total = {this.state.total} percent = {this.state.percent} />
     <Navbar />
     <ProductList data= {this.state.items} onBuy={this.handleBuy} onSell={this.handleSell}/>
      </div>
    )
  }
}
