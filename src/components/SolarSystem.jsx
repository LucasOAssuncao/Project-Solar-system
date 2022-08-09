import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {Planets.map((item) => (
            <PlanetCard
              planetName={ item.name }
              planetImage={ item.image }
              key={ item.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
