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
class MingZhuShengHuoHui  extends Component{
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
            <View style={{backgroundColor:"#E3E3E3",paddingBottom:100}}>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  2019年民主生活会，主题：围绕党的中心工作和现阶段的工作任务谈思想
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
              </View>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  2018年民主生活会，主题：围绕党的中心工作和现阶段的工作任务谈思想
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
              </View>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  2017年民主生活会，主题：围绕党的中心工作和现阶段的工作任务谈思想
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
              </View>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  2016年民主生活会
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
              </View><View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
              <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性
              </Text>
              <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                2020-01-23
              </Text>
            </View>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
              </View>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
              </View>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
              </View>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
              </View>
              <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <Text style={{color:"#333333",fontSize:16,lineHeight:22}}>
                  深刻认识党建工作的极端重要性深刻认识党建工作的极端重要性
                </Text>
                <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
                  2020-01-23
                </Text>
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
export default connect(mapStateToProps)(MingZhuShengHuoHui)