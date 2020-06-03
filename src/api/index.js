import request from 'utils/request'
import API from './config'

export const getData = (data) =>
  request({
    url: API.GET_DATA,
    method: 'post',
    data
  })

export const searchData = (data) =>
  request({
    url: API.SEARCH_DATA,
    method: 'post',
    data
  })


export const updateDataStatus = (data) =>
  request({
    url: API.UPDATE_DATA_STATUS,
    method: 'post',
    data
  })

export const updateDataTags = (data) =>
  request({
    url: API.UPDATE_DATA_TAGS,
    method: 'post',
    data
  })
