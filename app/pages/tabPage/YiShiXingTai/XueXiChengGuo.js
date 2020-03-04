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
import WzCell from "../../Cell/ImageWzCell/WzCell"
const { height, width } = Dimensions.get('window');
class XueXiChengGuo extends Component{
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
            <View style={{backgroundColor:"#E3E3E3"}}>
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
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
export default connect(mapStateToProps)(XueXiChengGuo)