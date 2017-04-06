import React, {Component} from 'react';
import * as mathService from './mathService';
import {Link} from 'react-router';

export default class MathPage extends Component {

  constructor() {
    super();
    this.state = {
      math: {
        arr: [],
        statistic: [],
        median: null,
        meanDeviation: null,
        averageValue: null
      },
      min: null,
      max: null,
      step: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      math: mathService.result(+this.state.min, +this.state.max, +this.state.step)
    })
  }

  handleStart = (e) => {
    this.setState({min: e.target.value})
  }

  handleEnd = (e) => {
    this.setState({max: e.target.value})
  }

  handleStep = (e) => {
    this.setState({step: e.target.value})
  }

  render() {
    return (
      <section className="container home">
        <div>
          <span>
            <Link to="">  math  </Link>
          </span>
          <span>
            <Link to="ping">  ping  </Link>
          </span>
        </div>
        <form className="form-inline" role="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input type="number" placeholder="start" className="form-control" onChange={this.handleStart}/>
            </div>
            <div className="input-group">
              <input type="number" placeholder="end" className="form-control" onChange={this.handleEnd}/>
            </div>
            <div className="input-group">
              <input type="number" placeholder="step" className="form-control" onChange={this.handleStep}/>
            </div>
          </div>
          <button type="submit" className={!(this.state.min && this.state.max && this.state.step) && 'btn-disable'}>
            Go
          </button>
        </form>

        <div>Медиана: {this.state.math.median}</div>
        <div>Среднее значение: {this.state.math.averageValue}</div>
        <div>Отклоненине: {this.state.math.meanDeviation}</div>
        <div>Мода: {this.state.math.statistic.join()}</div>

      </section>
    );
  }
}
