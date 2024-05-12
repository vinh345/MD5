import React, { Component } from 'react'
import '../App.css'

export default class Product extends Component {
constructor(props){
  super(props)
}



  render() {
    const { img, name, price,count} = this.props.data;



    return (
        <div>
        <div>
        <div className='product'>
        <img src={img} alt="" height={270}/>
        <div>{name}</div>
        <div>{price}</div>
        <div className='btn'>
            <button onClick={()=>this.this.props.onBuy(this.props.index)}>sell</button>
            {count}
            <button onClick={()=>this.props.onSell(this.props.index)}>buy</button>
            </div>
      </div>
        </div>
    </div>
    )
  }
}
