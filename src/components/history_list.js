import React from 'react';
import HistoryListItem from './history_list_item';

const HistoryList = (props) =>{
	return (
		<div>
			<span className="HistoryListClass">History</span>:
			<div items>
				<ul className="col-md-4 list-group">
					<HistoryListItem selectedVideo={props.selectedVideo} />
				</ul>
			</div>
		</div>
		);
};

export default HistoryList;