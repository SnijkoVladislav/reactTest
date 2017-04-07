import React, {Component} from 'react';
import * as pingServices from './pingServices';
import {Link} from 'react-router';

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            serverStatus: '',
            serverResponceTime: '',
            isPing: false
        }
    }

    startPing = () => {
        this.setState({isPing: true});
        pingServices.ping(this.state.url).then(result => {
            this.setState({serverStatus: "secuses", isPing: false, serverResponceTime: result});
        }).catch((err) => {
            this.setState({serverStatus: "error", isPing: false, serverResponceTime: ''});
        });
    }

    render() {
        return (
            <section className="container home">
                <div>
                    <span>
                        <Link to="/">
                            math
                        </Link>
                    </span>
                    <span>
                        <Link to="ping">
                            ping
                        </Link>
                    </span>
                </div>
                <input type="text" onChange={e => this.state.url = e.target.value}/>
                <button onClick={this.startPing} className={!(this.state.isPing) && 'btn-disable'}>ping</button>
                <div>serverStatus : {this.state.serverStatus}</div>
                <div>serverResponceTime: {this.state.serverResponceTime}</div>
            </section>
        );
    }
}
