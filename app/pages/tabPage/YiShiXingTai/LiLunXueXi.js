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
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3"}}>
              <View style={{backgroundColor: "#ffffff", marginBottom: 1}}>
                <ScrollView>
                  <View style={{flexDirection: "row", height: 108,paddingTop:16,paddingBottom:16}}>
                    <View style={{alignItems:"center",justifyContent:"center",width:108}}>
                      <View>
                        <Image style={{height: 60, width: 80,}}
                               source={require('../../../assets/images/test/ysxt/t1.png')}
                        />
                      </View>
                      <View style={{height:20,marginTop:2}}>
                        <Text numberOfLines={1} style={{color: "#999999", fontSize: 14,lineHeight:20}}>
                          党章

                        </Text>
                      </View>


                    </View>
                    <View style={{alignItems:"center",justifyContent:"center",width:108}}>
                      <View>
                        <Image style={{height: 60, width: 80,}}
                               source={require('../../../assets/images/test/ysxt/t1.png')}
                        />
                      </View>
                      <View style={{height:20,marginTop:2}}>
                        <Text numberOfLines={1} style={{color: "#999999", fontSize: 14,lineHeight:20}}>
                          政策法规

                        </Text>
                      </View>


                    </View>
                    <View style={{alignItems:"center",justifyContent:"center",width:108}}>
                      <View>
                        <Image style={{height: 60, width: 80,}}
                               source={require('../../../assets/images/test/ysxt/t1.png')}
                        />
                      </View>
                      <View style={{height:20,marginTop:2}}>
                        <Text numberOfLines={1} style={{color: "#999999", fontSize: 14,lineHeight:20}}>
                          党史资料

                        </Text>
                      </View>


                    </View>
                    <View style={{alignItems:"center",justifyContent:"center",width:108}}>
                      <View>
                        <Image style={{height: 60, width: 80,}}
                               source={require('../../../assets/images/test/ysxt/t1.png')}
                        />
                      </View>
                      <View style={{height:20,marginTop:2}}>
                        <Text numberOfLines={1} style={{color: "#999999", fontSize: 14,lineHeight:20}}>
                          党章

                        </Text>
                      </View>


                    </View>
                    <View style={{alignItems:"center",justifyContent:"center",width:108}}>
                      <View>
                        <Image style={{height: 60, width: 80,}}
                               source={require('../../../assets/images/test/ysxt/t1.png')}
                        />
                      </View>
                      <View style={{height:20,marginTop:2}}>
                        <Text numberOfLines={1} style={{color: "#999999", fontSize: 14,lineHeight:20}}>
                          党章

                        </Text>
                      </View>


                    </View>

                  </View>


                </ScrollView>


              </View>

              <View>
                <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",marginBottom:1}}>
                  <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                    <Image style={{ height: 24, width: 24, }}
                           source={require('../../../assets/images/index_menu/menu1.png')}
                    />
                    <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                      中心组学习
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
                <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",marginBottom:1}}>
                  <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                    <Image style={{ height: 24, width: 24, }}
                           source={require('../../../assets/images/index_menu/menu1.png')}
                    />
                    <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                      周五学习
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
                <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",marginBottom:1}}>
                  <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                    <Image style={{ height: 24, width: 24, }}
                           source={require('../../../assets/images/index_menu/menu1.png')}
                    />
                    <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                      党支部学习
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
                <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",marginBottom:1}}>
                  <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                    <Image style={{ height: 24, width: 24, }}
                           source={require('../../../assets/images/index_menu/menu1.png')}
                    />
                    <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                      党小组学习
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
                <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",marginBottom:1}}>
                  <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                    <Image style={{ height: 24, width: 24, }}
                           source={require('../../../assets/images/index_menu/menu1.png')}
                    />
                    <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
                      中心组学习
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