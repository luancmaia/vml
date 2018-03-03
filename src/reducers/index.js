const initialState = {
	fetchingRepo: false,
	repos: [],
	commits: [],
	commitsPage: 1,
	commitsNextPage: true
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case "REQUEST_REPO_PENDING":
			return Object.assign({}, state, { fetchingRepo: true });

		case "REQUEST_REPO_FULFILLED":
			return Object.assign({}, state, { fetchingRepo: false, repos: action.payload.data.items });

		case "REQUEST_COMMITS_PENDING":
			return Object.assign({}, state, { fetchingRepo: true });

		case "REQUEST_COMMITS_FULFILLED":
			return Object.assign({}, state, { fetchingRepo: true, commits: action.payload.data });
	}
	return state;
}

export default reducer;