Page({
  data: {
    imgUrls: [
      "../../icon/config_set_128px_548300_easyicon.net.png",
      '../../icon/config_set_256px_548301_easyicon.net.png',
      '../../icon/key_256px_548295_easyicon.net.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})