import React from 'react';
import ReactDOM from 'react-dom';
import {App,LeftBar,Input,Img} from './App';
import './index.css';

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
