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
import WzCell from "../../Cell/ImageWzCell/WzCell"
class MingZhuShengHuoHui  extends Component{
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
      <>
        <SafeAreaView style={{height:"100%"}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",}}>
            <WzCell
              {...this.props}
              image={require('../../../assets/images/test/lunbo/lunbo1.png')}
              title={"2019年民主生活会，主题：围绕党的中心工作和现阶段的工作任务谈思想"}
              titleSize={13}
              desc={"2020-01-23"}
              routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
              routeName={"WebDetail"}
            />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2018年民主生活会，主题：围绕党的中心工作和现阶段的工作任务谈思想"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2017年民主生活会，主题：围绕党的中心工作和现阶段的工作任务谈思想"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2016年民主生活会"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2017年民主生活会，主题：围绕党的中心工作和现阶段的工作任务谈思想"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2016年民主生活会"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
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
export default connect(mapStateToProps)(MingZhuShengHuoHui)