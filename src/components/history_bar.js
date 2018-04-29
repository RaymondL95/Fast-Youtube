import React, { Component } from 'react';

class history_bar extends Component{
	constructor(props){
		super(props);
		this.state= {history: ''};
	}
	render(){
		return (
			<div className="History media col-md-8">
			History Bar
			</div>
		);
	}
}

export default history_bar;