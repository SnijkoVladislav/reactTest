import React, {Component} from 'react';
import * as pingServices from './pingServices';
import {Link} from 'react-router';

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      serverStatus: '',
      serverResponceTime: '',
      isPing: true
    }
  }

  handleClick = () => {
    this.setState({
      isPing: !this.state.isPing
    });
  }

  startPing = () => {
    if (this.state.isPing) {
      let timeStart = +Date.now();
      pingServices.ping().then(() => {
        this.setState({
          serverStatus: 'success',
          serverResponceTime: + Date.now() - timeStart
        });
        setTimeout(() => {
          this.startPing();
        }, 3000);
      }, () => {
        this.setState({serverStatus: 'error'});
        setTimeout(() => {
          this.startPing();
        }, 9000);
      })
    }
  }

  render() {
    return (
      <section className="container home">
        <div>
          <span>
            <Link to="math"> math </Link>
          </span>
          <span>
            <Link to="ping"> ping </Link>
          </span>
        </div>
        <button onClick={this.startPing}>start</button>
        <div>serverStatus : {this.state.serverStatus}</div>
        <div>serverResponceTime: {this.state.serverResponceTime}</div>
        <button onClick={this.handleClick}>pingStatus : {this.state.isPing
            ? 'can ping'
            : 'stop ping'}</button>
      </section>
    );
  }
}
