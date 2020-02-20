/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStore,applyMiddleware} from "redux"
import rootReducer from "./redux/reducer/index"
import {Provider} from "react-redux"
import createSagaMiddleware from "redux-saga"
import {composeWithDevTools} from "redux-devtools-extension"
import watch from "./redux/sagas/user"
import RouteNavigator from "./compoents/RouteNavigator"
const sagaMiddleware=createSagaMiddleware();
const store=createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(sagaMiddleware)
      )
)
sagaMiddleware.run(watch)
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={"rgba(0,0,0,0)"} translucent={true}/>
      <Provider store={store}>
        <RouteNavigator />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
});
export default App;
