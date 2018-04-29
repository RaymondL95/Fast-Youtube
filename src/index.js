import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import FastYoutube from './components/title';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import HistoryBar from './components/history_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBZv2473iYL4OPbbhjKoEkl9U8ZunknEYg';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
		videos:[],
		selectedVideo: null
		 };
		this.videoSearch('surfboard');
	}
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) =>{
			this.setState({ 
				videos:videos,
				selectedVideo: videos[0]
			});
		});
	}
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
		return(
			<div> 
				<FastYoutube />
				<SearchBar onSearchTermChange={videoSearch}/> 
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
				videos={this.state.videos}/>
				<HistoryBar/>
			</div>
		);
	}
}

ReactDOM.render(<App></App>,document.querySelector('.container'));
