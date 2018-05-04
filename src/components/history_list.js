import React from 'react';
import HistoryListItem from './history_list_item';

const HistoryList = (props) =>{
	const historyItems = props.historyVideos.map((historyVideos) => {
		return <HistoryListItem
		onVideoSelect={props.onVideoSelect}
		
		key={historyVideos.etag} 
		historyVideos={historyVideos} />
	});

	return (
			
			<ul className="col-md-4 list-group">
				{historyItems}
			</ul>
		);
};

export default HistoryList;