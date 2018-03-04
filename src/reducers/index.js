const initialState = {
	fetchingRepo: false,
	fetchingCommits: false,
	fetchingMoreCommits: false,
	repos: [],
	commits: [],
	current_repo: [],
	commits_page: 1
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case "REQUEST_REPO_PENDING":
			return Object.assign({}, state, { fetchingRepo: true });

		case "REQUEST_REPO_FULFILLED":
			return Object.assign({}, state, { fetchingRepo: false, repos: action.payload.data.items });

		case "SET_CURRENT_REPO":
			return Object.assign({}, state, { current_repo: action.payload } );

		case "LOAD_MORE_COMMITS_PENDING":
			return Object.assign({}, state, { fetchingMoreCommits: true })

		case "LOAD_MORE_COMMITS_FULFILLED":
			return Object.assign({}, state, { 
				fetchingMoreCommits: false,
				commits: state.commits.concat(action.payload.data),
				commits_page: state.commits_page + 1 
			})

		case "REQUEST_COMMITS_PENDING":
			return Object.assign({}, state, { fetchingCommits: true, commits: [] });

		case "REQUEST_COMMITS_FULFILLED":
			return Object.assign({}, state, { fetchingCommits: false, commits: action.payload.data });
	}
	return state;
}

export default reducer;