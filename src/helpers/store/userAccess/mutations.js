export default {
	setCurrentUserRoles: (state, _currentUserRoles) =>
		(state.currentUserRoles = _currentUserRoles),
	setCurrentRouteRole: (state, _currentRouteRole) =>
		(state.currentRouteRole = _currentRouteRole),
	setInternalUser: (state, internalUser) =>
		(state.internalUser = internalUser),
};
