import React from 'react'
import ReactDOM from 'react-dom'
import {App,LeftBar,Input,Img,webLink} from './App'
import './index.css'
import Baidu from './baidu'
import {Router, Route, hashHistory} from 'react-router'


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Input value="搜索" placeHolder="search"/>,
  document.getElementById('search')
);

ReactDOM.render(
  <Img name="Bear"/>,
  document.getElementById('img')
);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={webLink} />
    <Route path="/baidu" component={Baidu} />
  </Router>,
  document.getElementById('leftbar')
);
