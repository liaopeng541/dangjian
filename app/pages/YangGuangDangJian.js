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
class Home extends Component{
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
            <View style={{paddingBottom:100,backgroundColor:"#E3E3E3"}}>
            <View style={{height:170,backgroundColor:"#cccccc"}}>
              <Image style={{ height: "100%", width: "100%",  }}
                     source={require('../assets/images/test/lunbo/lunbo1.png')}
              />
            </View>
            <View style={{position:"relative"}}>
              <View style={{height:36,width:"90%",left:"5%",top:-18,position:"absolute",zIndex:1}}>
                <ImageBackground
                  source={require('../assets/images/index_message/message_bk.png')}
                  style={{width:"100%",height:"100%",borderRadius:18,flexDirection:"row"}}>
                  <View style={{flex:1,justifyContent:"center",paddingLeft:13,overflow:"hidden",paddingRight:10}}>
                    <Text style={{fontSize:14,color:"#ffffff"}}>
                      通知公告：各有关部门: 定于2019年9月12日
                    </Text>

                  </View>
                  <View style={{width:36,height:"100%",alignItems:"center",justifyContent:"center"}}>
                    <Image style={{ height: 20, width: 20,  }}
                           source={require('../assets/images/index_message/more.png')}
                    />
                  </View>


                </ImageBackground>

              </View>
            <View style={{paddingTop:30,paddingLeft:10,paddingRight:10,paddingBottom:10,backgroundColor:"#ffffff"}}>
              <View style={{flexDirection:"row"}}>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu1.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>组织信息</Text>
                </View>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu2.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>党员档案</Text>
                </View>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu3.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>三会一课</Text>
                </View>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu4.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>三制一卡</Text>
                </View>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu5.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>组织生活</Text>
                </View>


              </View>
              <View style={{flexDirection:"row",marginTop:5}}>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu6.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>发展党员</Text>
                </View>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu7.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>党费缴纳</Text>
                </View>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu8.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>党务公开</Text>
                </View>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu9.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>主题活动</Text>
                </View>
                <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
                  <Image style={{ height: 36, width: 36, margin:10 }}
                         source={require('../assets/images/index_menu/menu10.png')}
                  />
                  <Text style={{fontSize:12,color:"#4B4B4B"}}>党员风采</Text>
                </View>


              </View>
            </View>
            </View>

            <View style={{marginTop:5}}>

              <View style={{height:40,flexDirection:"row",paddingLeft:20,paddingRight:20,backgroundColor:"#ffffff"}}>
                <View style={{flex:1,justifyContent:"center",}}>
                 <Text style={{fontSize:16,color:"#333333"}}>党建动态</Text>

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
export default connect(mapStateToProps)(Home)