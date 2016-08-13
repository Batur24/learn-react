import React from 'react'
import $ from "jquery"

var HNGET = React.createClass({
  getInitialState: function() {
    return {
      allID: 'allId',
      newsID: 'newsID',
      newsTitle: 'newsTitle',
      newsLink: 'newsLink'
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        allID: result,
      });
    }.bind(this));
  },

  render: function() {
	var allNews = [];
	for(var i=0; i<this.state.newsID.length; i++){
		allNews.push(<p><a href={this.state.allID[i]}>{this.state.allID[i]}</a></p>);
	}
    return (
      <div>
		{allNews}
      </div>
    );
  }
});

var HackerNewsTitle = React.createClass({
    render: function() {
        return(
            <div className="hacker-news-title"> 
                <b><a href="#" className="hnname">Hacker News</a></b>
                <a href="#">new</a>
                <a href="#">comments</a>
                <a href="#">ask</a>
                <a href="#">jobs</a>
                <a href="#">submit</a>
            </div> 
        )
    }
})

var HackerNewsContent = React.createClass({
    render: function() {
        return(
            <div className="hacker-news-content">
                <td>
                    <a href="#">hello</a>
                </td>
            </div>
        )
    }
})

var HackerNews = React.createClass({
    render: function() {
       return(
            <div>
                <HackerNewsTitle />
                <HackerNewsContent />
				<HNGET source="https://hacker-news.firebaseio.com/v0/topstories.json" />
            </div>
        ) 
    }
})

export {HackerNews};
