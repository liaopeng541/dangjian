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
        <SafeAreaView style={{height:"100%"}}>
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