var isDown = false;  // 鼠标是否按下
var pointerArr = [];  // 鼠标移动坐标数组
var xPointer = 0;  // 鼠标当前x坐标
var yPointer = 0;  // 鼠标当前y坐标
window.onload = function () {
  canvasApp()
}
function canvasApp() {
  if (!canvasSupport){
    return false
  }
  drawScreen()
}
function canvasSupport() {
  return Modernizr.canvas
}
function drawScreen() {
  var width = 300
  var height = 200

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.fillStyle = '#939393';
  ctx.rect(0, 0, width, height);
  ctx.closePath();
  ctx.fill();

  // pc 移动时间兼容写法
  var hastouch = 'ontouchstart' in window ? true : false,
  tapstart = hastouch ? 'touchstart' : 'mousedown',
  tapmove = hastouch ? 'touchmove' : 'mousemove',
  tapend = hastouch ? 'touchend' : 'mouseup';

  // 鼠标按下
  canvas.addEventListener(tapstart, function (event) {
    console.log(this, 'this')
    var e = window.event || event;
    this.style.cursor = 'move';
    isDown = true;
    xPointer = hastouch ? e.targetTouches[0].pageX : e.clientX - this.offsetLeft;
    yPointer = hastouch ? e.targetTouches[0].pageY : e.clientY - this.offsetTop;
    pointerArr.push([xPointer, yPointer]);

    circleReset(ctx)
  })

  // 鼠标按下后拖动
  canvas.addEventListener(tapmove, function (event) {
    var e = window.event || event;
    if (isDown) {
      xPointer = hastouch ? e.targetTouches[0].pageX : e.clientX - this.offsetLeft;
      yPointer = hastouch ? e.targetTouches[0].pageY : e.clientY - this.offsetTop;
      pointerArr.push([xPointer, yPointer]);
      circleReset(ctx)
    }
  })
}

// 圆形橡皮擦
function circleReset(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(pointerArr[0][0], pointerArr[0][1]);
  ctx.lineCap = 'round';   // 设置线条两端为圆弧
  ctx.lineJoin = 'round';  // 设置线条转折为圆弧
  ctx.lineWidth = 60;
  ctx.globalCompositeOperation = 'destination-out';
  if (pointerArr.length == 1) {
    ctx.lineTo(pointerArr[0][0] + 1, pointerArr[0][1] + 1);
  } else {
    for (var  i = 1; i < pointerArr.length; i++) {
      ctx.lineTo(pointerArr[i][0], pointerArr[i][1]);
      ctx.moveTo(pointerArr[i][0], pointerArr[i][1]);
    }
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
