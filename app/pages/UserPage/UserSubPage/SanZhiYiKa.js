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
        <SafeAreaView>
          <View style={{paddingTop: 20, backgroundColor: Config.ThemeColor}}>
            <View style={{height: 44, alignItems: "center", flexDirection: "row",}}>
              <View style={{flex: 1, justifyContent: "center", paddingLeft: 18}}>

                <Image style={{height: 20, width: 20,}}
                       source={require('../../../assets/images/nav/left.png')}
                       resizeMode={"contain"}
                />
              </View>
              <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#ffffff", fontSize: 16}}>三制一卡</Text>
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
                       source={require('../../../assets/images/user/more.png')}

                       resizeMode={"contain"}
                />
              </View>
            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center"}}>
              <View style={{height:170,backgroundColor:"#cccccc",width:"100%"}}>
                <Image style={{ height: "100%", width: "100%",  }}
                       source={require('../../../assets/images/test/shyk.png')}
                />
              </View>
              <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee"}}>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                  <Image style={{ height: 24, width: 24, }}
                         source={require('../../../assets/images/index_menu/menu1.png')}
                  />
                  <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                    基本情况及目标要求
                  </Text>

                </View>
                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                  <Text style={{fontSize:16,color:"#999999"}}>

                  </Text>
                  <Image style={{ height: 13, width: 13, marginLeft:5}}
                         source={require('../../../assets/images/other/right.png')}
                  />
                </View>


              </View>
              <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee"}}>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                  <Image style={{ height: 24, width: 24, }}
                         source={require('../../../assets/images/index_menu/menu1.png')}
                  />
                  <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                    党支部承诺书
                  </Text>

                </View>
                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                  <Text style={{fontSize:16,color:"#999999"}}>

                  </Text>
                  <Image style={{ height: 13, width: 13, marginLeft:5}}
                         source={require('../../../assets/images/other/right.png')}
                  />
                </View>


              </View>
              <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee"}}>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                  <Image style={{ height: 24, width: 24, }}
                         source={require('../../../assets/images/index_menu/menu1.png')}
                  />
                  <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                    党建责任制
                  </Text>

                </View>
                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                  <Text style={{fontSize:16,color:"#999999"}}>

                  </Text>
                  <Image style={{ height: 13, width: 13, marginLeft:5}}
                         source={require('../../../assets/images/other/right.png')}
                  />
                </View>


              </View>
              <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee"}}>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                  <Image style={{ height: 24, width: 24, }}
                         source={require('../../../assets/images/index_menu/menu1.png')}
                  />
                  <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                    公开承诺制
                  </Text>

                </View>
                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                  <Text style={{fontSize:16,color:"#999999"}}>

                  </Text>
                  <Image style={{ height: 13, width: 13, marginLeft:5}}
                         source={require('../../../assets/images/other/right.png')}
                  />
                </View>


              </View>
              <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee"}}>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                  <Image style={{ height: 24, width: 24, }}
                         source={require('../../../assets/images/index_menu/menu1.png')}
                  />
                  <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                    考核评价制
                  </Text>

                </View>
                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                  <Text style={{fontSize:16,color:"#999999"}}>

                  </Text>
                  <Image style={{ height: 13, width: 13, marginLeft:5}}
                         source={require('../../../assets/images/other/right.png')}
                  />
                </View>


              </View>
              <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee"}}>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                  <Image style={{ height: 24, width: 24, }}
                         source={require('../../../assets/images/index_menu/menu1.png')}
                  />
                  <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                    党员承诺行动卡
                  </Text>

                </View>
                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                  <Text style={{fontSize:16,color:"#999999"}}>

                  </Text>
                  <Image style={{ height: 13, width: 13, marginLeft:5}}
                         source={require('../../../assets/images/other/right.png')}
                  />
                </View>


              </View>

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