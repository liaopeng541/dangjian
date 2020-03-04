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
class DangYuanDaHui extends Component{
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

            <View style={{backgroundColor:"#E3E3E3",paddingBottom:100}}>
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"9月党支部会员会"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"三季度党支部党员大会"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"10月份党小组会议"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"日常党课教育 2019年10月20日"}
                titleSize={13}
                desc={"2020-01-23"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/会议记录.html',title:"会议记录"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"9月党支部会员会"}
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
export default connect(mapStateToProps)(DangYuanDaHui)