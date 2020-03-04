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
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import {connect} from "react-redux"
import Config from "../config/Config"
const { height, width } = Dimensions.get('window');
import IndexMenu from "./Cell/ImageButtonCell/IndexMenu"
import CatTitleCell from "./Cell/CatTitleCell/CatTitleCell"
import ImageWzCell from "./Cell/ImageWzCell/ImageWzCell"
import base from './libs/base'
import NavBar from "./Cell/NavBar/NavBar"
class Home extends Component{
  constructor(props) {
    super(props);
    base(this)
    this.state = {

    };
  }
  componentDidMount()
  {

    console.log(this.props)
  }
  JumpTo(){
      this.props.navigation.navigate("User")
  }
  render()
  {
    return(
      <>
        <SafeAreaView style={{height:"100%"}}>
          <NavBar
            {...this.props}
            leftImage={require('../assets/images/nav/message.png')}
            title={"阳光党建"}
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
              {/*<Text style={{color:"#ffffff",fontSize:16}}>阳光党建</Text>*/}
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
            <View style={{paddingBottom:0,backgroundColor:"#E3E3E3"}}>
            <View style={{height:170,backgroundColor:"#cccccc"}}>
              <Image style={{ height: "100%", width: "100%",  }}
                     source={require('../assets/images/test/lunbo/lunbo1.png')}
              />
            </View>
            <View style={{position:"relative"}}>
              <View style={{height:36,width:"90%",left:"5%",top:-18,position:"absolute",zIndex:1,}}>
                <ImageBackground
                  source={require('../assets/images/index_message/message_bk.png')}
                  style={{width:"100%",height:"100%",borderRadius:18,flexDirection:"row",}}
                  resizeMode={"contain"}
                >
                  <View style={{flex:1,justifyContent:"center",marginLeft:13,overflow:"hidden",paddingRight:13}}>
                    <Text numberOfLines={1} style={{fontSize:14,color:"#ffffff"}}>
                      通知公告：各有关部门: 定于2019年9月12日
                    </Text>

                  </View>
                  <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate("ZhiHuiDangJianListPage")}}>
                  <View style={{width:36,height:"100%",alignItems:"center",justifyContent:"center"}}>
                    <Image style={{ height: 20, width: 20,  }}
                           source={require('../assets/images/index_message/more.png')}
                    />
                  </View>
                  </TouchableWithoutFeedback>


                </ImageBackground>

              </View>
            <View style={{paddingTop:30,paddingLeft:10,paddingRight:10,paddingBottom:10,backgroundColor:"#ffffff"}}>
              <View style={{flexDirection:"row"}}>
                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu1.png')}
                  title={"组织信息"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/%E7%BB%84%E7%BB%87%E4%BF%A1%E6%81%AF.html',title:"组织信息"}}
                  routeName={"WebDetail"}
                />
                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu2.png')}
                  title={"党员档案"}
                  routeName={"DangYuanDanAn"}
                />


                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu3.png')}
                  title={"三会一课"}
                  routeName={"SanHuiYiKe"}
                />


                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu4.png')}
                  title={"三制一卡"}
                  routeName={"SanZhiYiKa"}
                />
                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu5.png')}
                  title={"组织生活"}
                  routeName={"ZuZhiShengHuo"}
                />





              </View>
              <View style={{flexDirection:"row",marginTop:5}}>
                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu6.png')}
                  title={"发展党员"}
                  routeName={"FaZhanDangYuan"}
                />

                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu7.png')}
                  title={"党费缴纳"}
                  routeName={"DanFeiJiaoNa"}
                />

                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu8.png')}
                  title={"党务公开"}
                  routeName={"ZhiHuiDangJianListPage"}
                />

                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu9.png')}
                  title={"主题活动"}
                  routeName={"ZhuTiHuoDong"}
                />
                <IndexMenu
                  {...this.props}
                  image={require('../assets/images/index_menu/menu10.png')}
                  title={"党员风采"}
                  routeName={"DangYuanFengCai"}
                />



              </View>
            </View>
            </View>

            <View style={{marginTop:5}}>
              <CatTitleCell
                {...this.props}
                leftTitle={"党建动态"}
                rightTitle={"查看全部"}
                routeName={"ZhiHuiDangJianListPage"}
              />

              {/*首页列表*/}
              <View>

                <ImageWzCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic4.jpg"}}
                  title={"州交易中心召开“不忘初心、牢记使命”主题教育整改成果推进会"}
                  titleSize={13}
                  desc={"2019-5-3  13:00"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                  routeName={"WebDetail"}
                />

                <ImageWzCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic5.jpg"}}
                  title={"回访项目延伸服务，加速提升交易质效--州交易中心深入调查研究务求主题教育见实效"}
                  titleSize={13}
                  desc={"2019-5-3  13:00"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                  routeName={"WebDetail"}
                />
                <ImageWzCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic6.jpg"}}
                  title={"州交易中心党支部召开“担使命、履职责，矢志为民服务”研讨交流会"}
                  titleSize={13}
                  desc={"2019-5-3  13:00"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                  routeName={"WebDetail"}
                />
                <ImageWzCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic7.jpg"}}
                  title={"州交易中心、经开区联合推行“交易项目警官联系制”打造安全高效交易环境"}
                  titleSize={13}
                  desc={"2019-5-3  13:00"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
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
export default connect(mapStateToProps)(Home)