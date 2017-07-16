// douban.js

const URI = 'https://api.douban.com/v2/movie';

const wxRequest = (params, url) => {
  wx.request({
    url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'json',
    },
    success(res) {
      if (params.success) {
        params.success(res);
      }
    },
    fail(res) {
      if (params.fail) {
        params.fail(res);
      }
    },
    complete(res) {
      if (params.complete) {
        params.complete(res);
      }
    },
  });
};

const getComingMovies = (params) => {
  wxRequest(params, `${URI}/coming_soon?start=${params.start}&count=${params.count}`);
}

const getTheaterMovies = (params) => {
  wxRequest(params, `${URI}/in_theaters?start=${params.start}&count=${params.count}`);
}

const getUSMovies = (params) => {
  wxRequest(params, `${URI}/us_box?start=${params.start}&count=${params.count}`);
}

module.exports = {
  getComingMovies: getComingMovies,
  getTheaterMovies: getTheaterMovies,
  getUSMovies: getUSMovies
}