import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class FaZhanDangYuanCell extends Component{
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
      <View style={{width:"25%",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:80,height:140,alignItems:"center",justifyContent:"center",margin:4}}>
          <View style={{height:95,width:80,backgroundColor:"#eeeeee"}}>
            {this.props.image&&<Image style={{ height: "100%", width: "100%",  }}
                   source={this.props.image}
            />}

          </View>
          <Text style={{marginTop:4,color:"#333333",fontSize:14,lineHeight:20}}>
            {this.props.title}
          </Text>
          <Text style={{marginTop:4,color:"#999999",fontSize:12,lineHeight:17}}>
            {this.props.desc}
          </Text>

        </View>
      </View>
    </TouchableWithoutFeedback>
    )
  }
}