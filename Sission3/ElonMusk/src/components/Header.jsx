import React, { Component } from 'react'
import '../App.css'

export default class Header extends Component {
  render() {
    return (
        <div className='header'>
        <img src="https://i.imgur.com/sroyZau.jpg" alt="" />
      <h3>Spend Elon Musk's Fortune!</h3>
      <p>If Elon cashed out all of his stocks & assets today he would have
      approximately $195,000,000,000 (US Dollars) in his bank account (Forbes 2024).

      ¿What would you spend it on?

      ¡Have your receipt at the end!</p>
    </div>
    )
  }
}
