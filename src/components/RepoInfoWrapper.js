import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class RepoInfoWrapper extends React.Component {

	componentDidUpdate() {
		console.log(this.props);
	}

	render() {
		const { current_repo, commits, loadMoreCommits, commits_page } = this.props;
		const loadMore = commits.length < 20 ? 'Repository details' : <span onClick={loadMoreCommits.bind(this, current_repo, commits_page)}>load more</span>;
		return (
			<div>
				<h4>{current_repo.name}</h4>
				<span>{current_repo.forks_count}</span>
				<span>{current_repo.stargazers_count}</span>
				{commits.map(item => (
					<div>{item.commit.message}</div>
				))}
				{loadMore}
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    commits : state.commits,
    current_repo : state.current_repo,
    commits_page: state.commits_page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMoreCommits : (item, page) => dispatch({
		type: 'LOAD_MORE_COMMITS',
		payload: axios.get('https://api.github.com/repos/globocom/'+item.name+'/commits', {
			params: {
				page: page + 1,
				per_page: 20
			}
		})
	})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoInfoWrapper);