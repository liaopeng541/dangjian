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
class DangYuanDaHui extends Component{
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
        <SafeAreaView style={{backgroundColor:"#F4F4F4",minHeight:"100%"}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <View style={{height:80,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingLeft:15,paddingRight:15,flexDirection:"row"}}>

                <View style={{flex:1,marginLeft:8}}>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10,height:45}}>
                    <View style={{flex:1,paddingRight:8}}>
                      <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={2}>
                        12月党费缴纳
                      </Text>
                    </View>
                    <View style={{width:80,alignItems:"flex-end",paddingRight:5}}>
                      <Text style={{fontSize:16,color:"#999999",lineHeight:22}}>
                        ¥50.00
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View>
                      <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                        党费
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                        已交费
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{height:80,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingLeft:15,paddingRight:15,flexDirection:"row"}}>

                <View style={{flex:1,marginLeft:8}}>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10,height:45}}>
                    <View style={{flex:1,paddingRight:8}}>
                      <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={2}>
                        心系灾区，爱心传递
                      </Text>
                    </View>
                    <View style={{width:80,alignItems:"flex-end",paddingRight:5}}>
                      <Text style={{fontSize:16,color:"#999999",lineHeight:22}}>
                        ¥100.00
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View>
                      <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                        党费
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                        已交费
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{height:80,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingLeft:15,paddingRight:15,flexDirection:"row"}}>

                <View style={{flex:1,marginLeft:8}}>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10,height:45}}>
                    <View style={{flex:1,paddingRight:8}}>
                      <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={2}>
                        心系灾区，爱心传递
                      </Text>
                    </View>
                    <View style={{width:80,alignItems:"flex-end",paddingRight:5}}>
                      <Text style={{fontSize:16,color:"#999999",lineHeight:22}}>
                        ¥100.00
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View>
                      <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                        党费
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                        已交费
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
export default connect(mapStateToProps)(DangYuanDaHui)