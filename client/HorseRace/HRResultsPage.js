import React from 'react';

export default class HRResultsPage extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {

		return(
			<div className="results-wrapper">
				<div className="results-row characters">
					<div className="results-row-question">Results</div>
				</div>
				<div className="results-row totals">
					<div className="results-row-question">Total privilege points</div>
				</div>
			</div>
		);
	}
}