/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Standings from './components/Standings';
import FullStandings from './components/FullStandings';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      view: 'main',
    };
    this.renderView = this.renderView.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('espn/teamstandings')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          teams: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick() {
    const { view } = this.state;
    this.setState({
      view: 'fullstandings',
    });
  }

  // eslint-disable-next-line consistent-return
  renderView() {
    const { view, teams } = this.state;
    if (view === 'main') {
      return (
        <div id="main">
          <Navigation teams={teams} />
          <div id="main-standings">
            <Standings teams={teams} handleClick={this.handleClick} />
          </div>
        </div>
      );
    } if (view === 'fullstandings') {
      return (
        <div id="full-standings">
          <FullStandings teams={teams} />
        </div>
      );
    }
  }

  render() {
    return (
      this.renderView()
    );
  }
}
