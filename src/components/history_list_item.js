import React from 'react';

const HistoryListItem = (props) => {
	if(props.selectedVideo){
		console.log(props.selectedVideo.video);
	}
	return (
		<li>
			Hey
		</li>
		);

};

export default HistoryListItem;