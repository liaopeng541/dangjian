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

import ImageListCell from "../../Cell/ImageButtonCell/ImageListCell"
import NavBar from "../../Cell/NavBar/NavBar"
class SanZhiYiKa extends Component{
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
            leftImage={require('../../../assets/images/nav/left.png')}

            title={"三制一卡"}
            routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_支部承诺书.html',title:"基本情况及目标要求"}}
            routeName={"WebDetail"}
            rightImage={require('../../../assets/images/user/more.png')}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center"}}>
              <View style={{height:170,backgroundColor:"#cccccc",width:"100%"}}>
                <Image style={{ height: "100%", width: "100%",  }}
                       source={require('../../../assets/images/test/shyk.png')}
                />
              </View>
              <ImageListCell
                {...this.props}
                image={require('../../../assets/images/index_menu/menu1.png')}
                leftTitle={"基本情况及目标要求"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_支部承诺书.html',title:"基本情况及目标要求"}}
                routeName={"WebDetail"}

              />
              <ImageListCell
                {...this.props}
                image={require('../../../assets/images/index_menu/menu6.png')}
                leftTitle={"党支部承诺书"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_支部承诺书.html',title:"党支部承诺书"}}
                routeName={"WebDetail"}

              />
              <ImageListCell
                {...this.props}
                image={require('../../../assets/images/index_menu/menu2.png')}
                leftTitle={"党建责任制"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_支部承诺书.html',title:"党建责任制"}}
                routeName={"WebDetail"}

              />
              <ImageListCell
                {...this.props}
                image={require('../../../assets/images/index_menu/menu3.png')}
                leftTitle={"公开承诺制"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_支部承诺书.html',title:"公开承诺制"}}
                routeName={"WebDetail"}

              />
              <ImageListCell
                {...this.props}
                image={require('../../../assets/images/index_menu/menu4.png')}
                leftTitle={"考核评价制"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_支部承诺书.html',title:"考核评价制"}}
                routeName={"WebDetail"}

              />
              <ImageListCell
                {...this.props}
                image={require('../../../assets/images/index_menu/menu5.png')}
                leftTitle={"党员承诺行动卡"}
                routeName={"ChengLuoKa"}

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
export default connect(mapStateToProps)(SanZhiYiKa)