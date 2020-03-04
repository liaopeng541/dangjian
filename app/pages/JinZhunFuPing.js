import React,{Component} from 'react';
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
import Config from "../config/Config"
const { height, width } = Dimensions.get('window');
import CatTitleCell from "./Cell/CatTitleCell/CatTitleCell"
import ImageWzCell from "./Cell/ImageWzCell/ImageWzCell"
import GoodsImage from "./Cell/ImageButtonCell/GoodsImage"
import NavBar from "./Cell/NavBar/NavBar"
class JinZhunFuPing extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount()
  {

    console.log(this.props)
  }
  test(){
    this.props.dispatch({type:"add"})
  }
  render()
  {
    return(
      <>
        <SafeAreaView style={{height:"100%"}}>
          <NavBar
            {...this.props}
            leftImage={false}
            title={"精准扶贫"}
            leftComponentName={"ZhiHuiDangJianListPage"}
            rightComponentName={"User"}
            rightTitle={"我的"}
            rightImage={require('../assets/images/nav/user.png')}
          />
          {/*<View style={{paddingTop:20,backgroundColor:Config.ThemeColor}}>*/}
            {/*<View style={{height:44,alignItems:"center",flexDirection:"row",}}>*/}
            {/*<View style={{flex:1,justifyContent:"center",paddingLeft:18}}>*/}
              {/*<Image style={{ height: 20, width: 20,}}*/}
                     {/*source={require('../assets/images/nav/message.png')}*/}
              {/*/>*/}
            {/*</View>*/}
            {/*<View style={{flex:2,alignItems:"center",justifyContent:"center"}}>*/}
              {/*<Text style={{color:"#ffffff",fontSize:16}}>精准扶贫</Text>*/}
            {/*</View>*/}
            {/*<View style={{flex:1,justifyContent:"flex-end",alignItems:"center",paddingRight:18,flexDirection:"row"}}>*/}
              {/*<Text style={{color:"#ffffff",fontSize:14}}>我的</Text>*/}
              {/*<Image style={{ height: 20, width: 20,marginLeft:10}}*/}
                     {/*source={require('../assets/images/nav/user.png')}*/}
              {/*/>*/}
            {/*</View>*/}
            {/*</View>*/}
          {/*</View>*/}
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3"}}>
            <View style={{height:170,backgroundColor:"#cccccc"}}>
              <Image style={{ height: "100%", width: "100%",  }}
                     source={require('../assets/images/test/jzfp.png')}
              />
            </View>


            <View>
              <CatTitleCell
                {...this.props}
                leftTitle={"扶贫动态"}
                rightTitle={"查看全部"}
                routeName={"ZhiHuiDangJianListPage"}
              />

              <View>
                <ImageWzCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic8.jpg"}}
                  title={"党支部开展“感党恩、暖我心” 重阳慰问贫困村主题党日活动"}

                  desc={"2019-5-3  13:00"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                  routeName={"WebDetail"}
                />
                <ImageWzCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic9.jpg"}}
                  title={"党员自购柑橘滞销大户王承众家的柑橘"}

                  desc={"2019-5-3  13:00"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                  routeName={"WebDetail"}
                />


              </View>

              <CatTitleCell
                {...this.props}
                leftTitle={"扶贫柜台"}
                rightTitle={"查看全部"}
                routeName={"FuPingGuiTai"}
              />
              <View style={{backgroundColor:"#ffffff",paddingTop:18,paddingBottom:18,paddingLeft:16,paddingRight:16,flexDirection:"row",flexWrap:"wrap"}}>
                <GoodsImage
                  {...this.props}
                  title={"柑橘"}
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
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                  routeName={"WebDetail"}
                />
                <GoodsImage
                  {...this.props}
                  title={"红心弥猴桃"}
                  image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_3.jpg"}}
                  desc={"¥60"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                  routeName={"WebDetail"}
                />
                <GoodsImage
                  {...this.props}
                  title={"农家土鸡蛋"}
                  image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_4.jpg"}}
                  desc={"¥60"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                  routeName={"WebDetail"}
                />
                <GoodsImage
                  {...this.props}
                  title={"柑橘"}
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
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                  routeName={"WebDetail"}
                />
                <GoodsImage
                  {...this.props}
                  title={"红心弥猴桃"}
                  image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_3.jpg"}}
                  desc={"¥60"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                  routeName={"WebDetail"}
                />
                <GoodsImage
                  {...this.props}
                  title={"农家土鸡蛋"}
                  image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_4.jpg"}}
                  desc={"¥60"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                  routeName={"WebDetail"}
                />

                <GoodsImage
                  {...this.props}
                  title={"农家土鸡蛋"}
                  image={{uri:"http://app.jzdzsw.cn/dtest/sp_pic/sp_4.jpg"}}
                  desc={"¥60"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/扶贫柜台商品.html',title:"商品详情"}}
                  routeName={"WebDetail"}
                />




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
  scrollView: {

  },
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
const mapStateToProps=(state)=>{
  return {
    user:state.user
  }
}
export default connect(mapStateToProps)(JinZhunFuPing)