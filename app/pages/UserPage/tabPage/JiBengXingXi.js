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
class JiBengXingXi extends Component{
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
            <View style={{paddingBottom:100}}>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    性别
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    女
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    民族
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    土家族
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    出生年月
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    1976年9月25日
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    籍贯
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    湖南省吉首市
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    学历
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    本科
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    身份证
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    433101197609250511
                  </Text>
                </View>
              </View>
              <View style={{height:57,borderBottomColor:"#eeeeee",borderBottomWidth:1,backgroundColor:"#ffffff",paddingHorizontal:20,paddingVertical:7}}>

                <View>
                  <Text style={{fontSize:12,color:"#999999",lineHeight:17}}>
                    政治面貌
                  </Text>
                </View>

                <View>
                  <Text style={{fontSize:16,color:"#333333",lineHeight:22}} numberOfLines={1}>
                    无
                  </Text>
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
export default connect(mapStateToProps)(JiBengXingXi)