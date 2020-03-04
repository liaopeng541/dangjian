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
import Config from "../../../config/Config"
const { height, width } = Dimensions.get('window');
import NavBar from "../../Cell/NavBar/NavBar"
import ImageDangAnCell from "../../Cell/ImageButtonCell/ImageDangAnCell"
class DangYuanFengCai extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount()
  {

    console.log(this.props)
  }
  render()
  {
    return(
      <View style={{flex:1,backgroundColor:"#ffffff"}}>
        <SafeAreaView style={{height:"100%"}}>
          <NavBar
            {...this.props}
            title={"党员档案"}
            routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"基本情况及目标要求"}}
            rightComponentName={"User"}
            rightImage={require('../../../assets/images/nav/user.png')}
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
          <View style={{height:56,alignItems:"center",justifyContent:"center",paddingLeft:15,paddingRight:15,backgroundColor:"#E7EAEB"}}>
            <View style={{height:36,backgroundColor:"#ffffff",borderRadius:5,width:"100%",alignItems:"center",justifyContent:"center"}}>
              <Text style={{fontSize:16,color:"#455154"}}>
                搜索姓名
              </Text>

            </View>
          </View>
          <View style={{height:40,alignItems:"center",justifyContent:"center",paddingLeft:20,paddingRight:20,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee"}}>
            <View style={{height:36,borderRadius:5,width:"100%",justifyContent:"center"}}>
              <Text style={{fontSize:12,color:"#C12121"}}>
                党委 > 支部
              </Text>

            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center"}}>
              <ImageDangAnCell
                {...this.props}
                title={"刘嘉乐"}
                image={{uri:'http://app.jzdzsw.cn/dtest/dangyuan/21刘嘉乐.jpg'}}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员档案.html',title:"党员档案"}}
                routeName={"WebDetail"}

              />
              <ImageDangAnCell
                {...this.props}
                image={{uri:'http://app.jzdzsw.cn/dtest/dangyuan/17周田.jpg'}}
                title={"周田"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员档案.html',title:"党员档案"}}
                routeName={"WebDetail"}

              />
              <ImageDangAnCell
                {...this.props}
                image={{uri:'http://app.jzdzsw.cn/dtest/dangyuan/24谢斌.jpg'}}
                title={"谢斌"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员档案.html',title:"党员档案"}}
                routeName={"WebDetail"}

              />
              <ImageDangAnCell
                {...this.props}
                title={"陈艾维"}
                image={{uri:'http://app.jzdzsw.cn/dtest/dangyuan/27陈橙.jpg'}}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员档案.html',title:"党员档案"}}
                routeName={"WebDetail"}

              />
            </View>
           







          </ScrollView>
        </SafeAreaView>
      </View>
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
export default connect(mapStateToProps)(DangYuanFengCai)