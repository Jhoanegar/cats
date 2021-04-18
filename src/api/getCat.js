import './config';

const URL = 'https://api.thecatapi.com/v1/images/search?size=full';

const getCat = () => {
  return fetch(URL, { headers: { 'x-api-key': process.env['CATS_API_KEY'] } })
}