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
        return <JiBengXingXi/>;
      case '200':
        return <FaZhanLiuCheng/>;
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
                <Text style={{color: "#ffffff", fontSize: 16}}>智慧党建</Text>
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
          <View
            style={{
              height: 100,
              backgroundColor: "#484A54",
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
                justifyContent: "center"
              }}>
                <Image style={{height: 30, width: 30}}
                       source={require('../../../assets/images/user/avatar.png')}

                       resizeMode={"contain"}
                />


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

          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
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


          </ScrollView>
          <View style={{bottom:22,left:0,right:0,height:64,width:"100%",zIndex:100,alignItems:"center",justifyContent:"center"}}>
            <View style={{width:343,height:44,backgroundColor:"#cc0808",alignItems:"center",justifyContent:"center"}}>
              <Text style={{fontSize:18,color:"#ffffff"}}>
                我要交费
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
export default connect(mapStateToProps)(FaZhanDangYuan_Detail)