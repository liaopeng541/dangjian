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
class WengZhang extends Component{
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
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic4.jpg"}}
                title={"州交易中心召开“不忘初心、牢记使命”主题教育整改成果推进会"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />

              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic5.jpg"}}
                title={"回访项目延伸服务，加速提升交易质效--州交易中心深入调查研究务求主题教育见实效"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic6.jpg"}}
                title={"州交易中心党支部召开“担使命、履职责，矢志为民服务”研讨交流会"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic7.jpg"}}
                title={"州交易中心、经开区联合推行“交易项目警官联系制”打造安全高效交易环境"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic8.jpg"}}
                title={"州交易中心再次开展“缅怀革命先烈、牢记使命担当”革命传统教育活动"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic4.jpg"}}
                title={"州交易中心召开“不忘初心、牢记使命”主题教育整改成果推进会"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />

              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic5.jpg"}}
                title={"回访项目延伸服务，加速提升交易质效--州交易中心深入调查研究务求主题教育见实效"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic6.jpg"}}
                title={"州交易中心党支部召开“担使命、履职责，矢志为民服务”研讨交流会"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic7.jpg"}}
                title={"州交易中心、经开区联合推行“交易项目警官联系制”打造安全高效交易环境"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
                routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"资讯详情"}}
                routeName={"WebDetail"}
              />
              <WzCell
                {...this.props}
                image={{uri:"http://app.jzdzsw.cn/dtest/news_pic/news_pic8.jpg"}}
                title={"州交易中心再次开展“缅怀革命先烈、牢记使命担当”革命传统教育活动"}
                titleSize={16}
                desc={"2019-5-3  16:00"}
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
export default connect(mapStateToProps)(WengZhang)