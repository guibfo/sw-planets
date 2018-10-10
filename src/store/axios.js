// @flow
import axios from 'axios';

const baseUrl: string = 'https://swapi.co/api/planets/';

export default axios.create({
  baseURL: baseUrl
});
