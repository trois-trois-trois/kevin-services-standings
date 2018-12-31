/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';

export default class Standings extends Component {
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
    const nfcWestTeams = teams.filter(team => team.division === 'NFC WEST').sort((a, b) => b.wins - a.wins);

    return (
      <div className="container-fluid">
        <h5>2018 NFC West Standings</h5>
        <table className="table table-striped table-hover table-sm rounded">
          <thead>
            <tr>
              <th scope="col">Team</th>
              <th scope="col">W</th>
              <th scope="col">L</th>
              <th scope="col">T</th>
              <th scope="col">PCT</th>
              <th scope="col">PF</th>
              <th scope="col">PA</th>
            </tr>
          </thead>
          <tbody>
            {nfcWestTeams.map(team => (
              <tr key={team._id}>
                <th scope="row">{team.team_name}</th>
                <th scope="row">{team.wins}</th>
                <th scope="row">{team.losses}</th>
                <th scope="row">0</th>
                <th scope="row">{team.percentage.toFixed(3).slice(1)}</th>
                <th scope="row">{team.points_for}</th>
                <th scope="row">{team.points_against}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
