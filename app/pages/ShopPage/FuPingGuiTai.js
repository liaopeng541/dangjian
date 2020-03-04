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

const {height, width} = Dimensions.get('window');
import NavBar from "../Cell/NavBar/NavBar"

import  ImageListCell from "../Cell/ImageButtonCell/ImageListCell"

import GoodsImage from "../Cell/ImageButtonCell/GoodsImage"
class FuPingGuiTai extends Component {
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
        <SafeAreaView style={{height:"100%",backgroundColor: "#E3E3E3"}}>
          <NavBar
            {...this.props}
            title={"扶贫柜台"}
            rightImage={require('../../assets/images/user/more.png')}
          />
          <View style={{height:56,alignItems:"center",justifyContent:"center",paddingLeft:15,paddingRight:15,backgroundColor:"#f0f2f5"}}>
            <View style={{height:36,backgroundColor:"#ffffff",borderRadius:5,width:"100%",alignItems:"center",justifyContent:"center"}}>
              <Text style={{fontSize:16,color:"#455154"}}>
                商品搜索
              </Text>

            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{padding:8,flexDirection:"row",flexWrap:"wrap"}}>


              <GoodsImage
                {...this.props}
                title={"柑橘"}
                width={"50%"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_1.jpeg"}}
                desc={"¥60"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />
              <GoodsImage
                {...this.props}
                title={"蜂蜜"}
                width={"50%"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_2.jpg"}}
                desc={"¥60"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />
              <GoodsImage
                {...this.props}
                title={"红心弥猴桃"}
                width={"50%"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_3.jpg"}}
                desc={"¥60"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />
              <GoodsImage
                {...this.props}
                title={"农家土鸡蛋"}
                width={"50%"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_4.jpg"}}
                desc={"¥60"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />
              <GoodsImage
                {...this.props}
                title={"柑橘"}
                width={"50%"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_1.jpeg"}}
                desc={"¥60"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />
              <GoodsImage
                {...this.props}
                title={"蜂蜜"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_2.jpg"}}
                desc={"¥60"}
                width={"50%"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />
              <GoodsImage
                {...this.props}
                title={"红心弥猴桃"}
                width={"50%"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_3.jpg"}}
                desc={"¥60"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />
              <GoodsImage
                {...this.props}
                title={"农家土鸡蛋"}
                width={"50%"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_4.jpg"}}
                desc={"¥60"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />

              <GoodsImage
                {...this.props}
                title={"农家土鸡蛋"}
                width={"50%"}
                image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_4.jpg"}}
                desc={"¥60"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                routeName={"WebDetail"}
              />








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
export default connect(mapStateToProps)(FuPingGuiTai)