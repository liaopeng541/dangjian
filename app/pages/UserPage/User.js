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
class Home extends Component {
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
            title={"个人中心"}
            bgColor={"#484A54"}
            rightImage={require('../../assets/images/user/more.png')}
          />
          {/*<View style={{paddingTop: 20, backgroundColor: "#484A54"}}>*/}
            {/*<View style={{height: 44, alignItems: "center", flexDirection: "row",}}>*/}
              {/*<View style={{flex: 1, justifyContent: "center", paddingLeft: 18}}>*/}
                {/*<Image style={{height: 20, width: 20,}}*/}
                       {/*source={require('../../assets/images/nav/left.png')}*/}
                       {/*resizeMode={"contain"}*/}
                {/*/>*/}
              {/*</View>*/}
              {/*<View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>*/}
                {/*<Text style={{color: "#ffffff", fontSize: 16}}>个人中心</Text>*/}
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
                       {/*source={require('../../assets/images/user/more.png')}*/}

                       {/*resizeMode={"contain"}*/}
                {/*/>*/}
              {/*</View>*/}
            {/*</View>*/}
          {/*</View>*/}
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{paddingBottom: 100, }}>
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
                    justifyContent: "center",
                    borderWidth:3,
                    borderColor:"#666666"
                  }}>
                    {true?<Image style={{height: "100%", width: "100%"}}
                           source={{uri:"http://app.jzdzsw.cn/dtest/dangyuan/12黄霞.jpg"}}

                    />:
                    <Image style={{height: 30, width: 30}}
                           source={require('../../assets/images/user/avatar.png')}


                    />}


                  </View>
                  <View style={{marginLeft: 13}}>
                    <View>
                      <Text style={{fontSize: 17, color: "#ffffff", lineHeight: 24}}>用户昵称</Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 14, color: "#ffffff", lineHeight: 20, marginTop: 3}}>用户ID</Text>
                    </View>
                  </View>
                </View>
                <View style={{alignItems: "flex-end", justifyContent: "center"}}>
                  <Image style={{height: 18, width: 18}}
                         source={require('../../assets/images/other/right.png')}

                         resizeMode={"contain"}
                  />
                </View>

              </View>
              <View>
                <ImageListCell
                  {...this.props}
                  image={require('../../assets/images/user/Settings.png')}
                  leftTitle={"个人档案"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"党支部学习"}}
                  routeName={"DanANXiangQing"}

                />
                <ImageListCell
                  {...this.props}
                  image={require('../../assets/images/user/Settings.png')}
                  leftTitle={"我的收藏"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"党支部学习"}}
                  routeName={"ZhiHuiDangJianListPage"}

                />
                <ImageListCell
                  {...this.props}
                  image={require('../../assets/images/user/Settings.png')}
                  leftTitle={"党费缴纳"}
                  routeName={"DanFeiJiaoNa"}
                  rightTitle={"1个月待缴"}

                />


                <ImageListCell
                  {...this.props}
                  image={require('../../assets/images/user/Settings.png')}
                  leftTitle={"我的会议"}
                  routeName={"WoDeHuiYi"}
                  rightTitle={"1个待参加会议"}

                />

                <ImageListCell
                  {...this.props}
                  image={require('../../assets/images/user/Settings.png')}
                  leftTitle={"我的学习"}
                  routeName={"DangJianYueLanShi"}
                  rightTitle={"3个学习课程"}

                />

                {/*<View style={{height:5,backgroundColor:"#eeeeee"}}>*/}
                {/*</View>*/}
                {/*<ImageListCell*/}
                  {/*{...this.props}*/}
                  {/*image={require('../../assets/images/user/Settings.png')}*/}
                  {/*leftTitle={"设置"}*/}
                  {/*routeName={"DangYuanDanAn"}*/}
                {/*/>*/}

                {/*<ImageListCell*/}
                  {/*{...this.props}*/}
                  {/*image={require('../../assets/images/user/Settings.png')}*/}
                  {/*leftTitle={"标题文字"}*/}
                  {/*routeName={"DangYuanDanAn"}*/}

                {/*/>*/}



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
export default connect(mapStateToProps)(Home)