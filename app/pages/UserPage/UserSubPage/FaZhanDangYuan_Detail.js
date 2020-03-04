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

import JiBengXingXi from "../tabPage/JiBengXingXi"
import FaZhanLiuCheng from "../tabPage/FaZhanLiuCheng"
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');
import NavBar from "../../Cell/NavBar/NavBar"
class FaZhanDangYuan_Detail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      index: 0,
      routes: [
        { key: '100', title: '基本信息' },
        { key: '200', title: '发展流程' },
      ]
    };
  }

  componentDidMount() {

    console.log(this.props)
  }

  renderScene({ route, jumpTo }){
    switch (route.key) {
      case '100':
        return <JiBengXingXi {...this.props}/>;
      case '200':
        return <FaZhanLiuCheng {...this.props}/>;
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
          <NavBar
            {...this.props}
            title={"发展党员"}
            rightImage={require('../../../assets/images/user/more.png')}

          />
          <ImageBackground
            source={require('../../../assets/images/page_bg/dangyunxiangqing.png')}
            style={{
              height: 100,
              paddingLeft: 19,
              paddingRight: 19,
              flexDirection: "row"
            }}>
            <View style={{flex: 1, alignItems: "center", flexDirection: "row"}}>
              <View style={{
                height: 64,
                width: 64,
                borderRadius: 32,
                backgroundColor: "#ffffff",
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
                borderWidth:3,
                borderColor:"#999999"
              }}>
                {true?<Image style={{height: "100%", width: "100%"}}
                             source={{uri:"http://app.jzdzsw.cn/dtest/dangyuan/12黄霞.jpg"}}

                  />:
                  <Image style={{height: 30, width: 30}}
                         source={require('../../../assets/images/user/avatar.png')}


                  />}


              </View>
              <View style={{marginLeft: 13}}>
                <View>
                  <Text style={{fontSize: 17, color: "#ffffff", lineHeight: 24}}>党员姓名</Text>
                </View>
                <View>
                  <Text style={{fontSize: 14, color: "#ffffff", lineHeight: 20, marginTop: 3}}>备注资料</Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: "flex-end", justifyContent: "center"}}>

            </View>

          </ImageBackground>


            <View style={{backgroundColor: "#E3E3E3"}}>



              <View style={{backgroundColor: "#ffffff",height:height-64}}>
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
export default connect(mapStateToProps)(FaZhanDangYuan_Detail)