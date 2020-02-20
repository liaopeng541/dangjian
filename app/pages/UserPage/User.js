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

const {height, width} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    console.log(this.props)
  }

  test() {
    this.props.dispatch({type: "add"})
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <View style={{paddingTop: 20, backgroundColor: "#484A54"}}>
            <View style={{height: 44, alignItems: "center", flexDirection: "row",}}>
              <View style={{flex: 1, justifyContent: "center", paddingLeft: 18}}>
                <Image style={{height: 20, width: 20,}}
                       source={require('../../assets/images/nav/left.png')}
                       resizeMode={"contain"}
                />
              </View>
              <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#ffffff", fontSize: 16}}>个人中心</Text>
              </View>
              <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: 18,
                flexDirection: "row"
              }}>
                <Text style={{color: "#ffffff", fontSize: 14}}></Text>
                <Image style={{height: 20, width: 20, marginLeft: 10}}
                       source={require('../../assets/images/user/more.png')}

                       resizeMode={"contain"}
                />
              </View>
            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{paddingBottom: 100, backgroundColor: "#E3E3E3"}}>
              <View style={{
                height: 100,
                backgroundColor: "#484A54",
                paddingLeft: 19,
                paddingRight: 19,
                flexDirection: "row"
              }}>
                <View style={{flex: 1, alignItems: "center", flexDirection: "row"}}>
                  <View style={{
                    height: 64,
                    width: 64,
                    borderRadius: 32,
                    backgroundColor: "#ffffff",
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Image style={{height: 30, width: 30}}
                           source={require('../../assets/images/user/avatar.png')}

                           resizeMode={"contain"}
                    />


                  </View>
                  <View style={{marginLeft: 13}}>
                    <View>
                      <Text style={{fontSize: 17, color: "#ffffff", lineHeight: 24}}>用户昵称</Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 14, color: "#ffffff", lineHeight: 20, marginTop: 3}}>用户ID</Text>
                    </View>
                  </View>
                </View>
                <View style={{alignItems: "flex-end", justifyContent: "center"}}>
                  <Image style={{height: 18, width: 18}}
                         source={require('../../assets/images/other/right.png')}

                         resizeMode={"contain"}
                  />
                </View>

              </View>
              <View>
                <View style={{
                  flexDirection: "row",
                  height: 50,
                  paddingLeft: 25,
                  paddingRight: 25,
                  backgroundColor: "#ffffff",
                  marginBottom: 1
                }}>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Image style={{height: 24, width: 24,}}
                           source={require('../../assets/images/user/Settings.png')}
                    />
                    <Text style={{fontSize: 17, color: "#333333", marginLeft: 5}}>
                      个人档案
                    </Text>

                  </View>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                    <Text style={{fontSize: 16, color: "#999999"}}>

                    </Text>
                    <Image style={{height: 13, width: 13, marginLeft: 5}}
                           source={require('../../assets/images/other/right.png')}
                    />
                  </View>


                </View>
                <View style={{
                  flexDirection: "row",
                  height: 50,
                  paddingLeft: 25,
                  paddingRight: 25,
                  backgroundColor: "#ffffff",
                  marginBottom: 1
                }}>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Image style={{height: 24, width: 24,}}
                           source={require('../../assets/images/user/Settings.png')}
                    />
                    <Text style={{fontSize: 17, color: "#333333", marginLeft: 5}}>
                      我的收藏
                    </Text>

                  </View>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                    <Text style={{fontSize: 16, color: "#999999"}}>

                    </Text>
                    <Image style={{height: 13, width: 13, marginLeft: 5}}
                           source={require('../../assets/images/other/right.png')}
                    />
                  </View>


                </View>

                <View style={{
                  flexDirection: "row",
                  height: 50,
                  paddingLeft: 25,
                  paddingRight: 25,
                  backgroundColor: "#ffffff",
                  marginBottom: 1
                }}>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Image style={{height: 24, width: 24,}}
                           source={require('../../assets/images/user/Settings.png')}
                    />
                    <Text style={{fontSize: 17, color: "#333333", marginLeft: 5}}>
                      党费缴纳
                    </Text>

                  </View>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                    <Text style={{fontSize: 16, color: "#999999"}}>
                      1个月待缴
                    </Text>
                    <Image style={{height: 13, width: 13, marginLeft: 5}}
                           source={require('../../assets/images/other/right.png')}
                    />
                  </View>


                </View>
                <View style={{
                  flexDirection: "row",
                  height: 50,
                  paddingLeft: 25,
                  paddingRight: 25,
                  backgroundColor: "#ffffff",
                  marginBottom: 1
                }}>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Image style={{height: 24, width: 24,}}
                           source={require('../../assets/images/user/Settings.png')}
                    />
                    <Text style={{fontSize: 17, color: "#333333", marginLeft: 5}}>
                      我的会议
                    </Text>

                  </View>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                    <Text style={{fontSize: 16, color: "#999999"}}>
                      1个待参加会议
                    </Text>
                    <Image style={{height: 13, width: 13, marginLeft: 5}}
                           source={require('../../assets/images/other/right.png')}
                    />
                  </View>


                </View>
                <View
                  style={{
                  flexDirection: "row",
                  height: 50,
                  paddingLeft: 25,
                  paddingRight: 25,
                  backgroundColor: "#ffffff",
                  marginBottom: 5
                }}>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Image style={{height: 24, width: 24,}}
                           source={require('../../assets/images/user/Settings.png')}
                    />
                    <Text style={{fontSize: 17, color: "#333333", marginLeft: 5}}>
                      我的学习
                    </Text>

                  </View>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                    <Text style={{fontSize: 16, color: "#999999"}}>
                      3个学习课程
                    </Text>
                    <Image style={{height: 13, width: 13, marginLeft: 5}}
                           source={require('../../assets/images/other/right.png')}
                    />
                  </View>


                </View>


                <View
                  style={{
                    flexDirection: "row",
                    height: 50,
                    paddingLeft: 25,
                    paddingRight: 25,
                    backgroundColor: "#ffffff",
                    marginBottom: 1
                  }}>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Image style={{height: 24, width: 24,}}
                           source={require('../../assets/images/user/Settings.png')}
                    />
                    <Text style={{fontSize: 17, color: "#333333", marginLeft: 5}}>
                      设置
                    </Text>

                  </View>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                    <Text style={{fontSize: 16, color: "#999999"}}>

                    </Text>
                    <Image style={{height: 13, width: 13, marginLeft: 5}}
                           source={require('../../assets/images/other/right.png')}
                    />
                  </View>


                </View>
                <View
                  style={{
                    flexDirection: "row",
                    height: 50,
                    paddingLeft: 25,
                    paddingRight: 25,
                    backgroundColor: "#ffffff",
                    marginBottom: 1
                  }}>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Image style={{height: 24, width: 24,}}
                           source={require('../../assets/images/user/Settings.png')}
                    />
                    <Text style={{fontSize: 17, color: "#333333", marginLeft: 5}}>
                      标题文字
                    </Text>

                  </View>
                  <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                    <Text style={{fontSize: 16, color: "#999999"}}>

                    </Text>
                    <Image style={{height: 13, width: 13, marginLeft: 5}}
                           source={require('../../assets/images/other/right.png')}
                    />
                  </View>


                </View>

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
export default connect(mapStateToProps)(Home)