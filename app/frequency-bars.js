var FrequencyBars = function (selector) {
  this.canvas = document.querySelector(selector)
  this.canvas.width = document.body.clientWidth
  this.context = this.canvas.getContext('2d')
}

FrequencyBars.prototype.update = function (data) {
  var dataLength = parseInt(data.length * 0.125)
  var barWidth = this.canvas.width / dataLength
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  Array.prototype.slice.call(data).reduce((function (x, value, index) {
    this.context.fillStyle = 'hsl(' + (index * 360 / dataLength) + ', 100%, 50%)'
    this.context.fillRect(x, this.canvas.height - value / 2, barWidth, value / 2)
    return x + barWidth
  }).bind(this), 0)
}