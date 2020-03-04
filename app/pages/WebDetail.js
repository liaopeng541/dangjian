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
import { WebView } from 'react-native-webview';
const { height, width } = Dimensions.get('window');
import NavBar from "./Cell/NavBar/NavBar"
class WebDetail extends Component{
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
          <NavBar
            {...this.props}
            title={this.props.route.params.title}

          />


          <View style={{height:height-64,backgroundColor:"#ffffff"}}>

            {this.props.route&&this.props.route.params.uri&&<WebView style={{height:"100%",width:"100%"}} source={{ uri:this.props.route.params.uri}} />}
          </View>
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
export default connect(mapStateToProps)(WebDetail)