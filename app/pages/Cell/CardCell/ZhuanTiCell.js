import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class ZhuanTiCell extends Component{
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
      <View style={{height:220,backgroundColor:"#ffffff",marginTop:15,width:"94%",padding:10}}>
        <View style={{height:120}}>
          <Image style={{ height: "100%", width: "100%",  }}
                 source={this.props.image}
          />
        </View>
        <Text numberOfLines={1} style={{fontSize:16,lineHeight:22,color:"#333333",marginTop:10}}>
          {this.props.title}
        </Text>
        <Text numberOfLines={2} style={{fontSize:14,lineHeight:22,color:"#999999"}}>
          {this.props.desc}
        </Text>
      </View>
    </TouchableWithoutFeedback>
    )
  }
}