import React from 'react';
import RepoList from './RepoList';
import RepoInfoWrapper from './RepoInfoWrapper';

class App extends React.Component {
	render() {
		return (
			<div>
				<nav style={{ width: '40%', display: 'inline-block' }}>
					<h2>Repositories</h2>
					<RepoList />
				</nav>
				<main style={{ width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
					<RepoInfoWrapper />
				</main>
			</div>
		);
	}
}

export default App;