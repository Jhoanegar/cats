const URL = 'https://api.thecatapi.com/v1/images/search?size=full';

const getCatUrl = () => {
  return fetch(URL, { headers: { 'x-api-key': window.CATS_API_KEY } }).then(
    async (response) => {
      const body = await response.json();
      return body[0].url;
    }
  );
};

export default getCatUrl;
