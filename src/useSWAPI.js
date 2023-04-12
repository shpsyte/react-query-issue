import { useQuery } from '@tanstack/react-query';

const fetchStartWars = async (q) => {
  const response = await fetch(`https://swapi.dev/api/people/${q}`);


  const data = await response.json();
  console.log(' Hitting API => ', q)
   
  return data

};


export const useSWAPI = (q) => {
  return useQuery(['sw', q], () => fetchStartWars(q),{
    // staleTime: 1000 * 5,
    cacheTime: 1000 * 5,
  });

};
