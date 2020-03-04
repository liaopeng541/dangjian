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
import Config from "../../../config/Config"

import DaiJiaoFei from "../tabPage/DaiJiaoFei"
import YiJiaoFei from "../tabPage/YiJiaoFei"
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');
import NavBar from "../../Cell/NavBar/NavBar"
class DangFeiJiaoNa_Pay extends Component {
  constructor(props) {
    super(props);
    this.state ={
      index: 0,
      routes: [
        { key: '100', title: '待交费' },
        { key: '200', title: '己交费' },
      ]
    };
  }

  componentDidMount() {

    console.log(this.props)
  }

  renderScene({ route, jumpTo }){
    switch (route.key) {
      case '100':
        return <DaiJiaoFei {...this.props}/>;
      case '200':
        return <YiJiaoFei {...this.props}/>;
    }
  }

  renderTabBar(props){
    return(<TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Config.ThemeColor}}
      style={{ backgroundColor: '#ffffff' }}
      renderLabel={({ route, focused, color }) => (
        focused?<Text style={{ color:Config.ThemeColor}}>
          {route.title}
        </Text>:<Text style={{ color:"#333333"}}>
          {route.title}
        </Text>
      )}
    />)
  }
  setIndex(index)
  {
    this.setState({
      index:index
    })
  }
  render() {
    const {index,routes}=this.state
    return (
      <>
        <SafeAreaView style={{height:"100%"}} style={{minHeight:"100%",backgroundColor:"#F5F5F5"}}>

          <NavBar
            {...this.props}
            title={"党费缴纳"}
            rightComponentName={"User"}
            rightImage={require('../../../assets/images/user/more.png')}
          />
          {/*<View style={{paddingTop: 20, backgroundColor: Config.ThemeColor}}>*/}
            {/*<View style={{height: 44, alignItems: "center", flexDirection: "row",}}>*/}
              {/*<View style={{flex: 1, justifyContent: "center", paddingLeft: 18}}>*/}

                {/*<Image style={{height: 20, width: 20,}}*/}
                       {/*source={require('../../../assets/images/user/more.png')}*/}
                       {/*resizeMode={"contain"}*/}
                {/*/>*/}
              {/*</View>*/}
              {/*<View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>*/}
                {/*<Text style={{color: "#ffffff", fontSize: 16}}>党费缴纳</Text>*/}
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
                       {/*source={require('../../../assets/images/user/more.png')}*/}

                       {/*resizeMode={"contain"}*/}
                {/*/>*/}
              {/*</View>*/}
            {/*</View>*/}
          {/*</View>*/}
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View >
              <View style={{height:88,backgroundColor:"#ffffff",justifyContent:"center",paddingHorizontal:26}}>
                <Text style={{color: "#333333", fontSize: 17,lineHeight:24}}>党员姓名</Text>
                <Text style={{color: "#333333", fontSize: 12,lineHeight:17}}>备注资料</Text>
              </View>
              <View style={{marginTop:9}}>
              <View style={{flexDirection:"row",height:40,borderBottomWidth:1,borderBottomColor:"#eeeeee",alignItems:"center",justifyContent:"space-between",paddingHorizontal:25,backgroundColor:"#ffffff"}}>
                <Text style={{color: "#999999", fontSize: 14,lineHeight:20}}>交费类型</Text>
                <Text style={{color: "#333333", fontSize: 14,lineHeight:20}}>党费</Text>

              </View>

                <View style={{flexDirection:"row",height:40,borderBottomWidth:1,borderBottomColor:"#eeeeee",alignItems:"center",justifyContent:"space-between",paddingHorizontal:25,backgroundColor:"#ffffff"}}>
                  <Text style={{color: "#999999", fontSize: 14,lineHeight:20}}>交费项目</Text>
                  <Text style={{color: "#333333", fontSize: 14,lineHeight:20}}>12月党费</Text>

                </View>

                <View style={{flexDirection:"row",height:40,borderBottomWidth:1,borderBottomColor:"#eeeeee",alignItems:"center",justifyContent:"space-between",paddingHorizontal:25,backgroundColor:"#F5F5F5"}}>
                  <Text style={{color: "#E02020", fontSize: 14,lineHeight:20}}>12月党费</Text>
                  <Text style={{color: "#333333", fontSize: 14,lineHeight:20}}>¥50.00</Text>

                </View>

                <View style={{flexDirection:"row",height:40,borderBottomWidth:1,borderBottomColor:"#eeeeee",alignItems:"center",justifyContent:"space-between",paddingHorizontal:25,backgroundColor:"#F5F5F5"}}>
                  <Text style={{color: "#999999", fontSize: 14,lineHeight:20}}>特殊党费</Text>
                  <Text style={{color: "#333333", fontSize: 14,lineHeight:20}}>¥100.00</Text>

                </View>

                <View style={{flexDirection:"row",height:40,borderBottomWidth:1,borderBottomColor:"#eeeeee",alignItems:"center",justifyContent:"space-between",paddingHorizontal:25,backgroundColor:"#ffffff"}}>
                  <Text style={{color: "#999999", fontSize: 14,lineHeight:20}}>交费截止时间</Text>
                  <Text style={{color: "#333333", fontSize: 14,lineHeight:20}}>2019年12月20日 12:00</Text>

                </View>

                <View style={{borderBottomWidth:1,borderBottomColor:"#eeeeee",justifyContent:"center",paddingHorizontal:25,backgroundColor:"#ffffff",paddingVertical:10}}>
                  <Text style={{color: "#999999", fontSize: 14,lineHeight:20}}>交费说明</Text>
                  <Text style={{color: "#333333", fontSize: 14,lineHeight:20,marginTop:10}}>请于2019年12月30日 12:00前完成交费请于2019年12月30日 12:00前完成交费请于2019年12月30日 12:00前完成交费请于2019年12月30日 12:00前完成交费请于2019年12月30日 12:00前完成交费</Text>

                </View>


                <View style={{flexDirection:"row",height:40,borderBottomWidth:1,borderBottomColor:"#eeeeee",alignItems:"center",justifyContent:"space-between",paddingHorizontal:25,backgroundColor:"#ffffff"}}>
                  <Text style={{color: "#333333", fontSize: 16,lineHeight:22}}>交费金额（元）</Text>
                  <Text style={{color: "#FF0000", fontSize: 16,lineHeight:22}}>¥150.00</Text>

                </View>

                <View style={{flexDirection:"row",height:40,borderBottomWidth:1,borderBottomColor:"#eeeeee",alignItems:"center",justifyContent:"space-between",paddingHorizontal:25,backgroundColor:"#ffffff"}}>
                  <Text style={{color: "#333333", fontSize: 16,lineHeight:22}}>交费状态</Text>
                  <Text style={{color: "#FF0000", fontSize: 16,lineHeight:22}}>待交费</Text>

                </View>




              </View>












            </View>


          </ScrollView>
          <View style={{bottom:22,left:0,right:0,height:64,width:"100%",zIndex:100,alignItems:"center",justifyContent:"center"}}>
            <View style={{width:343,height:44,backgroundColor:"#cc0808",alignItems:"center",justifyContent:"center"}}>
              <Text style={{fontSize:18,color:"#ffffff"}}>
                微信支付
              </Text>

            </View>

          </View>
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
export default connect(mapStateToProps)(DangFeiJiaoNa_Pay)