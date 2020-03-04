import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class CatTitleCell extends Component{
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
      <View style={{height:40,flexDirection:"row",paddingLeft:20,paddingRight:20,backgroundColor:"#ffffff",borderBottomColor:"#eeeeee",borderBottomWidth:1}}>
        <View style={{flex:1,justifyContent:"center",}}>
          <Text style={{fontSize:16,color:"#333333"}}>{this.props.leftTitle}</Text>
        </View>
        <TouchableWithoutFeedback onPress={this.To.bind(this)}>
        <View style={{width:102,justifyContent:"center",alignItems:"flex-end"}}>
          <Text style={{fontSize:14,color:"#999999"}}>{this.props.rightTitle}</Text>
        </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}