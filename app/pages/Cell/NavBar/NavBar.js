import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Config from "../../../config/Config";
export default class NavBar extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  To()
  {
    this.props.navigation.navigate(this.props.routeName,this.props.routeParams)
  }
  leftClick()
  {
    if(this.props.leftImage===false)
    {
      return
    }
    if(this.props.onLeftClick)
    {
      this.props.onLeftClick();
    }else if(this.props.leftComponentName){
      this.props.navigation.navigate(this.props.leftComponentName,this.props.leftParams)
    }else{
      this.props.navigation.goBack();
  }

  }
  rightClick()
  {
    if(this.props.onRightClick)
    {
      this.props.onRightClick();
    }else if(this.props.rightComponentName)
    {
      this.props.navigation.navigate(this.props.rightComponentName,this.props.rightParams)
    }



  }
  render()
  {
    return(
      <View style={{paddingTop: 10, backgroundColor: this.props.bgColor?this.props.bgColor:Config.ThemeColor}}>
        <View style={{height: 64, alignItems: "center", flexDirection: "row",paddingTop:20}}>
          <TouchableWithoutFeedback onPress={this.leftClick.bind(this)}>
          <View style={{flex: 1, justifyContent: "center", paddingLeft: 18,height:44}}>

            {this.props.leftImage!==false&&<Image style={{height: 20, width: 20,}}
                   source={this.props.leftImage?this.props.leftImage:require('../../../assets/images/nav/left.png')}
                   resizeMode={"contain"}
            />}
          </View>
          </TouchableWithoutFeedback>

          <View style={{flex: 2, alignItems: "center", justifyContent: "center",height:44}}>
            <Text style={{color: "#ffffff", fontSize: 16}}>{this.props.title}</Text>
          </View>
          <TouchableWithoutFeedback onPress={this.rightClick.bind(this)}>
          <View style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: 18,
            flexDirection: "row",
            height:44
          }}>
            <Text style={{color: "#ffffff", fontSize: 14}}>
              {this.props.rightTitle}
            </Text>
            {this.props.rightImage&&<Image style={{height: 20, width: 20, marginLeft: 10}}
                   source={this.props.rightImage}
                   resizeMode={"contain"}
            />}
          </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}