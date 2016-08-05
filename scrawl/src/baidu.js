import React from 'react'

var Baidu = React.createClass({
    render(){
        var baiduStyle = {
                            textAlign: "center",
                            marginTop: 200
                         };
        var textStyle = {
                            width: 300,
                            height: 20
                        };
        return (
            <div style={baiduStyle}>
                <input type="text" style={textStyle}/>
                <input type="button" value="百度一下" />
            </div>
            )
    }
})

export {Baidu};
