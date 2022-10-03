import cookie from 'cookie';

export const getSession = async (event) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const theme = cookies.theme || 'light';

	return {
		theme
	};
};

export const handle = async ({ event, resolve }) => {
	
	const response = await resolve({...event});
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	let headers = response.headers
	
	
	//console.log(headers)
	const cookiesArray = [];

	if (!cookies.theme) {
		const theme = event.request.headers.get('theme') || 'light';
		cookiesArray.push(`theme=${theme};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`);
	}
	if (cookiesArray.length > 0) {
		headers = {
			...response.headers,
			'set-cookie': cookiesArray	
		};
	}
	
	return {
		...response,
		headers
	};
};
