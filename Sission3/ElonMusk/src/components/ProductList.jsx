import React, { Component } from 'react'
import Product from './Product'
import '../App.css'

export default class ProductList extends Component {
    constructor(props) {
        super(props)
    }


  render() {
    return (
      <div  className='container'>
        {this.props.data.map((item, index) =>
                    <Product
                        key={index + 1}
                        data={item}
                        onBuy={this.props.onBuy}
                        onSell = {this.props.onSell}
                         />
                )}
      </div>
    )
  }
}
