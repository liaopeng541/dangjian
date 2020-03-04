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
class GoodsDetail extends Component {
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
            title={"商品详情"}
            rightImage={require('../../assets/images/user/more.png')}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{height:170,backgroundColor:"#cccccc"}}>
              <Image style={{ height: "100%", width: "100%",  }}
                     source={require('../../assets/images/test/goods/goodsimage.png')}
              />
            </View>
            <View style={{height:130,paddingHorizontal:25,paddingVertical:25}}>
              <View>
                <Text style={{fontSize:18,color:"#333333",lineHeight:30}} numberOfLines={2}>
                  红心猕猴桃10kg
                </Text>
              </View>
              <View style={{marginTop:10,height:33}}>
                <Text style={{fontSize:24,color:"#FF3B30",lineHeight:33}} numberOfLines={1}>
                  ¥378
                </Text>
              </View>
              <View style={{marginTop:10,height:17}}>
                <Text style={{fontSize:12,color:"#999999",lineHeight:17}} numberOfLines={1}>
                  规格：500g/件
                </Text>
              </View>


            </View>
            <View style={{minHeight:height-244,backgroundColor:"#000000"}}>
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
export default connect(mapStateToProps)(GoodsDetail)