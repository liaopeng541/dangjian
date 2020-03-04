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
class QingFengJiaoYi extends Component{
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
            <View style={{backgroundColor:"#E3E3E3",paddingBottom:64}}>
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年度州直新任科级干部廉政教育培训班圆满结束"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"坚持和完善党和国家监督体系 为全面建成小康社会提供坚强保障"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年以习近平同志为核心的党中央贯彻执行中央八项规定、推进作风建设纪实"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"州交易中心开展“不忘初心、牢记使命” 主题教育第一项和第四项专项整治问题 查找“回头看”"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年度州直新任科级干部廉政教育培训班圆满结束"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"坚持和完善党和国家监督体系 为全面建成小康社会提供坚强保障"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年以习近平同志为核心的党中央贯彻执行中央八项规定、推进作风建设纪实"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"州交易中心开展“不忘初心、牢记使命” 主题教育第一项和第四项专项整治问题 查找“回头看”"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年度州直新任科级干部廉政教育培训班圆满结束"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"坚持和完善党和国家监督体系 为全面建成小康社会提供坚强保障"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年以习近平同志为核心的党中央贯彻执行中央八项规定、推进作风建设纪实"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"州交易中心开展“不忘初心、牢记使命” 主题教育第一项和第四项专项整治问题 查找“回头看”"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年度州直新任科级干部廉政教育培训班圆满结束"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"坚持和完善党和国家监督体系 为全面建成小康社会提供坚强保障"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年以习近平同志为核心的党中央贯彻执行中央八项规定、推进作风建设纪实"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"州交易中心开展“不忘初心、牢记使命” 主题教育第一项和第四项专项整治问题 查找“回头看”"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年度州直新任科级干部廉政教育培训班圆满结束"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"坚持和完善党和国家监督体系 为全面建成小康社会提供坚强保障"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年以习近平同志为核心的党中央贯彻执行中央八项规定、推进作风建设纪实"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"州交易中心开展“不忘初心、牢记使命” 主题教育第一项和第四项专项整治问题 查找“回头看”"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年度州直新任科级干部廉政教育培训班圆满结束"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"坚持和完善党和国家监督体系 为全面建成小康社会提供坚强保障"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"2019年以习近平同志为核心的党中央贯彻执行中央八项规定、推进作风建设纪实"}
                titleSize={13}
                desc={"2019-5-3  13:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={require('../../../assets/images/test/lunbo/lunbo1.png')}
                title={"州交易中心开展“不忘初心、牢记使命” 主题教育第一项和第四项专项整治问题 查找“回头看”"}
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
export default connect(mapStateToProps)(QingFengJiaoYi)