//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text: "init data",
    array: [{ text: "init data" }],
    object: {
      text: "init data"
    }
  },
  changeText:function(){
    this.setData(
      {
        text:"changed data"
      }
    )
  },
  changeItemInArray:function(){
    this.setData({
      "array[0].text":"changed data"
    })
  },
  changeItemInObject: function () {
    this.setData({
      "object.text": "changed data"
    })
  },
  addNewFields: function () {
    this.setData({
      "newField.text": "new data"
    })
  },

})
