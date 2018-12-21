import React, { Component } from 'react';
import mockTeamData from '../mockTeamData';

export default class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: mockTeamData,
    };
  }

  render() {
    const { teams } = this.state;

    return (
      <div>
        <ul>
          <b>Team:</b>
          {teams.map(team => (
            <div key={team.id}>
              <li>{team.team_name}</li>
              <ul>
                <b>Record:</b>
                <li>{team.wins}</li>
                <li>{team.losses}</li>
              </ul>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
