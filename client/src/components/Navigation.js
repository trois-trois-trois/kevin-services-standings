/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';

const Navigation = (props) => {
  const { teams } = props;
  const nfcWestTeams = teams.filter(team => team.division === 'NFC WEST' && team.team_name === 'Los Angeles Rams').sort((a, b) => b.wins - a.wins);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="https://a.espncdn.com/i/teamlogos/nfl/500/lar.png" alt="logo" width="50px" />
        </a>
        <h3>LOS ANGELES RAMS</h3>
        <button type="button" className="btn btn-outline-primary btn-sm">Follow</button>
        {nfcWestTeams.map(team => (
          <h6 key={team._id}>
            {team.wins}
-
            {team.losses}
          </h6>
        ))}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Stats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Standings</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
