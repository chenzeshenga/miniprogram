var total_micro_second = 60 * 60 * 1000;

function countdown(that) {
  that.setData({
    clock: dateformat(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    return;
  }
  setTimeout(function () {
    total_micro_second -= 10;
    countdown(that);
  }
    , 10)
}


function dateformat(micro_second) {
  var second = Math.floor(micro_second / 1000);
  var hr = Math.floor(second / 3600);
  var min = Math.floor((second - hr * 3600) / 60);
  var sec = (second - hr * 3600 - min * 60);
  var micro_sec = Math.floor((micro_second % 1000) / 10);
  return hr + ":" + min + ":" + sec + " " + micro_sec;
}

Page({
  data: {
    clock: ''
  },
  onLoad: function () {
    countdown(this);
  }
});