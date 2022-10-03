import cookie from 'cookie';
import type { RequestHandler } from '@sveltejs/kit';

// GET /app/theme
export const get: RequestHandler = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.cookie || '');
	let theme = cookies.theme;
	theme = theme === 'dark' ? 'light' : 'dark';
	return {
		status: 303,
		headers: {
			location: '/',
			'set-cookie': `theme=${theme}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`
		},
		body: ''
	};
};
