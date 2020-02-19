import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home"


export default createBottomTabNavigator({
  Album: { screen: Album },
  Library: { screen: Library },
  History: { screen: History },
  Cart: { screen: Cart },
});