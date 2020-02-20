import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import YangGuangDangJian from "../pages/YangGuangDangJian"

import YiShiXingTai from "../pages/YiShiXingTai"
import ZhuanTiZhuanLang from "../pages/ZhuanTiZhuanLang"
import DangFengLianZheng from "../pages/DangFengLianZheng"
import JinZhunFuPing from "../pages/JinZhunFuPing"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="阳光党建" component={YangGuangDangJian} />
        <Tab.Screen name="意识形态" component={YiShiXingTai} />
        <Tab.Screen name="党风廉政" component={DangFengLianZheng} />
        <Tab.Screen name="精准扶贫" component={JinZhunFuPing} />
        <Tab.Screen name="专题专栏" component={ZhuanTiZhuanLang} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}