import React, { Component } from 'react'

export default class UserCard extends Component {
  render() {
    return (
      <>
        <div class="card" style={{width: '18rem'}}>
  <img className="card-img-top" alt=' Not Found' src={this.props.img} />
  <div class="card-body">
    <h5 class="card-title">{this.props.first_name}</h5>
    <p class="card-text"><h6>{this.props.last_name}</h6></p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID : {this.props.id}</li>
    <li class="list-group-item">Email : {this.props.email}</li>
  </ul>
    </div>
      </>
    )
  }
}
