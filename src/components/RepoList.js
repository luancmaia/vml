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
		const { repos, loadRepoCommits, setCurrentRepo, disableMenu } = this.props;
		const isEmpty = repos.length === 0;

		if ( isEmpty ) {
			return <div>Loading repositories...</div>;
		}

		return (
			repos.map(item => (
				<Link to={`/${item.name}`}>
					<RepoItem repo={item} click={loadRepoCommits.bind(this, item, disableMenu)} />
				</Link>
			))
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    loadRepositories : () => dispatch({
		type: 'REQUEST_REPO',
		payload: axios.get('https://api.github.com/search/repositories?q=user:globocom&sort=stars:desc&per_page=200')
	}),
	loadRepoCommits : (item, flag) => {
		dispatch({
			type: 'SET_CURRENT_REPO',
			payload: item
		}),
		dispatch({
			type: 'REQUEST_COMMITS',
			payload: axios.get(`https://api.github.com/repos/globocom/${item.name}/commits`, {
				params: {
					page: 1,
					per_page: 20
				}
			})
		}),
		dispatch({
			type: 'DISABLE_MENU',
			payload: flag ? false : true
		})
	}
  }
}

const mapStateToProps = state => {
  return {
    repos : state.repos,
    disableMenu: state.disableMenu
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);