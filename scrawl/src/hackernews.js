import React from 'react'
import $ from "jquery"

var HNGET = React.createClass({
  getInitialState: function() {
    return {
      newsID: 'newsID',
      newsTitle: 'newsTitle',
      newsLink: 'newsLink'
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var news = result;
      this.setState({
        newsID: news,
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <a href={this.state.newsID}>{this.state.newsID}</a>.
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
