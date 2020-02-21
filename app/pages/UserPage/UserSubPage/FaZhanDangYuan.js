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
class FaZhanDangYuan extends Component{
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
                <Text style={{color: "#ffffff", fontSize: 16}}>发展党员</Text>
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
                       source={require('../../../assets/images/test/fazhandangyuan.png')}
                />
              </View>

            </View>

            <View style={{flexDirection:"row",flexWrap:"wrap",padding:8,backgroundColor:"#ffffff"}}>
              <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
                  <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>

                  </View>
                  <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
                    姓名
                  </Text>
                  <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
                    职务
                  </Text>

                </View>
              </View>
              <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
                  <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>

                  </View>
                  <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
                    姓名
                  </Text>
                  <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
                    职务
                  </Text>

                </View>
              </View>
              <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
                  <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>

                  </View>
                  <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
                    姓名
                  </Text>
                  <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
                    职务
                  </Text>

                </View>
              </View>
              <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
                  <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>

                  </View>
                  <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
                    姓名
                  </Text>
                  <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
                    职务
                  </Text>

                </View>
              </View>
              <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
                  <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>

                  </View>
                  <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
                    姓名
                  </Text>
                  <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
                    职务
                  </Text>

                </View>
              </View>
              <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
                  <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>

                  </View>
                  <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
                    姓名
                  </Text>
                  <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
                    职务
                  </Text>

                </View>
              </View>
              <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
                  <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>

                  </View>
                  <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
                    姓名
                  </Text>
                  <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
                    职务
                  </Text>

                </View>
              </View>
              <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
                  <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>

                  </View>
                  <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
                    姓名
                  </Text>
                  <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
                    职务
                  </Text>

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
export default connect(mapStateToProps)(FaZhanDangYuan)