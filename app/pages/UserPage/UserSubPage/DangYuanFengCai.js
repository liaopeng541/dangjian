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
import DanYuanFengCaiCell from "../../Cell/AppBottom/DanYuanFengCaiCell"
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
      <View style={{flex:1}}>
        <SafeAreaView style={{height:"100%"}}>
          <NavBar
            {...this.props}
            title={"党员风采"}
            rightImage={require('../../../assets/images/user/more.png')}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center",paddingBottom:64}}>
              <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                <DanYuanFengCaiCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic1.jpg"}}
                  title={"不忘初心强体魄 牢记使命展风采"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员风采.html',title:"党员档案"}}
                  routeName={"WebDetail"}
                />
                <DanYuanFengCaiCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic2.jpg"}}
                  title={"党组书记、主任翟辉走访慰问贫困户宋开双"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员风采.html',title:"党员档案"}}
                  routeName={"WebDetail"}
                />
                <DanYuanFengCaiCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic3.jpg"}}
                  title={"关于对姚敦凡等9名同志进行表扬的通报"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员风采.html',title:"党员档案"}}
                  routeName={"WebDetail"}
                />
                <DanYuanFengCaiCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic4.jpg"}}
                  title={"脱贫路上担使命 服务民生显初心"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员风采.html',title:"党员档案"}}
                  routeName={"WebDetail"}
                />
                <DanYuanFengCaiCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic5.jpg"}}
                  title={"不遗余力助教育 精心谋划兴产业"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员风采.html',title:"党员档案"}}
                  routeName={"WebDetail"}
                />
                <DanYuanFengCaiCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic6.jpg"}}
                  title={"不遗余力助教育 精心谋划兴产业"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员风采.html',title:"党员档案"}}
                  routeName={"WebDetail"}
                />
                <DanYuanFengCaiCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic7.jpg"}}
                  title={"不遗余力助教育 精心谋划兴产业"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员风采.html',title:"党员档案"}}
                  routeName={"WebDetail"}
                />
                <DanYuanFengCaiCell
                  {...this.props}
                  image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic8.jpg"}}
                  title={"不遗余力助教育 精心谋划兴产业"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党员风采.html',title:"党员档案"}}
                  routeName={"WebDetail"}
                />






              </View>
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