export function getData(url){
    return new Promise(function(resolve, reject){
        var result = require('../data/weekly')
        resolve(result)
   /*  wx.request({
            url: 'https://dm.facemagic888.com/weekly/findById',
            data: {},
            header: {
                //'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log("success")
                console.log(res)
                resolve(res)
            },
            fail: function (res) {
                reject(res)
                console.log("failed")
            }
        }) */
    })
}
