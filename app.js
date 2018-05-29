App({
  onLaunch: function() {
    console.log('App Launch');
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
        console.log("User Location: " + latitude + "   " + longitude);
      },
      error: (res) => {
        debugger;
      }
    })

  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  }
})