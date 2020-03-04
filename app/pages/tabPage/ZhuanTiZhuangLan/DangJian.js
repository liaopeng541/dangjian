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


import XiangCeCell from "../../Cell/CardCell/XiangCeCell"

const { height, width } = Dimensions.get('window');
class DangJian extends Component{
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
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center",paddingBottom:64}}>
              <View style={{flexDirection:"row",flexWrap:"wrap"}}>


                <XiangCeCell
                  {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/news_pic/news_pic1.jpg'}}
                  title={"10月党建“基本理论和光荣传统教育”活动相册"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党建相册详情页.html',title:"党建相册"}}
                  routeName={"WebDetail"}
                />
                <XiangCeCell
                  {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/news_pic/news_pic2.jpg'}}
                  title={"10月党建“基本理论和光荣传统教育”活动相册"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党建相册详情页.html',title:"党建相册"}}
                  routeName={"WebDetail"}
                />
                <XiangCeCell
                  {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/news_pic/news_pic3.jpg'}}
                  title={"10月党建“基本理论和光荣传统教育”活动相册"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党建相册详情页.html',title:"党建相册"}}
                  routeName={"WebDetail"}
                />
                <XiangCeCell
                  {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/news_pic/news_pic4.jpg'}}
                  title={"10月党建“基本理论和光荣传统教育”活动相册"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党建相册详情页.html',title:"党建相册"}}
                  routeName={"WebDetail"}
                />
                <XiangCeCell
                  {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/news_pic/news_pic5.jpg'}}
                  title={"10月党建“基本理论和光荣传统教育”活动相册"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党建相册详情页.html',title:"党建相册"}}
                  routeName={"WebDetail"}
                />
                <XiangCeCell
                  {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/news_pic/news_pic6.jpg'}}
                  title={"10月党建“基本理论和光荣传统教育”活动相册"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党建相册详情页.html',title:"党建相册"}}
                  routeName={"WebDetail"}
                />
                <XiangCeCell
                  {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/news_pic/news_pic7.jpg'}}
                  title={"10月党建“基本理论和光荣传统教育”活动相册"}
                  desc={"2019-10-21"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/党建相册详情页.html',title:"党建相册"}}
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
export default connect(mapStateToProps)(DangJian)