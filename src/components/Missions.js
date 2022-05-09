import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">

        <Title headline="Missões" />
        <div className="missoes">
          {missions.map((mission) => (<MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            description={ mission.description }
          />))}
        </div>
      </div>
    );
  }
}
export default Missions;
