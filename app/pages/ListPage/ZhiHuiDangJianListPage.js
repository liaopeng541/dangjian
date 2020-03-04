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
import Config from "../../config/Config"

import WengZhang from "../tabPage/ZhiHuiDangJian/WengZhang"
import TuWen from "../tabPage/ZhiHuiDangJian/TuWen"
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');
import NavBar from "../Cell/NavBar/NavBar"
class ZhiHuiDangJianListPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      index: 0,
      routes: [
        { key: '100', title: '图文' },
        { key: '200', title: '文章' },
      ]
    };
  }

  componentDidMount() {

    console.log(this.props)
  }

  renderScene({ route, jumpTo }){
    switch (route.key) {
      case '100':
        return <TuWen {...this.props}/>;
      case '200':
        return <WengZhang {...this.props}/>;
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
            title={"智慧党建"}
            rightImage={require('../../assets/images/user/more.png')}
          />
          <View style={{height:56,alignItems:"center",justifyContent:"center",paddingLeft:15,paddingRight:15}}>
            <View style={{height:36,backgroundColor:"#ffffff",borderRadius:5,width:"100%",alignItems:"center",justifyContent:"center"}}>
              <Text style={{fontSize:16,color:"#455154"}}>
                  搜索标题
              </Text>

            </View>
          </View>
            <View style={{paddingBottom: 100, backgroundColor: "#E3E3E3"}}>

              <View style={{backgroundColor: "#ffffff",height:height-90}}>

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
export default connect(mapStateToProps)(ZhiHuiDangJianListPage)