import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class ChengLuoKaCell extends Component{
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
      <View style={{width:"50%",marginTop:15,alignItems:"center",justifyContent:"center"}}>

        <View style={{height:160,backgroundColor:"#ffffff",padding:10,width:"90%"}}>
          <View style={{maxHeight:100,width:"100%"}}>
            {this.props.image&&<Image style={{ height: "100%", width: "100%",  }}
                                      source={this.props.image}
            />}
          </View>

          <Text numberOfLines={2} style={{fontSize:12,lineHeight:20,color:"#000000",marginTop:6}}>
            {this.props.title}
          </Text>
        </View>

      </View>
    </TouchableWithoutFeedback>
    )
  }
}