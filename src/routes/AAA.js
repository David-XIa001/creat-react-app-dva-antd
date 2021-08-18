import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

class AAA extends Component {
  render() {
    return (
      <div>
        <p>
          AAA页
        </p>
        <Link to={'/aaa/bbb'}>
          <Button type={'primary'} icon={< SearchOutlined />}>
            去BBB页面
          </Button>
        </Link>
      </div >
    );
  }
}

export default AAA;