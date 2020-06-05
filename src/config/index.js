const m = 60 * 1000,
      h = 60 * m;

export const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5011/api'
  : 'http://bili.hlhs.store/api';

export const SIDEBAR_MENU = [
  { text: '轮播图', path: '/carousel' },
  { text: '推广', path: '/promote' },
  { text: '电竞赛事', path: '/e_sports' },
  { text: '直播ing', path: '/live' },
  { text: '全站榜', path: '/full' },
  { text: '原创榜', path: '/origin' },
  { text: '新番榜', path: '/bangumi' },
  { text: '影视榜', path: '/cinema' },
  { text: '新人榜', path: '/rookie' },
  { text: '数据爬虫', path: '/crawler' }
]

export const MESSAGE = {
  NETWORK_ERROR: '网络请求错误',
  SERVER_ERROR: '服务端错误',
  REFRESH_DATA: '数据刷新成功',
  CHNAGE_DRUATION: '爬取时间修改成功'
}

export const DURATION = [
  { value:  30 * m, text: '每三十分钟' },
  { value:  h, text: '每一小时' },
  { value:  2 * h, text: '每两小时' },
  { value:  3 * h, text: '每三小时' },
  { value:  5 * h, text: '每五小时' },
  { value:  10 * h, text: '每十小时' },
  { value:  24 * h, text: '每一天' }
]

export const BILI = {
  TITLE: {
    '/carousel': '轮播图',
    '/promote': '推广',
    '/e_sports': '推广',
    '/live': '直播ing',
    '/full': '全站榜',
    '/origin': '原创榜',
    '/bangumi': '新番榜',
    '/cinema': '影视榜',
    '/rookie': '新人榜',
    '/crawler': '数据爬虫'
  },
  CRAWLER: [
    {
      title: '【Bilibili】自动爬取数据',
      color: 'magenta'
    },
    {
      title: '【Bilibili】轮播图数据',
      apiName: 'crawlDataCarousel',
      text: '爬取',
      color: 'red'
    },
    {
      title: '【Bilibili】推广数据',
      apiName: 'crawlDataPromote',
      text: '爬取',
      color: 'volcano'
    },
    {
      title: '【Bilibili】电竞赛事数据',
      apiName: 'crawlDataESports',
      text: '爬取',
      color: 'lime'
    },
    {
      title: '【Bilibili】直播ing数据',
      apiName: 'crawlDataLive',
      text: '爬取',
      color: 'orange'
    },
    {
      title: '【Bilibili】全站榜数据',
      apiName: 'crawlDataFull',
      text: '爬取',
      color: 'gold'
    },
    {
      title: '【Bilibili】原创榜数据',
      apiName: 'crawlDataOrigin',
      text: '爬取',
      color: 'purple'
    },
    {
      title: '【Bilibili】新番榜数据',
      apiName: 'crawlDataBangumi',
      text: '爬取',
      color: 'green'
    },
    {
      title: '【Bilibili】影视榜数据',
      apiName: 'crawlDataCinema',
      text: '爬取',
      color: 'blue'
    },
    {
      title: '【Bilibili】新人榜数据',
      apiName: 'crawlDataRookie',
      text: '爬取',
      color: 'geekblue'
    },
  ],
  FIELD: ['全站', '动画', '国创相关', '舞蹈', '音乐', '游戏', '科技', '数码', '生活', '鬼畜', '时尚', '娱乐', '影视', '番剧', '国产动画', '纪录片', '电影', '电视'],
}

export const API_NAME = {
  GET: {
    '/carousel': 'getDataCarousel',
    '/promote': 'getDataPromote',
    '/e_sports': 'getDataESports',
    '/live': 'getDataLive',
    '/full': 'getDataFull',
    '/origin': 'getDataOrigin',
    '/rookie': 'getDataRookie',
    '/bangumi': 'getDataBangumi',
    '/cinema': 'getDataCinema',
    '/crawler': 'getAutoAsync'
  },
  UPDATE: {
    '/carousel': 'updateDataCarousel',
    '/promote': 'updateDataPromote',
    '/e_sports': 'updateDataESports',
    '/live': 'updateDataLive',
    '/full': 'updateDataFull',
    '/origin': 'updateDataOrigin',
    '/rookie': 'updateDataRookie',
    '/bangumi': 'updateDataBangumi',
    '/cinema': 'updateDataCinema'
  }
}

export default {
  SIDEBAR_MENU,

  MESSAGE,

  DURATION,

  BILI,

  API_NAME
}
