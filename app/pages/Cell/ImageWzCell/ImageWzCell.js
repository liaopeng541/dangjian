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
      <View style={{height:80,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee",alignItems:"center",justifyContent:"center"}}>
        <View style={{marginLeft:20,marginRight:20,flexDirection:"row"}}>
          <View>
            <Image style={{ height:60, width: 60,  }}
                   source={this.props.image}
            />

          </View>
          <View style={{flex:1,paddingLeft:18}}>
            <View style={{height:40}}>
              <Text numberOfLines={2} style={{fontSize:this.props.titleSize?this.props.titleSize:16,lineHeight:20}}>
                {this.props.title}
              </Text>
            </View>
            <View style={{height:18,marginTop:5}}>
              <Text  style={{fontSize:13,lineHeight:18,color:"#969FA2"}}>
                {this.props.desc}
              </Text>
            </View>

          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
    )
  }
}