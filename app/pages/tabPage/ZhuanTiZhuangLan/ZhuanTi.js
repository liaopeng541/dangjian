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
import ZhuanTiCell from "../../Cell/CardCell/ZhuanTiCell"
class ZhuanTi extends Component{
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

        <SafeAreaView style={{height:"100%"}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center",paddingBottom:100}}>
              <ZhuanTiCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/zt_pic/zt_1.jpeg"}}
                title={"两学一做"}
                desc={"学党章党规、学系列讲话，做合格党员"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"专题详情"}}
                routeName={"ZhiHuiDangJianListPage"}
              />

              <ZhuanTiCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/zt_pic/zt_2.jpg"}}
                title={"齐心协力战疫情"}
                desc={"齐心协力 共抗疫情"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"专题详情"}}
                routeName={"ZhiHuiDangJianListPage"}
              />

              <ZhuanTiCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"不忘初心 牢记使命"}
                desc={"中国共产党人的初心和使命，就是为中国人民谋幸福，为中华民族谋复兴"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"专题详情"}}
                routeName={"ZhiHuiDangJianListPage"}
              />




            </View>
           







          </ScrollView>
        </SafeAreaView>

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
export default connect(mapStateToProps)(ZhuanTi)