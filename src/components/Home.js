import React, { Component } from 'react'
import { Items } from './Items';
import Loading from './Loading';
import { Memo } from './Memo';

export default class Home extends Component {
  state = {
    data:[],
    defult:[],
    status:false
  }




  componentDidMount(){
    fetch('https://api.escuelajs.co/api/v1/products').then((response) => response.json()).then(data => {
      this.setState({data,status:true,defult:data})
    })
  }
   
  checker = (type) => {
    this.setState({defult:this.state.data.filter(e=> e.category.name == type)})
  }

  render() {
    return (
      <>
        {this.state.status ? <Items data={this.state.defult} checker={this.checker}/> : <Loading/>}
      </>
    )
  }
}
