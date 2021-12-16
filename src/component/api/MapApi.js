import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  
export const getRestaurantData = async (sw, ne) => {
    try{
        const {data: {data}} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              limit: '20',
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '376841c8eemshcbfa17161c3aa2cp1652f1jsn37b333be6f70'
            }
          });
          return data;
    } catch(error){
        console.log(error)
    }
}