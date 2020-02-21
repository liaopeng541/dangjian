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
                <Text style={{color: "#ffffff", fontSize: 16}}>主题活动</Text>
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
          <View style={{height:56,alignItems:"center",justifyContent:"center",paddingLeft:15,paddingRight:15,backgroundColor:"#E7EAEB"}}>
            <View style={{height:36,backgroundColor:"#ffffff",borderRadius:5,width:"100%",alignItems:"center",justifyContent:"center"}}>
              <Text style={{fontSize:16,color:"#455154"}}>
                搜索标题
              </Text>

            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center",paddingBottom:64}}>
              <View style={{height:220,backgroundColor:"#ffffff",marginTop:15,width:"94%",padding:10}}>
                <View style={{height:120}}>
                  <Image style={{ height: "100%", width: "100%",  }}
                         source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                  />
                </View>
                <Text numberOfLines={1} style={{fontSize:16,lineHeight:22,color:"#333333",marginTop:10}}>
                  两学一做
                </Text>
                <Text numberOfLines={2} style={{fontSize:14,lineHeight:22,color:"#999999"}}>
                  三大保障类别，全方位守护您的财富和家庭全方位守护您的财富和家庭
                </Text>
              </View>
              <View style={{height:220,backgroundColor:"#ffffff",marginTop:15,width:"94%",padding:10}}>
                <View style={{height:120}}>
                  <Image style={{ height: "100%", width: "100%",  }}
                         source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                  />
                </View>
                <Text numberOfLines={1} style={{fontSize:16,lineHeight:22,color:"#333333",marginTop:10}}>
                  两学一做
                </Text>
                <Text numberOfLines={2} style={{fontSize:14,lineHeight:22,color:"#999999"}}>
                  三大保障类别，全方位守护您的财富和家庭全方位守护您的财富和家庭
                </Text>
              </View>
              <View style={{height:220,backgroundColor:"#ffffff",marginTop:15,width:"94%",padding:10}}>
                <View style={{height:120}}>
                  <Image style={{ height: "100%", width: "100%",  }}
                         source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                  />
                </View>
                <Text numberOfLines={1} style={{fontSize:16,lineHeight:22,color:"#333333",marginTop:10}}>
                  两学一做
                </Text>
                <Text numberOfLines={2} style={{fontSize:14,lineHeight:22,color:"#999999"}}>
                  三大保障类别，全方位守护您的财富和家庭全方位守护您的财富和家庭
                </Text>
              </View>
              <View style={{height:220,backgroundColor:"#ffffff",marginTop:15,width:"94%",padding:10}}>
                <View style={{height:120}}>
                  <Image style={{ height: "100%", width: "100%",  }}
                         source={require('../../../assets/images/test/lunbo/lunbo1.png')}
                  />
                </View>
                <Text numberOfLines={1} style={{fontSize:16,lineHeight:22,color:"#333333",marginTop:10}}>
                  两学一做
                </Text>
                <Text numberOfLines={2} style={{fontSize:14,lineHeight:22,color:"#999999"}}>
                  三大保障类别，全方位守护您的财富和家庭全方位守护您的财富和家庭
                </Text>
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