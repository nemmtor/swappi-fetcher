const swapiUrl = 'https://swapi.dev/api/people/';

export interface SwapiResJson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export const fetchSwapiOrReject = async (id: string): Promise<SwapiResJson> => {
  const response = await fetch(swapiUrl + id);
  if (response.status >= 400) {
    throw new Error('There was an error when fetching api.');
  }
  const jsonData: SwapiResJson = await response.json();
  return jsonData;
};
