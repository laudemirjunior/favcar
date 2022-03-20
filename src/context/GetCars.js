import React, {createContext, useContext, useState} from 'react';
import api from '../services';

export const CarsContext = createContext();

export const CarsProvider = ({children}) => {
  const [cars, setCars] = useState(null);

  const getCars = () => {
    api.get('/cars').then(response => {
      setCars(response.data);
    });
  };
  return (
    <CarsContext.Provider value={{getCars, cars}}>
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => useContext(CarsContext);
