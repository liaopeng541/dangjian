import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class HuiYiCell extends Component{
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
      <View
        style={{
          height: 93,
          borderBottomColor: "#eeeeee",
          borderBottomWidth: 1,
          justifyContent: "center",
          paddingVertical: 15
        }}>
        <View style={{flexDirection: "row"}}>
          <View style={{
            width: 64,
            height: 64,
            borderRadius: 5,
            backgroundColor: "#FA6400",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={{color: "#ffffff", fontSize: 12, lineHeight: 12}}>{this.props.month}</Text>
            <Text style={{color: "#ffffff", fontSize: 32, lineHeight: 32}}>{this.props.day}</Text>
            <Text style={{color: "#ffffff", fontSize: 12, lineHeight: 12}}>{this.props.week}</Text>

          </View>
          <View style={{flex: 1, justifyContent: "center", paddingHorizontal: 10}}>
            <Text numberOfLines={2} style={{
              color: "#333333",
              fontSize: 16,
              lineHeight: 20
            }}>{this.props.title}</Text>
            <Text style={{color: "#999999", fontSize: 14, lineHeight: 20}}>{this.props.desc}</Text>
          </View>

        </View>


      </View>
    </TouchableWithoutFeedback>
    )
  }
}