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


//党员风采
import DangYuanFengCai from "../pages/UserPage/UserSubPage/DangYuanFengCai"
//主题活动
import ZhuTiHuoDong from "../pages/UserPage/UserSubPage/ZhuTiHuoDong"

//党支部
import DangZhiBu from "../pages/UserPage/UserSubPage/DangZhiBu"

//党员档案
import DangYuanDanAn from "../pages/UserPage/UserSubPage/DangYuanDanAn"
//三制一卡
import SanZhiYiKa from "../pages/UserPage/UserSubPage/SanZhiYiKa"


//三会一课
import SanHuiYiKe from "../pages/UserPage/UserSubPage/SanHuiYiKe"


//组织生活
import ZuZhiShengHuo from "../pages/UserPage/UserSubPage/ZuZhiShengHuo"
//发展党员
import FaZhanDangYuan from "../pages/UserPage/UserSubPage/FaZhanDangYuan"



//用户中心
import User from "../pages/UserPage/User"


//党费缴纳
import DanFeiJiaoNa from "../pages/UserPage/UserSubPage/DanFeiJiaoNa"


//发展党员详情
import FaZhanDangYuan_Detail from "../pages/UserPage/UserSubPage/FaZhanDangYuan_Detail"

//档案详情
import DanANXiangQing from "../pages/UserPage/UserSubPage/DanANXiangQing"
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="快捷测试" component={DanANXiangQing} />
        <Tab.Screen name="阳光党建" component={YangGuangDangJian} />
        <Tab.Screen name="意识形态" component={YiShiXingTai} />
        <Tab.Screen name="党风廉政" component={DangFengLianZheng} />
        <Tab.Screen name="精准扶贫" component={JinZhunFuPing} />
        <Tab.Screen name="专题专栏" component={ZhuanTiZhuanLan} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}