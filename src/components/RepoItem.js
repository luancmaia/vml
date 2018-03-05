import React from 'react';

class RepoItem extends React.Component {

	render() {
		const {repo, click} = this.props;

		return (
			<div className="repo-item" onClick={click}>
				<h3 className="repo-name">{repo.name}</h3>
				<span className="repo-stars">
					<i class="fa fa-star"></i>
					{repo.stargazers_count}
				</span>
			</div>
		);
	}
}

export default RepoItem;