import request from '~/utils/request'
import API from './config'

export const login = (data) =>
  request({
    url: API.USER_LOGIN_ACTION,
    method: 'post',
    data
  })

export const checkStatus = () =>
  request({
    url: API.USER_CHECK_STATUS,
    method: 'get'
  })

export const logout = () =>
  request({
    url: API.USER_LOGOUT_ACTION,
    method: 'get'
  })
