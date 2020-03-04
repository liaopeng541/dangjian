import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class WzCell extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  To()
  {
    this.props.navigation.navigate(this.props.routeName,this.props.routeParams)
  }
  render()
  {
    return(
    <TouchableWithoutFeedback onPress={this.To.bind(this)}>
      <View style={{height:80,marginBottom:1,backgroundColor:"#ffffff",paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
        <Text style={{color:"#333333",fontSize:16,lineHeight:22}} numberOfLines={2}>
          {this.props.title}
        </Text>
        <Text style={{color:"#999999",fontSize:12,lineHeight:17,marginTop:5}}>
          {this.props.desc}
        </Text>
      </View>
    </TouchableWithoutFeedback>
    )
  }
}