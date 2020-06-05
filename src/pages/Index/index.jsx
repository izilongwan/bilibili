import { Layout, message } from 'antd';
import * as APICrawl from '~/api/crawl';
import * as APIIndex from '~/api/index';
import * as APIUser from '~/api/user';
import Context from '~/components/Index/Context';
import LayHeader from '~/components/Index/Header';
import LaySidebar from '~/components/Index/Sidebar';
import Title from '~/components/Index/Title';
import { API_NAME, BILI, MESSAGE } from '~/config';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { SetUser } from '~/store/actions';
import { asyncFunc } from '~/utils/tools';
import './index.scss';

const { Content } = Layout;

const { GET, UPDATE } = API_NAME;

const { CRAWLER, TITLE } = BILI;

const { SERVER_ERROR, REFRESH_DATA, CHNAGE_DRUATION } = MESSAGE;

const Index = ({ children }) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  let { pathname } = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});
  const [pageSize, setPageSize] = useState(20);
  const [searchCount, setSearchCount] = useState(null);
  const [curPathname, setCurPathname] = useState('');

  pathname === '/' && (pathname = '/carousel');

  const checkStatus = useCallback(async () => {
    const [err, { code, data }] = await asyncFunc(APIUser.checkStatus);

    if (err) {
      message.error(SERVER_ERROR);
      return;
    }

    code !== 0 ? push('/login') : dispatch(SetUser(data));
  }, [dispatch, push]);

  const getData = useCallback(async (e) => {
    const apiName = GET[pathname];

    if (!cache[pathname]) {
      cache[pathname] = {};
      cache[pathname].data = [];
      cache[pathname].page = 1;
      cache[pathname].num = pageSize;
    }

    const { page, num, data } = cache[pathname];

    checkStatus();
    setData([]);
    setLoading(true);

    const [err, { code, msg, res }] = await asyncFunc(
      () => APIIndex.getData({ apiName, page, num })
    );

    if (err) {
      message.error(SERVER_ERROR);
      setLoading(false);
      return;
    }

    if (code === 0) {
      const result = pathname === '/crawler'
        ? CRAWLER.map((item, idx) => {
          if (idx === 0) {
            const { duration, status } = res.data;

            item.duration = duration;
            item.status = status;
          }

          return {
            ...item,
            key: idx + 1,
            statusLoading: false,
            durationLoading: false
          }
        })
        : res.data.map((item, idx) => ({
          ...item,
          tags: item.tags ? JSON.parse(item.tags) : item.tags,
          key: idx + 1,
          statusLoading: false,
          tagsLoading: false
        }))

      if (result.length > 0) {
        data[page - 1] = result;
        cache[pathname].count = res.count;
        setCache({ ...cache });
        setData(result);
      }

      setLoading(false);
      message.success(e ? REFRESH_DATA : msg);
      return;
    }

    message.error(msg);
    setLoading(false);
  }, [pathname, cache, checkStatus, pageSize]);

  const checkCache = useCallback(async () => {
    const res = cache[pathname];

    if (res) {
      const { data, page } = res;

      if (data[page - 1]) {
        setData(data[page - 1]);
        return;
      }
    }

    getData();

  }, [cache, pathname, getData]);

  const updateData = async (item, status, id) => {
    item.statusLoading = true;
    setData([...data]);

    const [err, { code, msg }] = await asyncFunc(
      () => APIIndex.updateDataStatus({
        apiName: UPDATE[pathname],
        status,
        id
      })
    );

    if (err) {
      message.error(SERVER_ERROR);
      return;
    }

    if (code === 0) {
      item.statusLoading = false;
      item.status = status;
      message.success(msg);
      setData([...data]);
      return;
    }

    item.statusLoading = false;
    message.error(msg);
    setData([...data]);
  };

  const crawling = async (item, func, duration) => {
    item.statusLoading = true;
    setData([...data]);

    const [err, { code, msg }] = await asyncFunc(func);

    if (err) {
      message.error(SERVER_ERROR);
      return;
    }

    if (code === 0) {
      item.statusLoading = false;
      item.durationLoading = false;
      setData([...data]);
      message.success(duration ? CHNAGE_DRUATION : msg);
      return;
    }

    message.error(msg);
    item.statusLoading = false;
    item.durationLoading = false;
    setData([...data]);
  };

  const onAutoAsyncDataChange = async (checked, e) => {
    const item = data[0];

    item.status = checked ? 1 : 0;

    const { status, duration } = item;
    const conf = {
      duration,
      status
    }

    crawling(item, () => APICrawl.autoAsyncData(conf), !e);
  }

  const onSelectAutoAsyncDuration = async (value) => {
    const item = data[0];

    item.duration = value;
    item.durationLoading = true;
    onAutoAsyncDataChange(item.status);
  }

  const onTableClick = (ev, record) => {
    const e = ev || window.event;
    const { target, srcElement } = e || e.srcElement;
    let { type, status, crawl } = (target || srcElement).dataset;

    switch (type) {
      case 'status':
        status = parseInt(status);
        updateData(record, status, record.id);
        break;
      case 'crawl':
        crawling(
          record,
          () => APICrawl.crawlData({ apiName: crawl })
        );
        break;
      default:
        break;
    }
  };

  const onSelectChange = async (tags, item) => {
    const { id } = item;

    const apiName = UPDATE[pathname];

    item.tagsLoading = true;
    setData([...data]);

    const [err, { code, msg }] = await asyncFunc(
      () => APIIndex.updateDataTags({ apiName, tags, id })
    );

    if (err) {
      message.error(SERVER_ERROR);
      return;
    }

    if (code === 0) {
      item.tags = tags;
      item.tagsLoading = false;
      message.success(msg);
      setData([...data]);
      return;
    }

    message.error(msg);
    item.tagsLoading = false;
    setData([...data]);
  };

  const onPageChange = (page, pageSize) => {
    cache[pathname].page = page;
    checkCache();
  }

  const onShowSizeChange = (current, size) => {
    delete cache[pathname];
    setPageSize(size);
  };

  const onSearchData = async (kw) => {
    setLoading(true);

    const apiName = GET[pathname];
    const [err, { code, msg, res }] = await asyncFunc(
      () => APIIndex.searchData({ apiName, kw })
    )

    if (err) {
      message.error(SERVER_ERROR);
      setLoading(false);
      return;
    }

    if (code === 0) {
      setData(res.data);
      setSearchCount(res.count);
    }

    message.success(msg);
    setLoading(false);
  }

  const onRestoreSearch = useCallback(() => setSearchCount(null), []);

  useEffect(() => {
    if (pathname !== curPathname) {
      setCurPathname(pathname);
      onRestoreSearch();
      return;
    }

    checkCache();
  }, [checkCache, curPathname, onRestoreSearch, pathname]);

  const item = cache[pathname];
  const total = searchCount === null
    ? (item ? item.count : 0)
    : searchCount;
  const _pageSize = searchCount === null
    ? (item ? item.num : pageSize)
    : searchCount;
  const disabled = searchCount === null ? false : true;

  const titleProps = { resetData: getData, TITLE, pathname, loading };
  const pagination = {
    showTotal: (total) => `共${ total }条`,
    showQuickJumper: true,
    pageSize: _pageSize,
    onChange: onPageChange,
    onShowSizeChange,
    total,
    disabled
  };
  const childrenProps = {
    scroll: { y: 600 },
    pagination,
    loading,
    data,
    onTableClick,
    onSelectChange,
    updateData,
    onAutoAsyncDataChange,
    onSelectAutoAsyncDuration,
    onSearchData,
    onRestoreSearch
  };

  return (
    <Layout className="layout">
      <LayHeader />

      <Layout className="main">
        <LaySidebar pathname={ pathname } />

        <Layout style={ { margin: '24px 0 0 24px', backgroundColor: '#fff' } }>
          <Content className="site-layout-background content">
            { TITLE[pathname] && <Title { ...titleProps } /> }

            {
              <Context.Provider value={ childrenProps }>
                { children }
              </Context.Provider>
            }
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Index;
