import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((item) => (
          <PlanetCard
            planetName={ item.name }
            planetImage={ item.image }
            key={ item.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
