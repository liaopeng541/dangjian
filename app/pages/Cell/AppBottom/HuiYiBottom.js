import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class HuiYiBottom extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  toHuiYiJiYao()
  {
    this.props.leftClick();
  }
  toWoDeHuiyi()
  {
       this.props.rightClick();
  }
  render()
  {
    return(
      <View style={{bottom:0,left:0,right:0,backgroundColor:"#ffffff",height:64,width:"100%",zIndex:100,flexDirection:"row",borderTopColor:"#eeeeee",borderTopWidth:1,position:"absolute"}}>
        <TouchableWithoutFeedback onPress={this.toHuiYiJiYao.bind(this)}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1}}>
          <Image style={{height: 20, width: 20,}}
                 source={this.props.selected==1?require('../../../assets/images/other/message_uncheck.png'):require('../../../assets/images/other/message.png')}
                 resizeMode={"contain"}
          />
          <Text style={{fontSize:14,color:"#666666",marginLeft:7}}>
            会议纪要
          </Text>
        </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toWoDeHuiyi.bind(this)}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1}}>
          <Image style={{height: 20, width: 20,}}
                 source={this.props.selected==1?require('../../../assets/images/other/user_selected.png'):require('../../../assets/images/other/user.png')}
                 resizeMode={"contain"}
          />
          <Text style={{fontSize:14,color:"#666666",marginLeft:7}}>
            我的会议
          </Text>
        </View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
}