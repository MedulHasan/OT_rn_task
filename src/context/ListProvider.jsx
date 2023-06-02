import {View, Text} from 'react-native';
import React, {createContext} from 'react';
import useLists from '../hooks/useLists';

export const ListContext = createContext(null);

const ListProvider = ({children}) => {
  const lists = useLists();
  return <ListContext.Provider value={lists}>{children}</ListContext.Provider>;
};

export default ListProvider;
