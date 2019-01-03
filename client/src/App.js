import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Standings from './components/Standings';
import FullStandings from './components/FullStandings';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
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

  render() {
    const { teams } = this.state;
    return (
      <div>
        <Navigation teams={teams} />
        <Standings teams={teams} />
        <FullStandings teams={teams} />
      </div>
    );
  }
}
