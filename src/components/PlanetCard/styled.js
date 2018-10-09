// @flow
import styled from 'styled-components';

const PlanetCard = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 0px rgba(51, 51, 51, 0.6);
  color: #333333;
  margin: 0 auto;
  max-width: 320px;
  text-align: left;
  padding: 10px;
  width: 95%;

  .featured {
    margin-top: 20px;
    text-align: center;
  }

  .info-wrapper {
    margin-bottom: 10px;
  }

  &__title {
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    font-weight: normal;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.6);
  }

  &__body {
    background-color: #E9E9E9;
    border-radius: 5px;
    box-shadow: inset 0px 0px 2px 0px rgba(51, 51, 51, 0.65);
    padding: 15px 10px;
  }

  &__label {
    background-position: left center;
    background-repeat: no-repeat;
    color: lighten(#333333, 20%);
    font-size: 12px;
    padding-left: 18px;

    &.population {
      background-image: url(../../assets/images/ewok.png);
    }

    &.climate {
      background-image: url(../../assets/images/climate.png);
    }

    &.terrain {
      background-image: url(../../assets/images/terrain.png);
    }
  }

  &__info {
    font-size: 14px;
  }
`;

export default PlanetCard;
