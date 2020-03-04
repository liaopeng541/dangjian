import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import {connect} from "react-redux"
import Config from "../../../config/Config"

import MingZhuShengHuoHui from "../tabPage/MingZhuShengHuoHui"
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');
import NavBar from "../../Cell/NavBar/NavBar"
import HuiYiCell from "../../Cell/AppBottom/HuiYiCell"
class WoDeHuiYi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: '100', title: '民主生活会'},
        {key: '200', title: '组织生活会'},
        {key: '300', title: '民主评议党员'},
      ]
    };
  }

  componentDidMount() {

    console.log(this.props)
  }

  renderScene({route, jumpTo}) {
    switch (route.key) {
      case '100':
        return <MingZhuShengHuoHui {...this.props}/>;
      case '200':
        return <MingZhuShengHuoHui {...this.props}/>;
      case '300':
        return <MingZhuShengHuoHui {...this.props}/>;
    }
  }

  renderTabBar(props) {
    return (<TabBar
      {...props}
      indicatorStyle={{backgroundColor: Config.ThemeColor}}
      style={{backgroundColor: '#ffffff'}}
      renderLabel={({route, focused, color}) => (
        focused ? <Text style={{color: Config.ThemeColor}}>
          {route.title}
        </Text> : <Text style={{color: "#333333"}}>
          {route.title}
        </Text>
      )}
    />)
  }

  setIndex(index) {
    this.setState({
      index: index
    })
  }

  render() {
    const {index, routes} = this.state
    return (
      <>
        <SafeAreaView style={{height: "100%", backgroundColor: "#FCA36B"}}>
          <NavBar
            {...this.props}
            title={"我的会议"}
            rightImage={require('../../../assets/images/user/more.png')}
          />
          {/*<View style={{paddingTop: 20, backgroundColor: Config.ThemeColor}}>*/}
          {/*<View style={{height: 44, alignItems: "center", flexDirection: "row",}}>*/}
          {/*<View style={{flex: 1, justifyContent: "center", paddingLeft: 18}}>*/}

          {/*<Image style={{height: 20, width: 20,}}*/}
          {/*source={require('../../../assets/images/nav/left.png')}*/}
          {/*resizeMode={"contain"}*/}
          {/*/>*/}
          {/*</View>*/}
          {/*<View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>*/}
          {/*<Text style={{color: "#ffffff", fontSize: 16}}>我的会议</Text>*/}
          {/*</View>*/}
          {/*<View style={{*/}
          {/*flex: 1,*/}
          {/*justifyContent: "flex-end",*/}
          {/*alignItems: "center",*/}
          {/*paddingRight: 18,*/}
          {/*flexDirection: "row"*/}
          {/*}}>*/}
          {/*<Text style={{color: "#ffffff", fontSize: 14}}></Text>*/}
          {/*<Image style={{height: 20, width: 20, marginLeft: 10}}*/}
          {/*source={require('../../../assets/images/user/more.png')}*/}

          {/*resizeMode={"contain"}*/}
          {/*/>*/}
          {/*</View>*/}
          {/*</View>*/}
          {/*</View>*/}
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{paddingBottom: 64}}>
              <View style={{padding: 20}}>
                <View style={{backgroundColor: "#ffffff", paddingHorizontal: 20, borderRadius: 5, marginTop: 10}}>
                  <View
                    style={{height: 50, borderBottomColor: "#eeeeee", borderBottomWidth: 1, justifyContent: "center"}}>
                    <Text style={{color: "#333333", fontSize: 16, lineHeight: 20}}>三会一课</Text>

                  </View>

                  <HuiYiCell
                    {...this.props}
                    month={"2020-11"}
                    day={"28"}
                    week={"星期五"}
                    title={"9月份党支部委员会"}
                    desc={"29:30～11:00 805会议室"}
                    routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议详情"}}
                    routeName={"WebDetail"}
                  />

                  <HuiYiCell
                    {...this.props}
                    month={"2020-11"}
                    day={"28"}
                    week={"星期五"}
                    title={"9月份党支部委员会"}
                    desc={"29:30～11:00 805会议室"}
                    routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议详情"}}
                    routeName={"WebDetail"}
                  />
                  <HuiYiCell
                    {...this.props}
                    month={"2020-11"}
                    day={"28"}
                    week={"星期五"}
                    title={"9月份党支部委员会"}
                    desc={"29:30～11:00 805会议室"}
                    routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议详情"}}
                    routeName={"WebDetail"}
                  />
                  <HuiYiCell
                    {...this.props}
                    month={"2020-11"}
                    day={"28"}
                    week={"星期五"}
                    title={"9月份党支部委员会"}
                    desc={"29:30～11:00 805会议室"}
                    routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议详情"}}
                    routeName={"WebDetail"}
                  />

                </View>


                <View style={{backgroundColor: "#ffffff", paddingHorizontal: 20, borderRadius: 5, marginTop: 10}}>
                  <View
                    style={{height: 50, borderBottomColor: "#eeeeee", borderBottomWidth: 1, justifyContent: "center"}}>
                    <Text style={{color: "#333333", fontSize: 16, lineHeight: 20}}>组织生活</Text>

                  </View>

                  <HuiYiCell
                    {...this.props}
                    month={"2020-11"}
                    day={"28"}
                    week={"星期五"}
                    title={"2019民主生活会"}
                    desc={"29:30～11:00 805会议室"}
                    routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议详情"}}
                    routeName={"WebDetail"}
                  />
                  <HuiYiCell
                    {...this.props}
                    month={"2020-11"}
                    day={"28"}
                    week={"星期五"}
                    title={"2019民主生活会"}
                    desc={"29:30～11:00 805会议室"}
                    routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议详情"}}
                    routeName={"WebDetail"}
                  />
                  <HuiYiCell
                    {...this.props}
                    month={"2020-11"}
                    day={"28"}
                    week={"星期五"}
                    title={"2019民主生活会"}
                    desc={"29:30～11:00 805会议室"}
                    routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议详情"}}
                    routeName={"WebDetail"}
                  />

                </View>

              </View>
            </View>


          </ScrollView>
          {/*<View*/}
            {/*style={{*/}
            {/*bottom: 0,*/}
            {/*left: 0,*/}
            {/*right: 0,*/}
            {/*backgroundColor: "#ffffff",*/}
            {/*height: 64,*/}
            {/*width: "100%",*/}
            {/*zIndex: 100,*/}
            {/*flexDirection: "row",*/}
            {/*borderTopColor: "#eeeeee",*/}
            {/*borderTopWidth: 1,*/}
            {/*position: "absolute"*/}
          {/*}}>*/}
            {/*<View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1}}>*/}
              {/*<Image style={{height: 20, width: 20,}}*/}
                     {/*source={require('../../../assets/images/other/message.png')}*/}
                     {/*resizeMode={"contain"}*/}
              {/*/>*/}
              {/*<Text style={{fontSize: 14, color: "#666666", marginLeft: 7}}>*/}
                {/*我的会议*/}
              {/*</Text>*/}
            {/*</View>*/}

            {/*<View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1}}>*/}
              {/*<Image style={{height: 20, width: 20,}}*/}
                     {/*source={require('../../../assets/images/other/user.png')}*/}
                     {/*resizeMode={"contain"}*/}
              {/*/>*/}
              {/*<Text style={{fontSize: 14, color: "#666666", marginLeft: 7}}>*/}
                {/*我的会议*/}
              {/*</Text>*/}
            {/*</View>*/}

          {/*</View>*/}
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({});
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(WoDeHuiYi)