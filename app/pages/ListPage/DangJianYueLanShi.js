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

import WengZhang from "../tabPage/ZhiHuiDangJian/WengZhang"
import TuWen from "../tabPage/ZhiHuiDangJian/TuWen"
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');
import NavBar from "../Cell/NavBar/NavBar"
import YueLanShiCell  from "../Cell/AppBottom/YueLanShiCell"
class DangJianYueLanShi extends Component {
  constructor(props) {
    super(props);
    this.state ={
      index: 0,
      routes: [
        { key: '100', title: '栏目文章' },
        { key: '200', title: '栏目图文' },
      ]
    };
  }

  componentDidMount() {

    console.log(this.props)
  }

  renderScene({ route, jumpTo }){
    switch (route.key) {
      case '100':
        return <WengZhang {...this.props}/>;
      case '200':
        return <TuWen {...this.props}/>;
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
        <SafeAreaView style={{height:"100%"}}>
          <NavBar
            {...this.props}
            title={"智慧党建"}
            rightImage={require('../../assets/images/user/more.png')}
          />
          <View style={{height:40,alignItems:"center",justifyContent:"center",paddingLeft:20,paddingRight:20}}>
            <View style={{height:36,borderRadius:5,width:"100%",justifyContent:"center"}}>
              <Text style={{fontSize:12,color:"#999999"}}>
                意识形态 > 理论学习 > 党建阅览室
              </Text>

            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{paddingBottom: 100, backgroundColor: "#E3E3E3"}}>

              <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_1.jpeg'}}
                  title={"《踏上红色之旅》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                  />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_2.jpeg'}}
                  title={"《《党史第一课：中国共产党成立全纪录》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_3.jpg'}}
                  title={"《新编机关公文实务全书》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_4.jpg'}}
                  title={"《马克思的事业：从布鲁塞尔到北京》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_1.jpeg'}}
                  title={"《踏上红色之旅》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_2.jpeg'}}
                  title={"《《党史第一课：中国共产党成立全纪录》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_3.jpg'}}
                  title={"《新编机关公文实务全书》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_4.jpg'}}
                  title={"《马克思的事业：从布鲁塞尔到北京》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_1.jpeg'}}
                  title={"《踏上红色之旅》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_2.jpeg'}}
                  title={"《《党史第一课：中国共产党成立全纪录》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_3.jpg'}}
                  title={"《新编机关公文实务全书》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_4.jpg'}}
                  title={"《马克思的事业：从布鲁塞尔到北京》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_1.jpeg'}}
                  title={"《踏上红色之旅》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_2.jpeg'}}
                  title={"《《党史第一课：中国共产党成立全纪录》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_3.jpg'}}
                  title={"《新编机关公文实务全书》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />
                <YueLanShiCell {...this.props}
                  image={{uri:'http://app.jzdzsw.cn/dtest/study_pic/s_4.jpg'}}
                  title={"《马克思的事业：从布鲁塞尔到北京》"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/理论学习详情页.html',title:"我的学习"}}
                  routeName={"WebDetail"}
                />



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
export default connect(mapStateToProps)(DangJianYueLanShi)