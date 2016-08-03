import React, { Component } from 'react';
import './App.css';
import {logo} from './Logo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>学习React</h2>
        </div>
        <p className="App-test">
        </p>
      </div>
    );
  }
}
var LeftBar = React.createClass({
  handleClick: function(){
		alert("click haha");
	},
  render: function() {
    return (
      <div className="site">
        <ul>
            <li><a href="/google.html">Google</a></li>
            <li><a href="/baidu.html">Baidu</a></li>
        </ul>
      </div>
    );
  }
})

class App3 extends Component {
  render() {
    return (
      <div className="Site">
        <ul>
            <li>shoping</li>
            <li>play</li>
        </ul>
      </div>
    );
  }
}

var Img = React.createClass({
  sayHello: function(){
		alert("I am happy");
	},
  render: function() {
	  var img = {
					src : "https://github.com/Batur24/learn-react/blob/gh-pages/scrawl/src/images/test.jpg?raw=true",
					alt : "hello"
				};
	  var Styles = {
					 marginTop: 20,
					 textAlign: "center"
				   };
	  var ImgStyles = {
					 width: "50%"
				   };
    return (
      <div style={Styles}>
		<h1 onClick={this.sayHello}>{this.props.name}</h1>
		<img src={img.src} alt={img.alt} style={ImgStyles}/>
      </div>
    );
  }
})

var Button = React.createClass({
  handleClick: function(arg){
		alert(arg);
	},
  render: function(){
  	//var Styles = {height: 40, color: "green"};
  	var BtnValue = {value: this.props.value};
	return (
			  <button onClick={() => this.handleClick(BtnValue.value)} >
				{BtnValue.value}
			  </button>
		   )
	}
})

var Input = React.createClass({
	render: function(){
		var Styles = {textAlign: "center"};
		return (<div style={Styles}>
					<input type="text" placeholder={this.props.placeHolder}/>
					<Button value={this.props.value}/>
				</div>)
	}
})

export {App, LeftBar, Img, Button, Input};
