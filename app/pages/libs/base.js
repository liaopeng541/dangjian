const base=function (obj) {
  if(obj.state)
  {
    obj.state.isloading=false
    obj.state.isRefreshing=false
  }else{
    obj.state={
      isloading:false,
      isRefreshing:false,
    }
  }
  obj.BackTop=()=>
  {
    obj.props.navigator.popToTop();
  }
  obj.Back=()=> {
    const navigator = obj.props.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true;
    }
    return false;
  }

  /**
   * 加载中
   */
  obj.showLoading=()=>{
    obj.setState({
      isloading: true,
    })
  }
  /**
   * 加载完成
   */
  obj.hideLoading=()=>{
    obj.setState({
      isloading: false,
      isRefreshing: false,
    })
  }

  obj.To=(component,Login=null,args={},float='right')=>
  {
    if(Login && !obj.props.data.userinfo)
    {
      component=Login;
      float = "bottom"
    }
    obj.props.navigator.push({
      component:component,
      float:float,
      args:args,
    })
  }

  obj.showToast=(message, time = 3000,position='center')=>{
    var toastPosition=Toast.positions.CENTER;
    switch (position)
    {
      case 'top':toastPosition = Toast.positions.TOP;break;
      case 'bottom':toastPosition = Toast.positions.BOTTOM;break;
    }
    obj.toast&&Toast.hide(obj.toast);
    obj.toast = Toast.show(message, {
      duration: time,
      position: toastPosition,
      shadow: true,
      animation: true,
      hideOnPress: false,
      delay: 0,
    });
    obj.hideLoading();
  }

}
export default base