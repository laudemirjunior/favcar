import React from 'react';
import {CarsProvider} from './GetCars';

export const Providers = ({children}) => {
  return <CarsProvider>{children}</CarsProvider>;
};
