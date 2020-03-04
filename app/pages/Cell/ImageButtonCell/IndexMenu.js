import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class IndexMenu extends Component{
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
      <View style={{flex:1,height:70,alignItems:"center",justifyContent:"center"}}>
        <Image style={{ height: 36, width: 36, margin:6 }}
               source={this.props.image}
        />
        <Text style={{fontSize:14,color:"#333333"}}>{this.props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
    )
  }
}