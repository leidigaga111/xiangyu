var h1 = document.getElementsByClassName('h1')[0];
//这里的月份输入的时候，要减一
var timer = new Date(2020, 1, 8, 11, 00, 00)


getTime(timer)

function getTime(time) {
  var time2 = Date.now();
  var date = Date.parse(time);
  var dd = time2 - date;
  var dt = date;

  function aa(s) {
    if (s < 10) {
      return '0' + s;
    } else {
      return '' + s;
    }
  }

  auto();
  setInterval(auto, 1000)
  function auto() {
    var date2 = dt += 1000;
    var n = (date2 - date + dd) / 1000;

    var day = parseInt(n / 86400);//天
    var h = parseInt(n % 86400 / 3600);//时
    var m = parseInt(n % 86400 % 3600 / 60);//分
    var ms = parseInt(n % 60);//秒
    h1.innerHTML = '相识：' + day + '天' + aa(h) + '小时' + aa(m) + '分' + aa(ms) + '秒'
  }
}

var box = document.getElementsByClassName('container')[0];
var audio = document.getElementById('audio');
box.onclick = function () {
  audio.play()
}