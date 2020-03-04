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
import NavBar from "../../Cell/NavBar/NavBar"
const {height, width} = Dimensions.get('window');

class DanANXiangQing extends Component {
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
            title={"党员档案"}
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
                {/*<Text style={{color: "#ffffff", fontSize: 16}}>党员档案</Text>*/}
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
                       {/*source={require('../../../assets/images/nav/user.png')}*/}

                       {/*resizeMode={"contain"}*/}
                {/*/>*/}
              {/*</View>*/}
            {/*</View>*/}
          {/*</View>*/}
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
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor: "#E3E3E3"}}>


              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    性别
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    女
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    民族
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    土家族
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    出生年月
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    1976年9月25日
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    籍贯
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    湖南省吉首市
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    学历
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    本科
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    籍贯
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    在岗
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    党支部
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    第一党支部
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    党内职务
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    支部书记
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    入党日期
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    2003年8月26日
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    个人简历
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    个人简历内容
                  </Text>
                </View>
              </View>






            </View>


          </ScrollView>
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
export default connect(mapStateToProps)(DanANXiangQing)