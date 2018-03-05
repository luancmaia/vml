import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class RepoInfoWrapper extends React.Component {

	renderCommits(commits) {
		if ( commits.length > 0 ) {
			return (<ul className="commits-list">
					{commits.map(item => (
						<li className="commits-list-item">
							<span className="commit-message">
								{item.commit.message}
							</span>
						</li>
					))}
				</ul>);
		}
	}

	render() {
		const { current_repo, commits, requestMoreCommits, loadMoreCommits, commits_page } = this.props;
		const loadMore = loadMoreCommits && commits.length >= 20 ? 
			<span className="btn-load-more" onClick={requestMoreCommits.bind(this, current_repo, commits_page)}>LOAD MORE COMMITS</span>: '';
		return (
			<div>
				<h4>{current_repo.name}</h4>
				<div className="repo-stats">
					<span className="stats-item">
						<i class="fa fa-star"></i>
						{current_repo.stargazers_count}
					</span>
					<span className="stats-item">
						<i class="fa fa-code-branch"></i>
						{current_repo.forks_count}
					</span>
				</div>
				{this.renderCommits(commits)}
				{loadMore}
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    commits : state.commits,
    current_repo : state.current_repo,
    commits_page: state.commits_page,
    loadMoreCommits: state.loadMoreCommits
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestMoreCommits : (item, page) => dispatch({
		type: 'LOAD_MORE_COMMITS',
		payload: axios.get(`https://api.github.com/repos/globocom/${item.name}/commits`, {
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