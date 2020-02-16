import Clone from './Clone.svelte';

const clone = new Clone({
	target: document.body,
	props: {
		name: 'clone'
	}
});

export default clone;