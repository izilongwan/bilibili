import { baseURL } from '~/config';

export default {
  USER_LOGIN_ACTION: 'user/login_action',
  USER_CHECK_STATUS: 'user/check_status',
  USER_LOGOUT_ACTION: 'user/logout_action',

  GET_DATA: 'data/get_data',
  SEARCH_DATA: 'data/search_data',
  UPDATE_DATA_STATUS: 'data/update_data_status',
  UPDATE_DATA_TAGS: 'data/update_data_tags',
  CRAWL_DATA: 'crawler/crawl_data',
  AUTO_ASYNC_DATA: 'crawler/auto_async_data'
}

export const CAPTCHA = baseURL + '/user/random_img';
