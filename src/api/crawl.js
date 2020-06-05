import request from '~/utils/request'
import API from './config'

export const crawlData = (data) =>
  request({
    url: API.CRAWL_DATA,
    method: 'post',
    data
  })

export const autoAsyncData = (data) =>
  request({
    url: API.AUTO_ASYNC_DATA,
    method: 'post',
    data
  })
