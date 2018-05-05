import React from 'react';

const HistoryListItem = ({historyVideos, onVideoSelect}) => {
	const imageUrl = historyVideos.snippet.thumbnails.default.url;
	return (
		<li onClick={() => onVideoSelect(historyVideos) }	className="list-inline-item">
			<div className="video-list media">
			
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{historyVideos.snippet.title}</div>
				</div>

			</div>
		</li>
		);

};


export default HistoryListItem;