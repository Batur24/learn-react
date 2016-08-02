import React, { Component } from 'react';
import logo from './logo.svg';
import testjpg from './test.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          oTo get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
		<div><Button value="图片" onClick={this.handleClick}/></div>
		<div><Button value="音乐"/></div>
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
		alert("testing, hello");
	},
  render: function() {
	  var img = {
					src : {testjpg},
					alt : "hello"
				};
	  var Styles = {
					 marginTop: 20,
					 width: "50%",
					 marginLeft: "10%"
				   };
	  var ImgStyles = {
					 width: "100%",
					 marginLeft: "35%"
				   };
    return (
      <div style={Styles}>
		<h1 onClick={this.sayHello}>{this.props.name}</h1>
		<img src={testjpg} alt={img.alt} style={ImgStyles}/>
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
