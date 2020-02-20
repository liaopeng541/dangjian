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
import Config from "../config/Config"
const { height, width } = Dimensions.get('window');
class JinZhunFuPing extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount()
  {

    console.log(this.props)
  }
  test(){
    this.props.dispatch({type:"add"})
  }
  render()
  {
    return(
      <>
        <SafeAreaView>
          <View style={{paddingTop:20,backgroundColor:Config.ThemeColor}}>
            <View style={{height:44,alignItems:"center",flexDirection:"row",}}>
            <View style={{flex:1,justifyContent:"center",paddingLeft:18}}>
              <Image style={{ height: 20, width: 20,}}
                     source={require('../assets/images/nav/message.png')}
              />
            </View>
            <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#ffffff",fontSize:16}}>阳光党建</Text>
            </View>
            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center",paddingRight:18,flexDirection:"row"}}>
              <Text style={{color:"#ffffff",fontSize:14}}>我的</Text>
              <Image style={{ height: 20, width: 20,marginLeft:10}}
                     source={require('../assets/images/nav/user.png')}
              />
            </View>
            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{paddingBottom:64,backgroundColor:"#E3E3E3"}}>
            <View style={{height:170,backgroundColor:"#cccccc"}}>
              <Image style={{ height: "100%", width: "100%",  }}
                     source={require('../assets/images/test/lunbo/lunbo1.png')}
              />
            </View>


            <View>

              <View style={{height:40,flexDirection:"row",paddingLeft:20,paddingRight:20,backgroundColor:"#ffffff"}}>
                <View style={{flex:1,justifyContent:"center",}}>
                 <Text style={{fontSize:16,color:"#333333"}}>扶贫动态</Text>

                </View>
                <View style={{width:102,justifyContent:"center",alignItems:"flex-end"}}>
                  <Text style={{fontSize:14,color:"#999999"}}>查看全部</Text>
                </View>

              </View>

              {/*首页列表*/}
              <View>
                <View style={{height:80,backgroundColor:"#ffffff",marginTop:1,alignItems:"center",justifyContent:"center"}}>
                    <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
                      <View>
                        <Image style={{ height:60, width: 60,  }}
                               source={require('../assets/images/test/lunbo/lunbo1.png')}
                        />

                      </View>
                      <View style={{flex:1,paddingLeft:18}}>
                        <View style={{height:40}}>
                        <Text numberOfLines={2} style={{fontSize:13,lineHeight:20,color:"#333333"}}>
                          深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性
                        </Text>
                        </View>
                        <View style={{height:18,marginTop:5}}>
                          <Text  style={{fontSize:13,lineHeight:18,color:"#969FA2"}}>
                            2019-5-3  13:00
                          </Text>
                        </View>

                      </View>

                    </View>
                </View>
                <View style={{height:80,backgroundColor:"#ffffff",marginTop:1,alignItems:"center",justifyContent:"center"}}>
                  <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
                    <View>
                      <Image style={{ height:60, width: 60,  }}
                             source={require('../assets/images/test/lunbo/lunbo1.png')}
                      />

                    </View>
                    <View style={{flex:1,paddingLeft:18}}>
                      <View style={{height:40}}>
                        <Text numberOfLines={2} style={{fontSize:13,lineHeight:20}}>
                          深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性
                        </Text>
                      </View>
                      <View style={{height:18,marginTop:5}}>
                        <Text  style={{fontSize:13,lineHeight:18,color:"#969FA2"}}>
                          2019-5-3  13:00
                        </Text>
                      </View>

                    </View>

                  </View>
                </View>


              </View>

              <View style={{height:40,flexDirection:"row",paddingLeft:20,paddingRight:20,backgroundColor:"#ffffff",marginTop:1}}>
                <View style={{flex:1,justifyContent:"center",}}>
                  <Text style={{fontSize:16,color:"#333333"}}>扶贫动态</Text>

                </View>
                <View style={{width:102,justifyContent:"center",alignItems:"flex-end"}}>
                  <Text style={{fontSize:14,color:"#999999"}}>查看全部</Text>
                </View>

              </View>
              <View style={{marginTop:1,backgroundColor:"#ffffff",paddingTop:18,paddingBottom:18,paddingLeft:16,paddingRight:16,flexDirection:"row",flexWrap:"wrap"}}>

                <View style={{width:"33%",alignItems:"center",marginTop:7}}>
                  <Image style={{ height:110, width: 110,  }}
                         source={require('../assets/images/test/lunbo/lunbo1.png')}
                  />
                  <View style={{marginTop:7,width:"95%"}}>
                  <Text numberOfLines={1} style={{lineHeight:21,fontSize:15,color:"#333333"}}>
                    红心猕猴桃
                  </Text>
                  <Text style={{lineHeight:25,fontSize:18,color:"#FF3B30",marginTop:3}}>
                    ¥60
                  </Text>
                  </View>



                </View>
                <View style={{width:"33%",alignItems:"center",marginTop:7}}>
                  <Image style={{ height:110, width: 110,  }}
                         source={require('../assets/images/test/lunbo/lunbo1.png')}
                  />
                  <View style={{marginTop:7,width:"95%"}}>
                    <Text numberOfLines={1} style={{lineHeight:21,fontSize:15,color:"#333333"}}>
                      农家土鸡蛋
                    </Text>
                    <Text style={{lineHeight:25,fontSize:18,color:"#FF3B30",marginTop:3}}>
                      ¥24.5
                    </Text>
                  </View>



                </View>
                <View style={{width:"33%",alignItems:"center",marginTop:7}}>
                  <Image style={{ height:110, width: 110,  }}
                         source={require('../assets/images/test/lunbo/lunbo1.png')}
                  />
                  <View style={{marginTop:7,width:"95%"}}>
                    <Text numberOfLines={1} style={{lineHeight:21,fontSize:15,color:"#333333"}}>
                      原生态蜂蜜
                    </Text>
                    <Text style={{lineHeight:25,fontSize:18,color:"#FF3B30",marginTop:3}}>
                      ¥89
                    </Text>
                  </View>



                </View>
                <View style={{width:"33%",alignItems:"center",marginTop:7}}>
                  <Image style={{ height:110, width: 110,  }}
                         source={require('../assets/images/test/lunbo/lunbo1.png')}
                  />
                  <View style={{marginTop:7,width:"95%"}}>
                    <Text numberOfLines={1} style={{lineHeight:21,fontSize:15,color:"#333333"}}>
                      压榨茶油
                    </Text>
                    <Text style={{lineHeight:25,fontSize:18,color:"#FF3B30",marginTop:3}}>
                      ¥60
                    </Text>
                  </View>



                </View>
                <View style={{width:"33%",alignItems:"center",marginTop:7}}>
                  <Image style={{ height:110, width: 110,  }}
                         source={require('../assets/images/test/lunbo/lunbo1.png')}
                  />
                  <View style={{marginTop:7,width:"95%"}}>
                    <Text numberOfLines={1} style={{lineHeight:21,fontSize:15,color:"#333333"}}>
                      草莓
                    </Text>
                    <Text style={{lineHeight:25,fontSize:18,color:"#FF3B30",marginTop:3}}>
                      ¥60
                    </Text>
                  </View>



                </View>
                <View style={{width:"33%",alignItems:"center",marginTop:7}}>
                  <Image style={{ height:110, width: 110,  }}
                         source={require('../assets/images/test/lunbo/lunbo1.png')}
                  />
                  <View style={{marginTop:7,width:"95%"}}>
                    <Text numberOfLines={1} style={{lineHeight:21,fontSize:15,color:"#333333"}}>
                      红心猕猴桃
                    </Text>
                    <Text style={{lineHeight:25,fontSize:18,color:"#FF3B30",marginTop:3}}>
                      ¥60
                    </Text>
                  </View>



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
export default connect(mapStateToProps)(JinZhunFuPing)