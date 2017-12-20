import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';
import SearchBar from './components/Search_Bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video_List';
import VideoDetails from './components/Video_Details';

const API_KEY = 'AIzaSyC_HZG9eEASScqMJcQDYNrfLClJ9tr_-wM';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos:[],
      selectedVideo: null
    };

    this.videoSearch('Grigor Dimitrov');
  }
  
  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
      }, 
      (videos) => {this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000)

    return (
      <div>
        <div className="wrapper-search-bar">
          <SearchBar onSearchTermChanged={videoSearch}/>
        </div>
        <div className="row">
          <VideoDetails video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
