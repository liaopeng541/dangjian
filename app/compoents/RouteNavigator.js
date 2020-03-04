import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator,CardStyleInterpolators,TransitionSpecs } from '@react-navigation/stack';


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


//党费缴纳---支付
import DangFeiJiaoNa_Pay from "../pages/UserPage/UserSubPage/DangFeiJiaoNa_Pay"


//党员承诺行动卡
import ChengLuoKa from "../pages/UserPage/UserSubPage/ChengLuoKa"


//我的会议
import WoDeHuiYi from "../pages/UserPage/UserSubPage/WoDeHuiYi"

//网页版详情页
import WebDetail from "../pages/WebDetail"

//理论学习
import LiLunXueXi from "../pages/tabPage/YiShiXingTai/LiLunXueXi"

//扶贫柜台
import FuPingGuiTai from "../pages/ShopPage/FuPingGuiTai"

//商品详情
import GoodsDetail from "../pages/ShopPage/GoodsDetail"

//会议详情
import HuiYiDetail from "../pages/HuiYiPage/HuiYiDetail"
//三制一卡详情
import SanZhiYiKaXiangQing from "../pages/UserPage/UserSubPage/SanZhiYiKaXiangQing"



const Tab = createBottomTabNavigator();
const TabScreen=()=>  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === '阳光党建') {
        iconName = focused
          ? require('../assets/images/tab_menu/Home_2.png')
          : require('../assets/images/tab_menu/Home_1.png');
      } else if (route.name === '意识形态') {
        iconName = focused
          ? require('../assets/images/tab_menu/yishi_2.png')
          : require('../assets/images/tab_menu/yishi_1.png');
      }else if (route.name === '党风廉政') {
        iconName = focused
          ? require('../assets/images/tab_menu/lianjie_2.png')
          : require('../assets/images/tab_menu/lianjie_1.png');
      }else if (route.name === '精准扶贫') {
        iconName = focused
          ? require('../assets/images/tab_menu/fupin_2.png')
          : require('../assets/images/tab_menu/fupin_1.png');
      }else if (route.name === '专题专栏') {
        iconName = focused
          ? require('../assets/images/tab_menu/fupin_Copy_2.png')
          : require('../assets/images/tab_menu/fupin_Copy_1.png');
      }

      // You can return any component that you like here!
      return <Image style={{height: 27, width: 27,}}
                    source={iconName}
      />;
    },





  })}
  tabBarOptions={{
    activeTintColor: '#666666',
    inactiveTintColor: '#666666',
    style:{
      paddingBottom:10,
      paddingTop:4,
      height:64
    },
    labelStyle:{
      marginTop:0
    }
  }}
>
  {/*<Tab.Screen name="测试" component={SanZhiYiKaXiangQing} />*/}
  <Tab.Screen name={"阳光党建"} component={YangGuangDangJian} />
  <Tab.Screen name="意识形态" component={YiShiXingTai} />
  <Tab.Screen name="党风廉政" component={DangFengLianZheng} />
  <Tab.Screen name="精准扶贫" component={JinZhunFuPing} />
  <Tab.Screen name="专题专栏" component={ZhuanTiZhuanLan} />
</Tab.Navigator>

const options={
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const Stack = createStackNavigator();
const StackSreen=()=><Stack.Navigator
  initialRouteName={"Home"}
>
  <Stack.Screen name="Home" component={TabScreen} options={options}/>
  <Stack.Screen name="User" component={User} options={options}/>
  <Stack.Screen name="YangGuangDangJian" component={YangGuangDangJian} options={options}/>
  <Stack.Screen name="YiShiXingTai" component={YiShiXingTai} options={options}/>
  <Stack.Screen name="DangFengLianZheng" component={DangFengLianZheng} options={options}/>
  <Stack.Screen name="JinZhunFuPing" component={JinZhunFuPing} options={options}/>
  <Stack.Screen name="ZhuanTiZhuanLan" component={ZhuanTiZhuanLan} options={options}/>
  <Stack.Screen name="WebDetail" component={WebDetail} options={options}/>
  <Stack.Screen name="WoDeHuiYi" component={WoDeHuiYi} options={options}/>
  <Stack.Screen name="ChengLuoKa" component={ChengLuoKa} options={options}/>
  <Stack.Screen name="DangFeiJiaoNa_Pay" component={DangFeiJiaoNa_Pay} options={options}/>
  <Stack.Screen name="DanANXiangQing" component={DanANXiangQing} options={options}/>
  <Stack.Screen name="FaZhanDangYuan_Detail" component={FaZhanDangYuan_Detail} options={options}/>
  <Stack.Screen name="DanFeiJiaoNa" component={DanFeiJiaoNa} options={options}/>
  <Stack.Screen name="FaZhanDangYuan" component={FaZhanDangYuan} options={options}/>
  <Stack.Screen name="ZuZhiShengHuo" component={ZuZhiShengHuo} options={options}/>
  <Stack.Screen name="SanHuiYiKe" component={SanHuiYiKe} options={options}/>
  <Stack.Screen name="SanZhiYiKa" component={SanZhiYiKa} options={options}/>
  <Stack.Screen name="DangYuanDanAn" component={DangYuanDanAn} options={options}/>
  <Stack.Screen name="DangZhiBu" component={DangZhiBu} options={options}/>
  <Stack.Screen name="ZhuTiHuoDong" component={ZhuTiHuoDong} options={options}/>
  <Stack.Screen name="DangYuanFengCai" component={DangYuanFengCai} options={options}/>
  <Stack.Screen name="ZhiHuiDangJianListPage" component={ZhiHuiDangJianListPage} options={options}/>
  <Stack.Screen name="DangJianYueLanShi" component={DangJianYueLanShi} options={options}/>
  <Stack.Screen name="FuPingGuiTai" component={FuPingGuiTai} options={options}/>
  <Stack.Screen name="GoodsDetail" component={GoodsDetail} options={options}/>
  <Stack.Screen name="HuiYiDetail" component={HuiYiDetail} options={options}/>
  <Stack.Screen name="SanZhiYiKaXiangQing" component={SanZhiYiKaXiangQing} options={options}/>






</Stack.Navigator>






export default function RouteNavigator() {
  return (

    <NavigationContainer>
    <StackSreen />

    </NavigationContainer>
  );
}