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
      <View style={{flexDirection:"row",height:50,paddingLeft:25,paddingRight:25,backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee"}}>
        <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
          {this.props.image?<Image style={{ height: 40, width: 30,borderRadius:3 }}
                 source={this.props.image?this.props.image:require('../../../assets/images/other/default_pic.png')}
          />:<Image style={{ height: 40, width: 30,borderRadius:3 }}
                    source={this.props.image}
          />}
          <Text style={{fontSize:17,color:"#333333",marginLeft:5}}>
            {this.props.title}
          </Text>

        </View>
        <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
          <Text style={{fontSize:16,color:"#999999"}}>

          </Text>
          <Image style={{ height: 13, width: 13, marginLeft:5}}
                 source={require('../../../assets/images/other/right.png')}
          />
        </View>


      </View>
    </TouchableWithoutFeedback>
    )
  }
}