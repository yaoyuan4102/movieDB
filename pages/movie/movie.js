// movie.js
var douban = require('../../utils/douban.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    comingMovieList: [],
    theaterMovieList: [],
    usMovieList: [],
    query: {
      start: 0,
      count: 10
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    self.fetchComingMovies(self.query);
    self.fetchTheaterMovies(self.query);
    self.fetchUSMovies(self.query);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * Fetch movies
   */
  fetchComingMovies: function (params) {
    const self = this;
    douban.getComingMovies({
      params,
      success: (res) => {
        console.log(res);
        self.setData({
          comingMovieList: self.data.comingMovieList.concat(res.data.subjects)
        })
      }
    });
  },

  fetchTheaterMovies: function (params) {
    const self = this;
    douban.getTheaterMovies({
      params,
      success: (res) => {
        console.log(res);
        self.setData({
          theaterMovieList: self.data.theaterMovieList.concat(res.data.subjects)
        })
      }
    });
  },

  fetchUSMovies: function (params) {
    const self = this;
    douban.getComingMovies({
      params,
      success: (res) => {
        console.log(res);
        self.setData({
          usMovieList: self.data.usMovieList.concat(res.data.subjects)
        })
      }
    });
  }
})