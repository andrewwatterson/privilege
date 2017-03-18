export default class HRHelpers {
	static appearTransitionOptions = {
		transitionName: {
			appear: 'initial-state',
			appearActive: 'transitioning',
		},
		transitionEnter: false,
		transitionLeave: false,
		transitionAppear: true,
		transitionAppearTimeout: 100
	};

	static enterTransitionOptions = {
		transitionName: {
			enter: 'initial-state',
			enterActive: 'transitioning',
		},
		transitionEnter: true,
		transitionEnterTimeout: 100,
		transitionLeave: false,
		transitionAppear: false
	};
}