import React from 'react';

import styles from './PlanetCard.scss';

const PlanetCard = props => {
  return (
    <div className={styles.card}>
      <header className={styles.card__header}>
        <h1 className={styles.card__title}>{props.planet.name}</h1>
      </header>
      <main className={styles.card__body}>
        <div className={styles['info-wrapper']}>
          <span className={`${styles.card__label} ${styles.population}`}>Population: </span>
          <span className={styles.card__info}>{props.planet.population}</span>
        </div>
        <div className={styles['info-wrapper']}>
          <span className={`${styles.card__label} ${styles.climate}`}>Climate: </span>
          <span className={styles.card__info}>{props.planet.climate}</span>
        </div>
        <div className={styles['info-wrapper']}>
          <span className={`${styles.card__label} ${styles.terrain}`}>Terrain: </span>
          <span className={styles.card__info}>{props.planet.terrain}</span>
        </div>
        <div className={styles.featured}>
          {props.planet.films.length > 0 ? `Featured in ${props.planet.films.length} movies` : `No movies appearances!`}
        </div>
      </main>
    </div>
  );
};

export default PlanetCard;
