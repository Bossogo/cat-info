import axios from 'axios';

const headers = new Headers({
    "x-api-key": process.env.CAT_API_KEY
  });


export const searchBreed = async (query) => {
    try{
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
            headers: headers,
        });
        const data = await response.data;
        return data;
    } catch{
        console.error('Error fetching cat image:', error);
        return [];
    
    }
}

export const fetchBreedList = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
        headers: headers,
      });
      data = await response.data;
      return data;
    } catch (error) {
      console.error('Error fetching cat breeds:', error);
      return [];
    }
  };