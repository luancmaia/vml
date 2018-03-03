import React from 'react';
import { connect } from 'react-redux';

class RepoInfoWrapper extends React.Component {
	render() {
		const { commits } = this.props;
		return (
			commits.map(item => (
				<div>{item.commit.message}</div>
			))
		);
	}
}

const mapStateToProps = state => {
  return {
    commits : state.commits
  }
}

export default connect(
  mapStateToProps,
)(RepoInfoWrapper);