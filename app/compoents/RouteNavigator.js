import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import YangGuangDangJian from "../pages/YangGuangDangJian"

import YiShiXingTai from "../pages/YiShiXingTai"
import ZhuanTiZhuanLan from "../pages/ZhuanTiZhuanLan"
import DangFengLianZheng from "../pages/DangFengLianZheng"
import JinZhunFuPing from "../pages/JinZhunFuPing"
import DangJianYueLanShi from "../pages/ListPage/DangJianYueLanShi"



import ZhiHuiDangJianListPage from "../pages/ListPage/ZhiHuiDangJianListPage"
import User from "../pages/UserPage/User"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="快捷测试" component={User} />
        <Tab.Screen name="阳光党建" component={YangGuangDangJian} />
        <Tab.Screen name="意识形态" component={YiShiXingTai} />
        <Tab.Screen name="党风廉政" component={DangFengLianZheng} />
        <Tab.Screen name="精准扶贫" component={JinZhunFuPing} />
        <Tab.Screen name="专题专栏" component={ZhuanTiZhuanLan} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}