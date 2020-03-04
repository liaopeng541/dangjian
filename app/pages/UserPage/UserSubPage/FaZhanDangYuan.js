import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import {connect} from "react-redux"
import Config from "../../../config/Config"
const { height, width } = Dimensions.get('window');
import NavBar from "../../Cell/NavBar/NavBar"
import FaZhanDangYuanCell from "../../Cell/AppBottom/FaZhanDangYuanCell"
class FaZhanDangYuan extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount()
  {

    console.log(this.props)
  }
  render()
  {
    return(
      <View style={{flex:1,backgroundColor:"#ffffff"}}>
        <SafeAreaView style={{height:"100%"}}>
          <NavBar
            {...this.props}
            title={"发展党员"}
            rightImage={require('../../../assets/images/user/more.png')}

          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{backgroundColor:"#E3E3E3",alignItems:"center"}}>
              <View style={{height:170,backgroundColor:"#cccccc",width:"100%"}}>
                <Image style={{ height: "100%", width: "100%",  }}
                       source={require('../../../assets/images/test/fazhandangyuan.png')}
                />
              </View>

            </View>

            <View style={{flexDirection:"row",flexWrap:"wrap",padding:8,backgroundColor:"#ffffff"}}>
              <FaZhanDangYuanCell
                {...this.props}
                title={"姓名"}
                desc={"职务"}
                routeName={"FaZhanDangYuan_Detail"}



                />
              <FaZhanDangYuanCell
                {...this.props}
                title={"姓名"}
                desc={"职务"}
                routeName={"FaZhanDangYuan_Detail"}



              />
              <FaZhanDangYuanCell
                {...this.props}
                title={"姓名"}
                desc={"职务"}
                routeName={"FaZhanDangYuan_Detail"}



              />
              <FaZhanDangYuanCell
                {...this.props}
                title={"姓名"}
                desc={"职务"}
                routeName={"FaZhanDangYuan_Detail"}



              />
              <FaZhanDangYuanCell
                {...this.props}
                title={"姓名"}
                desc={"职务"}
                routeName={"FaZhanDangYuan_Detail"}



              />
              <FaZhanDangYuanCell
                {...this.props}
                title={"姓名"}
                desc={"职务"}
                routeName={"FaZhanDangYuan_Detail"}



              /><FaZhanDangYuanCell
              {...this.props}
              title={"姓名"}
              desc={"职务"}
              routeName={"FaZhanDangYuan_Detail"}



            /><FaZhanDangYuanCell
              {...this.props}
              title={"姓名"}
              desc={"职务"}
              routeName={"FaZhanDangYuan_Detail"}



            />








            </View>
           







          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {

  },
  location: {
    padding: 16,
  },
  buttonGroup: {
    padding: 16,
    flexDirection: 'row'
  },
  button: {
    width: 80,
    margin: 8
  }
});
const mapStateToProps=(state)=>{
  return {
    user:state.user
  }
}
export default connect(mapStateToProps)(FaZhanDangYuan)