import React, { Component } from 'react';
import { Link } from 'dva/router';
 
class BBB extends Component {
  render() {
    return (
      <div>
        <p>
          BBB页
        </p>
        <Link to={'/ccc'}>去ccc页</Link>
      </div>
    );
  }
}
 
export default BBB;