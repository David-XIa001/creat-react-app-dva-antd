import React, { Component } from 'react';
import { Link } from 'dva/router';
 
class CCC extends Component {
  render() {
    return (
      <div>
        <p>
          CCC页
        </p>
        <Link to={'/'}>去AAA页</Link>
      </div>
    );
  }
}
 
export default CCC;