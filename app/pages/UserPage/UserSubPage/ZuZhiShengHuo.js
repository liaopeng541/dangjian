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
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');
import NavBar from "../../Cell/NavBar/NavBar"
import HuiYiBottom from "../../Cell/AppBottom/HuiYiBottom"
import WoDeHuiYi from "./WoDeHuiYi"
class ZuZhiShengHuo extends Component {
  constructor(props) {
    super(props);
    this.state ={
      index: 0,
      selected:0,
      routes: [
        { key: '100', title: '民主生活会' },
        { key: '200', title: '组织生活会' },
        { key: '300', title: '民主评议党员' },
      ],
    };
  }

  componentDidMount() {

    console.log(this.props)
  }
  switchPage(val)
  {
    this.setState({
      selected:val
    })
  }
  renderScene({ route, jumpTo }){
    switch (route.key) {
      case '100':
        return <MingZhuShengHuoHui {...this.props}/>;
      case '200':
        return <MingZhuShengHuoHui {...this.props}/>;
      case '300':
        return <MingZhuShengHuoHui {...this.props}/>;
    }
  }

  renderTabBar(props){
    return(<TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Config.ThemeColor}}
      style={{ backgroundColor: '#ffffff' }}
      renderLabel={({ route, focused, color }) => (
        focused?<Text style={{ color:Config.ThemeColor}}>
          {route.title}
        </Text>:<Text style={{ color:"#333333"}}>
          {route.title}
        </Text>
      )}
    />)
  }
  setIndex(index)
  {
    this.setState({
      index:index
    })
  }
  render() {
    const {index,routes}=this.state
    return (
      <>
        <SafeAreaView style={{height:"100%"}}>
          {this.state.selected==0&&<View style={{height:height-24}}>
          <NavBar
            {...this.props}
            title={"组织生活"}
            rightComponentName={"User"}
            rightImage={require('../../../assets/images/user/more.png')}
          />
          <View style={{height:170,backgroundColor:"#cccccc",width:"100%"}}>
            <Image style={{ height: "100%", width: "100%",  }}
                   source={require('../../../assets/images/test/zzsh.png')}
            />
          </View>
            <View style={{backgroundColor: "#E3E3E3"}}>



              <View style={{backgroundColor: "#ffffff",height:height-274}}>
                <TabView
                  swipeEnabled={false}
                  navigationState={{ index, routes }}
                  renderScene={this.renderScene.bind(this)}
                  onIndexChange={this.setIndex.bind(this)}
                  tabStyle={{backgroundColor:"#ffffff"}}
                  renderTabBar={this.renderTabBar.bind(this)}
                />
              </View>







            </View>


          </View>}
          {this.state.selected==1 &&<View style={{height:height-24}}>
            <WoDeHuiYi {...this.props}/>
          </View>}
          <HuiYiBottom {...this.props} selected={this.state.selected} leftClick={this.switchPage.bind(this,0)} rightClick={this.switchPage.bind(this,1)}/>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {},
  location: {
    padding: 16,
  },
  buttonGroup: {
    padding: 16,
    flexDirection: 'row'
  },
  button: {
    width: 80,
    margin: 8
  }
});
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(ZuZhiShengHuo)