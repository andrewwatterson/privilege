import React from 'react';

export default class HRInfoBar extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {

		return(
			<div className="info-bar">
				<div className="info-bar-content">
					{this.props.content}
				</div>
				<div className="info-bar-arrow"></div>
			</div>
		);
	}
}