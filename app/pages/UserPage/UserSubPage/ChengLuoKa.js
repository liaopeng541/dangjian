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
import ChengLuoKaCell from "../../Cell/AppBottom/ChengLuoKaCell"
class ChengLuoKa extends Component{
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

            title={"三卡一制"}
            routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_党员承诺书.html',title:"基本情况及目标要求"}}
            rightImage={require('../../../assets/images/user/more.png')}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{height:53,justifyContent:"center",alignItems:"center"}}>
              <Text style={{color: "#C12121", fontSize: 20,lineHeight:28}}>党员承诺行动卡</Text>
            </View>
            <View style={{flexDirection:"row",flexWrap:"wrap",padding:8,backgroundColor:"#ffffff"}}>
            <ChengLuoKaCell
              {...this.props}
              title={"姓名"}
              image={{uri:"http://app.jzdzsw.cn/dtest/dangyuan/19杨兴.jpg"}}
              desc={"职务"}
              routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_党员承诺书.html',title:"支部承诺书"}}
              routeName={"WebDetail"}
            />
              <ChengLuoKaCell
                {...this.props}
                title={"姓名"}
                image={{uri:"http://app.jzdzsw.cn/dtest/dangyuan/21刘嘉乐.jpg"}}
                desc={"职务"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_党员承诺书.html',title:"支部承诺书"}}
                routeName={"WebDetail"}
              />
              <ChengLuoKaCell
                {...this.props}
                title={"姓名"}
                image={{uri:"http://app.jzdzsw.cn/dtest/dangyuan/24谢斌.jpg"}}
                desc={"职务"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_党员承诺书.html',title:"支部承诺书"}}
                routeName={"WebDetail"}
              />
              <ChengLuoKaCell
                {...this.props}
                title={"姓名"}
                image={{uri:"http://app.jzdzsw.cn/dtest/dangyuan/25向颖佐.jpg"}}
                desc={"职务"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_党员承诺书.html',title:"支部承诺书"}}
                routeName={"WebDetail"}
              />
              <ChengLuoKaCell
                {...this.props}
                title={"姓名"}
                image={{uri:"http://app.jzdzsw.cn/dtest/dangyuan/26张玉婷.JPG"}}
                desc={"职务"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/三制一卡_党员承诺书.html',title:"支部承诺书"}}
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
export default connect(mapStateToProps)(ChengLuoKa)