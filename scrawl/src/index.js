import React from 'react'
import ReactDOM from 'react-dom'
import {App,LeftBar,Input,Img,webLink} from './App'
import './index.css'
import {Baidu} from './baidu'
import {Tencent} from './tencent'
import {Router, Route, hashHistory} from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={webLink} />
    <Route path="/baidu" component={Baidu} />
    <Route path="/tencent" component={Tencent} />
  </Router>,
  document.getElementById('leftbar')
);
