import React from 'react';
import RepoList from './RepoList';
import { connect } from 'react-redux';
import RepoInfoWrapper from './RepoInfoWrapper';
import { Route } from 'react-router-dom'
import MenuBar from './MenuBar';
import {isMobile} from 'react-device-detect';

class App extends React.Component {
	render() {
		const { disableMenu } = this.props;
		const isMobile = window.innerWidth < 1024 ? true : false;
		const hideMenu = disableMenu && isMobile ? 'hide-menu' : '';
		
		return (
			<div className="app-wrapper">
				<MenuBar />
				<nav className={`repos-wrapper ${hideMenu}`}>
					<h2>Repositories</h2>
					<RepoList />
				</nav>
				<main className="commits-wrapper">
					<Route path="/:repository" component={RepoInfoWrapper} />
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    disableMenu: state.disableMenu
  }
}

export default connect(
  mapStateToProps,
)(App);