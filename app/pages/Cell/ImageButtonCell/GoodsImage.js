import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
export default class GoodsImage extends Component{
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
      <View style={{width:this.props.width?this.props.width:"33%",alignItems:"center",marginTop:5}}>
        <View style={{width:"96%",backgroundColor:"#ffffff",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:"95%",alignItems:"center",marginTop:5}}>
          <Image style={{ height:110, width: "100%", }}
                 source={this.props.image}

          />
        </View>
        <View style={{marginTop:7,width:"95%"}}>
          <Text numberOfLines={1} style={{lineHeight:21,fontSize:15,color:"#333333"}}>
            {this.props.title}
          </Text>
          <View style={{flexDirection:"row",alignItems:"center",marginTop:3}}>
          <Text style={{lineHeight:25,fontSize:18,color:"#FF3B30"}}>
            {this.props.desc}

          </Text>
            {this.props.tag&&<View style={{height:17,backgroundColor:"#fceee9",paddingHorizontal:3,marginLeft:3}}>
              <Text style={{lineHeight:17,fontSize:12,color:"#E95A27"}}>
                {this.props.tag}

              </Text>
            </View>}
          </View>
        </View>

        </View>

      </View>
    </TouchableWithoutFeedback>
    )
  }
}