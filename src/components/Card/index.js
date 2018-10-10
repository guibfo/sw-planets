// @flow
import React, { Fragment } from 'react';
import StyledCard from './styled';
import Button from '../UI/Button';

const Card = (props: Props) => {
  return (
    <Fragment>
      <StyledCard>
        <header className='card__header'>
          <h1 className='card__title'>{props.planet.name}</h1>
        </header>
        <main className='card__body'>
          <div className='info-wrapper'>
            <span className='card__label population'>Population: </span>
            <span className='card__info'>{props.planet.population}</span>
          </div>
          <div className='info-wrapper'>
            <span className='card__label climate'>Climate: </span>
            <span className='card__info'>{props.planet.climate}</span>
          </div>
          <div className='info-wrapper'>
            <span className='card__label terrain'>Terrain: </span>
            <span className='card__info'>{props.planet.terrain}</span>
          </div>
          <div className='featured'>
            {props.planet.films.length === 0
              ? `No movies appearances!`
              : props.planet.films.length > 1
                ? `Featured in ${props.planet.films.length} movies`
                : `Featured in ${props.planet.films.length} movie`
            }
          </div>
        </main>
      </StyledCard>
      <Button />
    </Fragment>
  );
};

export default Card;
