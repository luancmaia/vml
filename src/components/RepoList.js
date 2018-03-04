import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import RepoItem from './RepoItem';
import { Link } from 'react-router-dom'

class RepoList extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { loadRepositories } = this.props;
		loadRepositories();
	}

	render() {
		const { repos, loadRepoCommits, setCurrentRepo } = this.props;
		const isEmpty = repos.length === 0;

		if ( isEmpty ) {
			return <div>Loading repositories...</div>;
		}

		return (
			repos.map(item => (
				<Link to={`/${item.name}`}>
					<RepoItem repo={item} click={loadRepoCommits.bind(this, item)} />
				</Link>
			))
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    loadRepositories : () => dispatch({
		type: 'REQUEST_REPO',
		payload: axios.get('https://api.github.com/search/repositories?q=user:globocom&sort=stars:desc')
	}),
	loadRepoCommits : (item) => {
		dispatch({
			type: 'SET_CURRENT_REPO',
			payload: item
		}),
		dispatch({
			type: 'REQUEST_COMMITS',
			payload: axios.get('https://api.github.com/repos/globocom/'+item.name+'/commits', {
				params: {
					page: 1,
					per_page: 20
				}
			})
		})
	}
  }
}

const mapStateToProps = state => {
  return {
    repos : state.repos
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);