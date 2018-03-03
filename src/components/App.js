import React from 'react';
import RepoList from './RepoList';
import RepoInfoWrapper from './RepoInfoWrapper';

class App extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<h2>Repositories</h2>
					<RepoList />
				</nav>
				<main>
					<RepoInfoWrapper />
				</main>
			</div>
		);
	}
}

export default App;