/**
 * @param {} obj 可移动的dom
 * @param {} box 可移动的区域
 */
export default function drag (obj, box) {
  obj.onmousedown = function (ev) {
    console.log(ev, onmousedown)
    ev = ev || event

    var disX = ev.clientX - this.offsetLeft
    var disY = ev.clientY - this.offsetTop


    document.onmousemove = function (ev) {
      ev = ev || event

      var L = ev.clientX - disX
      var T = ev.clientY - disY
      if (L < 0) {
        L = 0
      } else if (L > box.clientWidth - obj.offsetWidth) {
        L = box.clientWidth - obj.offsetWidth
      }

      if (T < 0) {
        T = 0
      } else if (T > box.clientHeight - obj.offsetHeight) {
        T = box.clientHeight - obj.offsetHeight
      }

      obj.style.left = L + 'px'
      obj.style.top = T + 'px'
    }

    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null
    }
    return false
  }
}
