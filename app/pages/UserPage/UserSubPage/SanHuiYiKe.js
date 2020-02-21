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

import DangYuanDaHui from "../tabPage/DangYuanDaHui"
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');

class SanHuiYiKe extends Component {
  constructor(props) {
    super(props);
    this.state ={
      index: 0,
      routes: [
        { key: '100', title: '党员大会' },
        { key: '200', title: '支委会' },
        { key: '300', title: '党小组会' },
        { key: '400', title: '党课' },
      ]
    };
  }

  componentDidMount() {

    console.log(this.props)
  }

  renderScene({ route, jumpTo }){
    switch (route.key) {
      case '100':
        return <DangYuanDaHui/>;
      case '200':
        return <DangYuanDaHui/>;
      case '300':
        return <DangYuanDaHui/>;
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
        <SafeAreaView>
          <View style={{paddingTop: 20, backgroundColor: Config.ThemeColor}}>
            <View style={{height: 44, alignItems: "center", flexDirection: "row",}}>
              <View style={{flex: 1, justifyContent: "center", paddingLeft: 18}}>

                <Image style={{height: 20, width: 20,}}
                       source={require('../../../assets/images/nav/left.png')}
                       resizeMode={"contain"}
                />
              </View>
              <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#ffffff", fontSize: 16}}>三制一卡</Text>
              </View>
              <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: 18,
                flexDirection: "row"
              }}>
                <Text style={{color: "#ffffff", fontSize: 14}}></Text>
                <Image style={{height: 20, width: 20, marginLeft: 10}}
                       source={require('../../../assets/images/user/more.png')}

                       resizeMode={"contain"}
                />
              </View>
            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor: "#E3E3E3"}}>
              <View style={{height:170,backgroundColor:"#cccccc",width:"100%"}}>
                <Image style={{ height: "100%", width: "100%",  }}
                       source={require('../../../assets/images/test/sanhuiyike.png')}
                />
              </View>


              <View style={{backgroundColor: "#ffffff",height:height-234}}>
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


          </ScrollView>
          <View style={{bottom:110,left:0,right:0,backgroundColor:"#ffffff",height:64,width:"100%",zIndex:100,flexDirection:"row",borderTopColor:"#eeeeee",borderTopWidth:1}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1}}>
              <Image style={{height: 20, width: 20,}}
                     source={require('../../../assets/images/other/message.png')}
                     resizeMode={"contain"}
              />
              <Text style={{fontSize:14,color:"#666666",marginLeft:7}}>
                我的会议
              </Text>
            </View>

            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1}}>
              <Image style={{height: 20, width: 20,}}
                     source={require('../../../assets/images/other/user.png')}
                     resizeMode={"contain"}
              />
              <Text style={{fontSize:14,color:"#666666",marginLeft:7}}>
                我的会议
              </Text>
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
export default connect(mapStateToProps)(SanHuiYiKe)