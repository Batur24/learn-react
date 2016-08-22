import React from 'react'

var Tencent = React.createClass({
    getInitialState: function() {
        console.log("initial state");
        return({
            popular: false
        })
    },
    componentWillMount: function() {
        console.log("comonent will mount");
        this.state.popular = true;
    },
    componentDidlMount: function() {
        console.log("comonent Did mount");
    },
    render: function(){
        console.log("render function");
        console.log(this.state.popular);
        return <div>Tencent</div>
    }
})

export {Tencent};
