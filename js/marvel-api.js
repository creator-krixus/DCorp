import axios from 'axios';

const getMarvelData = async (offset = 0, limit = 10) => {
    const publicKey = '44e2881982e7545b451b1873ae3804e4';
    const timestamp = 1;
    const hash = '0b484775d8996814808899d38e4d252a';
  
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
  
    try {
      const response = await axios.get(url);
      return response.data.data.results;
    } catch (error) {
      console.error(error, 'linea 25');
    }
  };

export default getMarvelData;  