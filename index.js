/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';
AppRegistry.registerComponent(appName, () => {
  SplashScreen.hide();
  return App
});
