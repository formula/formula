import isdate from './isdate';

function interpolator(a, b) {
	if (a === b || a !== a) return () => a;

	const type = typeof a;

	if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
		throw new Error('Cannot interpolate values of different type');
	}

	if (Array.isArray(a)) {
		const arr = b.map((bi, i) => {
			return get_interpolator(a[i], bi);
		});

		return t => arr.map(fn => fn(t));
	}

	if (type === 'object') {
		if (!a || !b) throw new Error('Object cannot be null');

		if (isdate(a) && isdate(b)) {
			a = a.getTime();
			b = b.getTime();
			const delta = b - a;
			return t => new Date(a + t * delta);
		}

		const keys = Object.keys(b);
		const interpolators = {};

		keys.forEach(key => {
			interpolators[key] = get_interpolator(a[key], b[key]);
		});

		return t => {
			const result = {};
			keys.forEach(key => {
				result[key] = interpolators[key](t);
			});
			return result;
		};
	}

	if (type === 'number') {
		const delta = b - a;
		return t => a + t * delta;
	}

	throw new Error(`Cannot interpolate ${type} values`);
}
