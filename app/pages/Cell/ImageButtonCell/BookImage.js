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
      <View style={{alignItems:"center",justifyContent:"center",width:108}}>
        <View>
          <Image style={{height: 60, width: 80,borderRadius:5}}
                 source={this.props.image}
                 resizeMode={"contain"}
          />
        </View>
        <View style={{height:20,marginTop:2}}>
          <Text numberOfLines={1} style={{color: "#999999", fontSize: 14,lineHeight:20}}>
            {this.props.title}
          </Text>
        </View>


      </View>
    </TouchableWithoutFeedback>
    )
  }
}