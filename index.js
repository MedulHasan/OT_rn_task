/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListProvider from './src/context/ListProvider';

const AppTask = () => (
  <ListProvider>
    <App />
  </ListProvider>
);

AppRegistry.registerComponent(appName, () => AppTask);
