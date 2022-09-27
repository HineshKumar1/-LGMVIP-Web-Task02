import React, { Component } from 'react'
import UserCard from './UserCard';
import NavBar from './NavBar';
import Spinner from './Spinner';
export default class Table extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      loading : false
    }
}

async componentDidMount(){
  const API = 'https://reqres.in/api/users?page=1';
  const Data = await  fetch(API)
  const ParseData =await   Data.json();
  this.setState({
    data : ParseData.data,
    loading : false
  })
}

 GetData =  async ()=>{
    const API =  'https://reqres.in/api/users?page=1';
    const Data = await fetch(API)
    const ParseData = await  Data.json();
    this.setState({
      data : ParseData.data,
      loading : true
    })
}
  render() {
    return (
      <>
      <NavBar click={this.GetData}></NavBar>
        <div className='container'>
        {this.state.loading && <Spinner/>}
          <div className="row">
        {
          this.state.data.map((element)=>{
            return <div className="col-md-4 my-2" key={element.id}>
              <UserCard first_name={element.first_name} img={element.avatar} last_name={element.last_name} 
              email={element.email} id={element.id}></UserCard>
              </div>
          })
        }
        </div>
        </div>
        </>
    )
  }
}
