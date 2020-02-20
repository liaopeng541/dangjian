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
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3"}}>
              <View style={{height:80,backgroundColor:"#ffffff",marginBottom:1,alignItems:"center",justifyContent:"center"}}>
                <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
                  <View>
                    <Image style={{ height:60, width: 60,  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
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
              <View style={{height:80,backgroundColor:"#ffffff",marginBottom:1,alignItems:"center",justifyContent:"center"}}>
                <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
                  <View>
                    <Image style={{ height:60, width: 60,  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
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
              <View style={{height:80,backgroundColor:"#ffffff",marginBottom:1,alignItems:"center",justifyContent:"center"}}>
                <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
                  <View>
                    <Image style={{ height:60, width: 60,  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
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
              <View style={{height:80,backgroundColor:"#ffffff",marginBottom:1,alignItems:"center",justifyContent:"center"}}>
                <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
                  <View>
                    <Image style={{ height:60, width: 60,  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
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
              <View style={{height:80,backgroundColor:"#ffffff",marginBottom:1,alignItems:"center",justifyContent:"center"}}>
                <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
                  <View>
                    <Image style={{ height:60, width: 60,  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
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
              <View style={{height:80,backgroundColor:"#ffffff",marginBottom:1,alignItems:"center",justifyContent:"center"}}>
                <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
                  <View>
                    <Image style={{ height:60, width: 60,  }}
                           source={require('../../../assets/images/test/lunbo/lunbo1.png')}
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