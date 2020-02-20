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
        return <WengZhang/>;
      case '200':
        return <TuWen/>;
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
        <SafeAreaView>
          <View style={{paddingTop: 20, backgroundColor: Config.ThemeColor}}>
            <View style={{height: 44, alignItems: "center", flexDirection: "row",}}>
              <View style={{flex: 1, justifyContent: "center", paddingLeft: 18}}>

              </View>
              <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#ffffff", fontSize: 16}}>智慧党建</Text>
              </View>
              <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: 18,
                flexDirection: "row"
              }}>
                <Text style={{color: "#ffffff", fontSize: 14}}>我的</Text>
                <Image style={{height: 20, width: 20, marginLeft: 10}}
                       source={require('../../assets/images/nav/user.png')}
                />
              </View>
            </View>
          </View>
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
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ height: "100%", width: "100%",  }}
                             source={require('../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
                      《踏上红色之旅》
                    </Text>
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
export default connect(mapStateToProps)(DangJianYueLanShi)