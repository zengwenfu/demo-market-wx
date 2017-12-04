const util = require('../../utils/util.js')

Page({
  data: {
    targetSrc: ''
  },
  onLoad: function (options) {
    this.setData({targetSrc: options.url})
  }
})
