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
    self.fetchAllMoives();
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
  fetchAllMoives: function () {
    var self = this;
    self.fetchComingMovies(self.data.query);
    self.fetchTheaterMovies(self.data.query);
    self.fetchUSMovies(self.data.query);
  },

  fetchComingMovies: function (query) {
    const self = this;
    douban.getComingMovies({
      query,
      success: (res) => {
        self.setData({
          comingMovieList: self.data.comingMovieList.concat(res.data.subjects)
        });
        console.log(self.data.comingMovieList);
      }
    });
  },

  fetchTheaterMovies: function (query) {
    const self = this;
    douban.getTheaterMovies({
      query,
      success: (res) => {
        self.setData({
          theaterMovieList: self.data.theaterMovieList.concat(res.data.subjects)
        });
      }
    });
  },

  fetchUSMovies: function (query) {
    const self = this;
    douban.getUSMovies({
      query,
      success: (res) => {
        self.setData({
          usMovieList: self.data.usMovieList.concat(res.data.subjects)
        });
      }
    });
  }
})