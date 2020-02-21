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
class DangYuanFengCai extends Component{
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
      <View style={{flex:1}}>
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
                <Text style={{color: "#ffffff", fontSize: 16}}>党员风采</Text>
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
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center",paddingBottom:64}}>
              <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                             source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <View style={{height:40,justifyContent:"center"}}>
                      <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                        杨炎
                      </Text>
                    </View>
                    <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                      2019-10-21
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                             source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <View style={{height:40,justifyContent:"center"}}>
                      <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                        杨炎
                      </Text>
                    </View>
                    <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                      2019-10-21
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                             source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <View style={{height:40,justifyContent:"center"}}>
                      <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                        杨炎
                      </Text>
                    </View>
                    <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                      2019-10-21
                    </Text>
                  </View>

                </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                             source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <View style={{height:40,justifyContent:"center"}}>
                      <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                        杨炎
                      </Text>
                    </View>
                    <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                      2019-10-21
                    </Text>
                  </View>

                </View><View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                  <View style={{maxHeight:100,width:"100%"}}>
                    <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                    />
                  </View>

                  <View style={{height:40,justifyContent:"center"}}>
                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                      杨炎
                    </Text>
                  </View>
                  <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                    2019-10-21
                  </Text>
                </View>

              </View><View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                  <View style={{maxHeight:100,width:"100%"}}>
                    <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                    />
                  </View>

                  <View style={{height:40,justifyContent:"center"}}>
                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                      杨炎
                    </Text>
                  </View>
                  <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                    2019-10-21
                  </Text>
                </View>

              </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                             source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <View style={{height:40,justifyContent:"center"}}>
                      <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                        杨炎
                      </Text>
                    </View>
                    <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                      2019-10-21
                    </Text>
                  </View>

                </View><View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                  <View style={{maxHeight:100,width:"100%"}}>
                    <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                    />
                  </View>

                  <View style={{height:40,justifyContent:"center"}}>
                    <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                      杨炎
                    </Text>
                  </View>
                  <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                    2019-10-21
                  </Text>
                </View>

              </View>
                <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

                  <View style={{height:180,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
                    <View style={{maxHeight:100,width:"100%"}}>
                      <Image style={{ maxHeight: "100%", maxWidth: "100%",  }}
                             source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                      />
                    </View>

                    <View style={{height:40,justifyContent:"center"}}>
                      <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#333333",marginTop:6}}>
                        杨炎
                      </Text>
                    </View>
                    <Text numberOfLines={1} style={{fontSize:12,lineHeight:21,color:"#999999"}}>
                      2019-10-21
                    </Text>
                  </View>

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
export default connect(mapStateToProps)(DangYuanFengCai)