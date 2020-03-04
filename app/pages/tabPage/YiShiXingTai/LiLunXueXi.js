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
import  BookImage from "../../Cell/ImageButtonCell/BookImage"
import  ImageListCell from "../../Cell/ImageButtonCell/ImageListCell"
const { height, width } = Dimensions.get('window');
class LiLunXueXi extends Component{
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
              <View style={{backgroundColor: "#ffffff", marginBottom: 1}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection: "row", height: 108,paddingTop:16,paddingBottom:16}}>
                    <BookImage
                      {...this.props}
                      image={{uri:"http://app.jzdzsw.cn/dtest/study_pic/s_1.jpeg"}}
                      title={"党章"}
                      routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"理论学习"}}
                      routeName={"DangJianYueLanShi"}
                    />
                    <BookImage
                      {...this.props}
                      image={{uri:"http://app.jzdzsw.cn/dtest/study_pic/s_2.jpeg"}}
                      title={"政策法规"}
                      routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"理论学习"}}
                      routeName={"DangJianYueLanShi"}
                    />
                    <BookImage
                      {...this.props}
                      image={{uri:"http://app.jzdzsw.cn/dtest/study_pic/s_3.jpg"}}
                      title={"政策法规"}
                      routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"理论学习"}}
                      routeName={"DangJianYueLanShi"}
                    />
                    <BookImage
                      {...this.props}
                      image={{uri:"http://app.jzdzsw.cn/dtest/study_pic/s_4.jpg"}}
                      title={"政策法规"}
                      routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"理论学习"}}
                      routeName={"DangJianYueLanShi"}
                    />
                    <BookImage
                      {...this.props}
                      image={{uri:"http://app.jzdzsw.cn/dtest/study_pic/s_5.jpg"}}
                      title={"政策法规"}
                      routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"组织信息"}}
                      routeName={"DangJianYueLanShi"}
                    />


                  </View>


                </ScrollView>


              </View>

              <View>
                <ImageListCell
                  {...this.props}
                  image={require('../../../assets/images/index_menu/menu1.png')}
                  leftTitle={"中心组学习"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"中心组学习 "}}
                  routeName={"WebDetail"}

                />
                <ImageListCell
                  {...this.props}
                  image={require('../../../assets/images/index_menu/menu2.png')}
                  leftTitle={"周五学习"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"周五学习"}}
                  routeName={"WebDetail"}

                />

                <ImageListCell
                  {...this.props}
                  image={require('../../../assets/images/index_menu/menu3.png')}
                  leftTitle={"党支部学习"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"党支部学习"}}
                  routeName={"WebDetail"}

                />
                <ImageListCell
                  {...this.props}
                  image={require('../../../assets/images/index_menu/menu4.png')}
                  leftTitle={"党小组学习"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"党小组学习"}}
                  routeName={"WebDetail"}

                />
                <ImageListCell
                  {...this.props}
                  image={require('../../../assets/images/index_menu/menu5.png')}
                  leftTitle={"中心组学习"}
                  routeParams={{uri:'http://app.jzdzsw.cn/dtest/新闻资讯.html',title:"中心组学习"}}
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
export default connect(mapStateToProps)(LiLunXueXi)