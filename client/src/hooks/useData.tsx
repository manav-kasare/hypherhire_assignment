import React, {useContext, useState} from 'react';
import {light} from '../constants';
import {ITheme, IUseData} from '../constants/types';

export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<ITheme>(light);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext) as IUseData;
