import React from 'react'

var Baidu = React.createClass({
    render(){
		var baiduNavStyle = {
								position: "absolute",
								top: 190,
								right: 20,
								display: "block",
							};
        var baiduStyle = {
                            textAlign: "center",
                            marginTop: 200
                         };
        var textStyle = {
                            width: 300,
                            height: 20
                        };
        var btnStyle = {
							backgroundColor: "#38f",
							color: "white",
                        };
		var baiduLink = {
							paddingLeft: 10,
							color: "black"
						};
		var moreProduct = {
							marginLeft: 10,
							width: 80,	
							height: 30,	
							backgroundColor: "#38f",
							color: "white"
						  };
        return (
			<div>
				<div id="baidu-nav" style={baiduNavStyle}>
					<a href="#"  style={baiduLink} >糯米</a>
					<a href="#"  style={baiduLink} >新闻</a>
					<a href="#"  style={baiduLink} >hao123</a>
					<a href="#"  style={baiduLink} >地图</a>
					<a href="#"  style={baiduLink} >视频</a>
					<a href="#"  style={baiduLink} >贴吧</a>
					<a href="#"  style={baiduLink} >登录</a>
					<a href="#"  style={baiduLink} >设置</a>
					<button style={moreProduct} >更多产品</button>
				</div>
				<div style={baiduStyle}>
					<input type="text" style={textStyle}/>
					<input type="button" value="百度一下" style={btnStyle}/>
				</div>
			</div>
            )
    }
})

export {Baidu};
