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
import { WebView } from 'react-native-webview';
const {height, width} = Dimensions.get('window');
import NavBar from "../Cell/NavBar/NavBar"
import  ImageListCell from "../Cell/ImageButtonCell/ImageListCell"

import GoodsImage from "../Cell/ImageButtonCell/GoodsImage"
class HuiYiDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    console.log(this.props)
  }

  test() {
    this.props.dispatch({type: "add"})
  }

  render() {
    return (
      <>
        <SafeAreaView style={{height:"100%",backgroundColor: "#ffffff"}}>
          <NavBar
            {...this.props}
            title={"会议详情"}
            rightImage={require('../../assets/images/user/more.png')}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{height:264,backgroundColor:"#cccccc"}}>
              <ImageBackground style={{ height: "100%", width: "100%", }}
                     source={require('../../assets/images/page_bg/HuiYiDetail.jpg')}

              >
                <View style={{paddingHorizontal:50,paddingVertical:25 }}>
                  <View style={{minHeight:40}}>
                    <Text style={{fontSize:22,color:"#ffffff",lineHeight:25}} numberOfLines={2}>
                      三季度支部党员大会
                    </Text>
                  </View>
                  <View style={{minHeight:30}}>
                    <Text style={{fontSize:17,color:"#ffffff",lineHeight:20}} numberOfLines={1}>
                      时间：2020-02-16  14:00
                    </Text>
                  </View>
                  <View style={{minHeight:30}}>
                    <Text style={{fontSize:17,color:"#ffffff",lineHeight:20}} numberOfLines={1}>
                      地点：局五楼会议室
                    </Text>
                  </View>
                  <View style={{minHeight:30}}>
                    <Text style={{fontSize:17,color:"#ffffff",lineHeight:20}} numberOfLines={1}>
                      主持人：xx
                    </Text>
                  </View>
                  <View style={{minHeight:30}}>
                    <Text style={{fontSize:17,color:"#ffffff",lineHeight:20}} numberOfLines={1}>
                      记录人：xx
                    </Text>
                  </View>
                  <View style={{minHeight:30}}>
                    <Text style={{fontSize:17,color:"#ffffff",lineHeight:20}} numberOfLines={1}>
                      会议状态：未开始
                    </Text>
                  </View>

                  <View style={{minHeight:30}}>
                    <Text style={{fontSize:17,color:"#ffffff",lineHeight:20}} numberOfLines={1}>
                      参加人员：全体党员
                    </Text>
                  </View>


                </View>
              </ImageBackground>
            </View>
            <View style={{minHeight:height-338,backgroundColor:"#000000"}}>
              <WebView style={{width:"100%",height:"100%"}}  source={{ uri:"https://app.jzdzsw.cn/dtest/新闻资讯.html"}} />
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
export default connect(mapStateToProps)(HuiYiDetail)