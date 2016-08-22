import React from 'react'
import $ from "jquery"

var HNGET = React.createClass({
  getInitialState: function() {
    return {
      allID: 'allId',
      newsID: 'newsID',
      newsTitle: 'newsTitle',
      newsLink: 'newsLink',
      topNews: [12334272,12334271,12334270,12334269,12334268,12334267,12334266,12334265],
      testNew: {"title":"hh"}
    };
  },

  componentDidMount: function() {
      var topNewsApi = "https://hacker-news.firebaseio.com/v0/topstories.json";
	  this.serverRequest = $.get(topNewsApi, function (topNewsResult) {
		  this.setState({
			topNews: topNewsResult
		});
      }.bind(this));
  },

  componentWillMount: function() {
	 var aNewsApi = "https://hacker-news.firebaseio.com/v0/item/";
	  var tempList = []
	  for(var i=0; i<this.state.topNews.length; i++){
		  this.serverRequest = $.get(aNewsApi+this.state.topNews[i]+".json", function (aNews) {
		  tempList.push(aNews);
			  this.setState({
				testNew: tempList
			  });
		  console.log(this.state.testNew);
		}.bind(this));
	  }
  },

  render: function() {
	var allNews = [];
	for(var i=0; i<this.state.testNew.length; i++){
		allNews.push(<p>
						<a href={this.state.testNew[i].url}>{this.state.testNew[i].title}{this.state.testNew[i].text}</a>
					</p>);
	}
    return (
      <div>
		{allNews}
      </div>
    );
  }
});

const HackerNewsTitle = () =>  (
            <div className="hacker-news-title"> 
                <b><a href="#" className="hnname">Hacker News</a></b>
                <a href="#">new</a>
                <a href="#">comments</a>
                <a href="#">ask</a>
                <a href="#">jobs</a>
                <a href="#">submit</a>
            </div> 
)

const HackerNewsContent = () => (
            <div className="hacker-news-content">
                <td>
                    <a href="#">hello</a>
                </td>
            </div>
)

const HackerNews = () => (
        <div>
            <HackerNewsTitle />
            <HackerNewsContent />
            <HNGET source="https://hacker-news.firebaseio.com/v0/topstories.json"/>
        </div>
    )

export {HackerNews};
